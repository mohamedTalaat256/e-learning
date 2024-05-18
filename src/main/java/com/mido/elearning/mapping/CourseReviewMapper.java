package com.mido.elearning.mapping;

import com.mido.elearning.Dto.CourseReviewDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.Course;
import com.mido.elearning.entity.CourseReview;
import com.mido.elearning.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class CourseReviewMapper {
    private final UserRepository userRepository;

    public static CourseReviewDto entityToDto(CourseReview entity){


        return CourseReviewDto.builder().id(entity.getId())
                .contentText(entity.getContentText())
                //.course(CourseMapper.entityToDto(entity.getCourse()))
                .author(UserMapper.entityToPublicUserDto(entity.getAuthor()))
                .ratingValue(entity.getRatingValue())
                .build();

    }


    public static CourseReview dtoToEntity(CourseReviewDto dto){

        return CourseReview.builder().id(dto.getId())
                .contentText(dto.getContentText())
                .course(new Course(dto.getCourse().getId()))
                .author(new AppUser(dto.getAuthor().getId()))
                .ratingValue(dto.getRatingValue())
                .build();
    }


}
