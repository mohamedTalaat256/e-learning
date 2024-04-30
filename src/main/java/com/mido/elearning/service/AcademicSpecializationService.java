package com.mido.elearning.service;

import com.mido.elearning.Dto.AcademicSpecializationDto;
import com.mido.elearning.Dto.FacultyDto;

import java.util.List;

public interface AcademicSpecializationService {

    public AcademicSpecializationDto save(AcademicSpecializationDto dto);


    public void deleteById(Long id);

    public List<AcademicSpecializationDto> findByName(String name);

}
