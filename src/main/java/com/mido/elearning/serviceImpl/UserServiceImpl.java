package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.Dto.PublicUserDto;
import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.exception.DuplicateRecordException;
import com.mido.elearning.exception.InternalServerErrorException;
import com.mido.elearning.mapping.CourseMapper;
import com.mido.elearning.mapping.UserMapper;
import com.mido.elearning.repository.CourseRepository;
import com.mido.elearning.repository.UserRepository;
import com.mido.elearning.security.AppUserDetail;
import com.mido.elearning.service.UserService;
import com.mido.elearning.utils.FileUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService  {
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDto updatePassword(String newPassword)  {
            AppUser currentUser = getCurrentAuthUser();

            if(Objects.equals(currentUser.getPassword(), passwordEncoder.encode( newPassword))){
                currentUser.setPassword(newPassword);
              return  UserMapper.entityToDto(userRepository.save(currentUser));
            }
        throw new InternalServerErrorException("password does not match old password");
    }

    @Override
    public List<UserDto> findAll() {
        List<UserDto> result = new ArrayList<>();
        userRepository.findAll().forEach(e-> result.add(UserMapper.entityToDto(e)));
        return result;
    }

    @Override
    public PublicUserDto findById(Long authorId) {
        AppUser appUser = getCurrentAuthUser();

        List<CourseDto> uploadedCourses = new ArrayList<>();
        courseRepository.findAllByAuthorId(authorId).forEach(e ->
                {
                    e.setAuthor(null);
                    uploadedCourses.add(CourseMapper.entityToDto(e));
                }
        );

        return PublicUserDto.builder().id(appUser.getId())
                .email(appUser.getEmail())
                .username(appUser.getUsername())
                .firstName(appUser.getFirstName())
                .lastName(appUser.getLastName())
                .profileImage(appUser.getProfileImage())
                .dateOfBirth(appUser.getDateOfBirth())
                .organization(appUser.getOrganization())
                .nationality(appUser.getNationality())
                .isEnabled(appUser.isEnabled())
                .uploadedCourses(uploadedCourses)
                .build();
    }

    @Override
    public UserDto getMyProfile() {
        return UserMapper.entityToDto(getCurrentAuthUser());
    }

    @Override
    public UserDto updateProfile(UserDto newData) {

        AppUser currentUser = getCurrentAuthUser();

        currentUser.setFirstName(newData.getFirstName());
        currentUser.setLastName(newData.getLastName());
        currentUser.setDateOfBirth(newData.getDateOfBirth());
        // currentUser.setNationality(newData.getNationality());

        return UserMapper.entityToDto(userRepository.save(currentUser));
    }

    @Override
    public void updateProfileImage(MultipartFile file) throws IOException {

        AppUser currentUser = getCurrentAuthUser();
        String fileName = FileUtils.SaveFileAndGetName(file, currentUser.getUsername());
        currentUser.setProfileImage(fileName);

        userRepository.save(currentUser);
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<AppUser> appUser =	userRepository.findByUsername(userName);
        if (!appUser.isPresent()) {
            throw new UsernameNotFoundException("This User Not found with selected user name :- " + userName);
        }
        return new AppUserDetail(appUser.get());
    }

    public AppUser getCurrentAuthUser() {
        UserDetails user = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userRepository.findByUsername( user.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("This User Not found with selected user name :- " + user.getUsername()));
    }

    public AppUser save(UserDto registerRequest) {
        Optional<AppUser> user = userRepository.findUserByEmail(registerRequest.getEmail());
        if(user.isPresent()){
            throw new DuplicateRecordException("This Email is already exist");
        }else{
            registerRequest.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
            return userRepository.save(UserMapper.dtoToEntity( registerRequest));
        }
    }

}
