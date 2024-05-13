package com.mido.elearning.mapping;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.Dto.CourseUploadRequest;
import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.Course;
import com.mido.elearning.exception.InternalServerErrorException;
import com.mido.elearning.repository.UserRepository;
import com.mido.elearning.utils.FileUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CourseMapper {
    private final UserRepository userRepository;

    public static CourseDto entityToDto(Course entity){

        Set<UserDto> enrolledStudents = new HashSet<>();

        entity.getEnrolledStudents().forEach(e-> enrolledStudents.add(UserMapper.entityToDto(e)));

        return CourseDto.builder().id(entity.getId())
                .title(entity.getTitle())
                .description(entity.getDescription())
                .price(entity.getPrice())
                .isCourseFree(entity.getIsCourseFree())
                .discount(entity.getDiscount())
                .discountStartDate(entity.getDiscountStartDate())
                .discountEndDate(entity.getDiscountEndDate())
                .author(UserMapper.entityToDto(entity.getAuthor()))
                .coverImage(entity.getCoverImage())
                .enrolledStudents(enrolledStudents)
                .build();

    }


    public static Course dtoToEntity(CourseDto dto){
        Set<AppUser> enrolledStudents = new HashSet<>();

        //dto.getEnrolledStudents().forEach( d -> enrolledStudents.add(UserMapper.dtoToEntity(d)));

        return Course.builder().id(dto.getId())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .price(dto.getPrice())
                .isCourseFree(dto.getIsCourseFree())
                .discount(dto.getDiscount())
                .discountStartDate(dto.getDiscountStartDate())
                .discountEndDate(dto.getDiscountEndDate())
                .author(UserMapper.dtoToEntity(dto.getAuthor()))
                .coverImage(dto.getCoverImage())
                .enrolledStudents(enrolledStudents)
                .build();
    }


    public  CourseDto uploadRequestToDto(CourseUploadRequest courseUploadRequest, String coverImage) throws IOException {

        Object user = SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        if (user instanceof UserDetails userDetails) {
            String username = userDetails.getUsername();

            Optional<AppUser> appUser =	userRepository.findByUsername(username);
            if (!appUser.isPresent()) {
                throw new UsernameNotFoundException("can_not_upload_the_course_because_uploader_user_not_found ");
            }

            return CourseDto.builder().title(courseUploadRequest.getTitle())
                    .description(courseUploadRequest.getDescription())
                    .price(courseUploadRequest.getPrice())
                    .isCourseFree(courseUploadRequest.getIsCourseFree())
                    .discount(courseUploadRequest.getDiscount())
                    .discountStartDate(courseUploadRequest.getDiscountStartDate())
                    .discountEndDate(courseUploadRequest.getDiscountEndDate())
                    .author(UserMapper.entityToDto(appUser.get()))
                    .coverImage(coverImage)
                    .build();
        }
        throw new InternalServerErrorException("internal_server_error");
    }

}
