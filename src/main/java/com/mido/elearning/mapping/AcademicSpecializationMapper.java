package com.mido.elearning.mapping;

import com.mido.elearning.Dto.AcademicSpecializationDto;
import com.mido.elearning.entity.AcademicSpecialization;

public class AcademicSpecializationMapper {

    public static AcademicSpecializationDto entityToDto(AcademicSpecialization entity){
        return AcademicSpecializationDto.builder().name(entity.getName())
                .build();
    }


    public static AcademicSpecialization dtoToEntity(AcademicSpecializationDto dto){
        return AcademicSpecialization.builder().name(dto.getName())
                .build();
    }
}
