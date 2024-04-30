package com.mido.elearning.service;

import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.entity.Faculty;

public interface FacultyService {

    public FacultyDto save(FacultyDto dto);


    public boolean deleteById(Long id);

    public FacultyDto findByName(String name);

}
