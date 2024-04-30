package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.entity.AcademicSpecialization;
import com.mido.elearning.entity.Faculty;
import com.mido.elearning.exception.NoContentException;
import com.mido.elearning.exception.RecordNotFoundException;
import com.mido.elearning.mapping.FacultyMapper;
import com.mido.elearning.repository.AcademicSpecializationRepository;
import com.mido.elearning.repository.FacultyRepository;
import com.mido.elearning.service.FacultyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class FacultyServiceImpl implements FacultyService {


    private final FacultyRepository facultyRepository;
    private final AcademicSpecializationRepository specializationRepository;
    @Override
    public FacultyDto save(FacultyDto dto) {
      return FacultyMapper.entityToDto(facultyRepository.save(FacultyMapper.dtoToEntity(dto)));
    }

    @Override
    public void deleteById(Long id) {

        Optional<Faculty> faculty = facultyRepository.findById(id);

        if(faculty.isPresent()){
            facultyRepository.deleteById(id);
        }else{
            throw new RecordNotFoundException("No Faculty With Id: "+ id);
        }
    }


}
