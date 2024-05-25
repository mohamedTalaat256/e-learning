package com.mido.elearning.mapping;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.Dto.CourseUploadRequest;
import com.mido.elearning.Dto.PublicUserDto;
import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.Course;
import com.mido.elearning.exception.InternalServerErrorException;
import com.mido.elearning.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseMapper {
    private final UserRepository userRepository;

    public static CourseDto entityToDto(Course entity){



        return CourseDto.builder().id(entity.getId())
                .title(entity.getTitle())
                .description(entity.getDescription())
                .hours(entity.getHours())
                .price(entity.getPrice())
                .isCourseFree(entity.getIsCourseFree())
                .discount(entity.getDiscount())
                .discountStartDate(entity.getDiscountStartDate())
                .discountEndDate(entity.getDiscountEndDate())
                .author(UserMapper.entityToPublicUserDto(entity.getAuthor()))
                .coverImage(entity.getCoverImage())
                .lecturesCount(entity.getLectures().size())
                .rating(entity.getRating())
                .build();

    }


    public static Course dtoToEntity(CourseDto dto){
        Set<AppUser> enrolledStudents = new HashSet<>();

        return Course.builder().id(dto.getId())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .hours(dto.getHours())
                .price(dto.getPrice())
                .isCourseFree(dto.getIsCourseFree())
                .discount(dto.getDiscount())
                .discountStartDate(dto.getDiscountStartDate())
                .discountEndDate(dto.getDiscountEndDate())
                .author( new AppUser(dto.getAuthor().getId()))
                .coverImage(dto.getCoverImage())
                //.studentsEnrolledCourse(enrolledStudents)
                .rating(dto.getRating())
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
                    .hours(courseUploadRequest.getHours())
                    .price(courseUploadRequest.getPrice())
                    .isCourseFree(courseUploadRequest.getIsCourseFree())
                    .discount(courseUploadRequest.getDiscount())
                    .discountStartDate(courseUploadRequest.getDiscountStartDate())
                    .discountEndDate(courseUploadRequest.getDiscountEndDate())
                    .author(UserMapper.entityToPublicUserDto(appUser.get()))
                    .coverImage(coverImage)
                    .rating(0)
                    .build();
        }
        throw new InternalServerErrorException("internal_server_error");
    }

}
