package com.mido.elearning.Dto;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class LectureUploadRequest {

    private String title;
    private String description;
    private int length;
    private CourseDto course;

}
