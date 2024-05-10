package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.exception.DuplicateRecordException;
import com.mido.elearning.exception.InternalServerErrorException;
import com.mido.elearning.mapping.UserMapper;
import com.mido.elearning.repository.RoleRepository;
import com.mido.elearning.repository.UserRepository;
import com.mido.elearning.security.AppUserDetail;
import com.mido.elearning.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService  {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public List<UserDto> getAll() {
        List<UserDto> result = new ArrayList<>();
        userRepository.findAll().forEach(e-> result.add(UserMapper.entityToDto(e)));
        return result;
    }

    @Override
    public UserDto getMyProfile() {
        Object user = SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        if (user instanceof UserDetails userDetails) {
            String username = userDetails.getUsername();

            Optional<AppUser> appUser =	userRepository.findByUsername(username);
            if (!appUser.isPresent()) {
                throw new UsernameNotFoundException("This User Not found with selected user name :- " + username);
            }
            return UserMapper.entityToDto(appUser.get());
        }

        throw new InternalServerErrorException("fail");
    }

    @Override
    public UserDto updateProfile(UserDto newData) {
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<AppUser> appUser =	userRepository.findByUsername(userName);
        if (!appUser.isPresent()) {
            throw new UsernameNotFoundException("This User Not found with selected user name :- " + userName);
        }
        return new AppUserDetail(appUser.get());
    }

    public AppUser save(UserDto registerRequest) {
        Optional<AppUser> user = userRepository.findUserByEmail(registerRequest.getEmail());
        if(user.isPresent()){
            throw new DuplicateRecordException("This Email is already exist");
        }else{
            registerRequest.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
            return userRepository.save(UserMapper.DtoToEntity( registerRequest));
        }
    }

}
