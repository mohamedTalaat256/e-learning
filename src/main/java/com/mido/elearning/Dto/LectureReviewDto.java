package com.mido.elearning.Dto;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class LectureReviewDto {

    private Long id;
    private String contentText;
    private PublicUserDto author;
    private CourseDto course;

}
