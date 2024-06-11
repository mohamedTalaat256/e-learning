package com.mido.elearning.mapping;

import com.mido.elearning.Dto.ReviewDto;
import com.mido.elearning.entity.*;
import com.mido.elearning.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class ReviewMapper {

    public static ReviewDto entityToDto(Review entity){

        return ReviewDto.builder().id(entity.getId())
                .contentText(entity.getContentText())
                .author(UserMapper.entityToPublicUserDto(entity.getAuthor()))
                .ratingValue(entity.getRatingValue())
                .createdAt(entity.getCreatedAt())
                .build();
    }


    public static Review dtoToEntity(ReviewDto dto){

        if(dto.getLecture() != null){
            return Review.builder().id(dto.getId())
                    .contentText(dto.getContentText())
                    .lecture(new Lecture(dto.getLecture().getId()))
                    //.author(new AppUser(dto.getAuthor().getId()))
                    .ratingValue(dto.getRatingValue())
                    .build();
        }
        return Review.builder().id(dto.getId())
                .contentText(dto.getContentText())
                .course(new Course(dto.getCourse().getId()))
                //.author(new AppUser(dto.getAuthor().getId()))
                .ratingValue(dto.getRatingValue())
                .build();
    }


}
