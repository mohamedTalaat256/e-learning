package com.mido.elearning.service;

import com.mido.elearning.Dto.AcademicSpecializationDto;
import com.mido.elearning.Dto.FacultyDto;

public interface AcademicSpecializationService {

    public AcademicSpecializationDto save(AcademicSpecializationDto dto);


    public boolean deleteById(Long id);

    public AcademicSpecializationDto findByName(String name);

}
