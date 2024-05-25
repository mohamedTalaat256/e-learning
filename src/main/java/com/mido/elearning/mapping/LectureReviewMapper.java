package com.mido.elearning.mapping;

import com.mido.elearning.Dto.LectureReviewDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.CourseReview;
import com.mido.elearning.entity.LectureReview;
import com.mido.elearning.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class LectureReviewMapper {
    private final UserRepository userRepository;

    public static LectureReviewDto entityToDto(LectureReview entity){


        return LectureReviewDto.builder().id(entity.getId())
                .contentText(entity.getContentText())
                .author(UserMapper.entityToPublicUserDto(entity.getAuthor()))
                .build();

    }


    public static LectureReview dtoToEntity(LectureReviewDto dto){

        return LectureReview.builder().id(dto.getId())
                .contentText(dto.getContentText())
                .author(new AppUser(dto.getAuthor().getId()))
                .build();
    }


}
