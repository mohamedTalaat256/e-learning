package com.mido.elearning.service;

import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.entity.Faculty;

import java.util.List;

public interface FacultyService {

    public FacultyDto save(FacultyDto dto);


    public void deleteById(Long id);


}
