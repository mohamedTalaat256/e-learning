package com.mido.elearning.service;

import com.mido.elearning.Dto.AcademicSpecializationDto;
import com.mido.elearning.Dto.FacultyDto;

import java.util.List;

public interface AcademicSpecializationService {

    List<AcademicSpecializationDto> findAll();
    AcademicSpecializationDto save(AcademicSpecializationDto dto);
    void deleteById(Long id);
    List<AcademicSpecializationDto> findByName(String name);

}
