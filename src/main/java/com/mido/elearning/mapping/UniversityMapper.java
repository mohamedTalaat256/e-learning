package com.mido.elearning.mapping;

import com.mido.elearning.Dto.RoleDto;
import com.mido.elearning.Dto.UniversityDto;
import com.mido.elearning.entity.Role;
import com.mido.elearning.entity.University;

public class UniversityMapper {
    public static UniversityDto entityToDto(University entity){
        return UniversityDto.builder().name(entity.getName())
                .country(entity.getCountry())
                .build();
    }


    public static University dtoToEntity(UniversityDto entity){
        return University.builder().name(entity.getName())
                .country(entity.getCountry())
                .build();
    }
}
