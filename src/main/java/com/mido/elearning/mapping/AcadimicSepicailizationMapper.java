package com.mido.elearning.mapping;

import com.mido.elearning.Dto.AcadimicSepicailizationDto;
import com.mido.elearning.entity.AcadimicSepicailization;

public class AcadimicSepicailizationMapper {

    public static AcadimicSepicailizationDto entityToDto(AcadimicSepicailization entity){
        return AcadimicSepicailizationDto.builder().name(entity.getName())
                .build();
    }


    public static AcadimicSepicailization  dtoToEntity(AcadimicSepicailizationDto dto){
        return AcadimicSepicailization.builder().name(dto.getName())
                .build();
    }
}
