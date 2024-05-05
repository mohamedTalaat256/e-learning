package com.mido.elearning.service;

import com.mido.elearning.Dto.UniversityDto;

import java.util.List;

public interface UniversityService {


    List<UniversityDto> findAll();
    UniversityDto save(UniversityDto dto);
    void deleteById(Long id);


}
