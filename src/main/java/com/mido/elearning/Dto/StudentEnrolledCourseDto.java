package com.mido.elearning.Dto;

import lombok.*;

import java.time.LocalDateTime;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentEnrolledCourseDto {

    private CourseDto course;
    private PublicUserDto student;
    private LocalDateTime enrolledAt;
    private int progress;
}
