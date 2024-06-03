package com.mido.elearning.Dto;


import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class ReviewDto {

    private Long id;
    private String contentText;
    private Double ratingValue;
    private PublicUserDto author;
    private CourseDto course;
    private LectureDto lecture;
    private LocalDateTime createdAt;

}
