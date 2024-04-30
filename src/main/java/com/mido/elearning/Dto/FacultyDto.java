package com.mido.elearning.Dto;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FacultyDto {

    private AcadimicSepicailizationDto sepicailization;
    private UniversityDto university;
}
