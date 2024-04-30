package com.mido.elearning.mapping;

import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.entity.Faculty;

public class FacultyMapper {

    public static FacultyDto entityToDto(Faculty entity){

        return FacultyDto.builder().id(entity.getId())
                .sepicailization(AcadimicSepicailizationMapper.entityToDto(entity.getSepicailization()))
                .university(UniversityMapper.entityToDto(entity.getUniversity()))
                .build();
    }


    public static Faculty DtoToEntity(FacultyDto dto){

        return Faculty.builder().id(dto.getId())
                .sepicailization(AcadimicSepicailizationMapper.dtoToEntity(dto.getSepicailization()))
                .university(UniversityMapper.dtoToEntity(dto.getUniversity()))
                .build();
    }
}
