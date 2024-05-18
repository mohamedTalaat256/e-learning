package com.mido.elearning.Dto;


import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.Course;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class CourseReviewDto {

    private Long id;
    private String contentText;
    private Double ratingValue;
    private PublicUserDto author;
    private CourseDto course;

}
