package com.mido.elearning.mapping;

import com.mido.elearning.Dto.RoleDto;
import com.mido.elearning.Dto.UniversityDto;
import com.mido.elearning.entity.Role;
import com.mido.elearning.entity.University;
import com.mido.elearning.enums.Country;

public class UniversityMapper {
    public static UniversityDto entityToDto(University entity){
        return UniversityDto.builder().id(entity.getId())
                .name(entity.getName())
                .country(entity.getCountry().getValue())
                .build();
    }


    public static University dtoToEntity(UniversityDto dto){
        return University.builder().id(dto.getId())
                .name(dto.getName())
                .country(Country.valueOf(dto.getCountry()))
                .build();
    }
}
