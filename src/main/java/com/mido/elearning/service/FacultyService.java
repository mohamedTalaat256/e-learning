package com.mido.elearning.service;

import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.entity.Faculty;

import java.util.List;
import java.util.Optional;

public interface FacultyService {


    List<FacultyDto> findAll();
    FacultyDto findById(Long id);
    FacultyDto save(FacultyDto dto);
    FacultyDto update(FacultyDto dto);
    void deleteById(Long id);



}
