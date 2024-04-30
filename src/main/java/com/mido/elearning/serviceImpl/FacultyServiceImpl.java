package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.mapping.FacultyMapper;
import com.mido.elearning.repository.FacultyRepository;
import com.mido.elearning.service.FacultyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class FacultyServiceImpl implements FacultyService {


    private final FacultyRepository facultyRepository;
    @Override
    public FacultyDto save(FacultyDto dto) {
      return FacultyMapper.entityToDto(facultyRepository.save(FacultyMapper.DtoToEntity(dto)));
    }

    @Override
    public boolean deleteById(Long id) {
        return false;
    }

    @Override
    public FacultyDto findByName(String name) {
        return null;
    }
}
