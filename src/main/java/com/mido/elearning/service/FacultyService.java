package com.mido.elearning.service;

import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.entity.Faculty;

import java.util.List;

public interface FacultyService {


    List<FacultyDto> findAll();
    FacultyDto save(FacultyDto dto);
    void deleteById(Long id);


}
