package com.mido.elearning.Dto;

import com.mido.elearning.enums.Country;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UniversityDto {

    private String name;
    private Country country;
}
