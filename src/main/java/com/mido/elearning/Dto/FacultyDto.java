package com.mido.elearning.Dto;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FacultyDto {

    private Long id;
    private AcademicSpecializationDto sepicailization;
    private UniversityDto university;
}
