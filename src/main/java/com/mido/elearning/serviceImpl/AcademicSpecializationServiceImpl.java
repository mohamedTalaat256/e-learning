package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.AcademicSpecializationDto;
import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.entity.AcademicSpecialization;
import com.mido.elearning.exception.NoContentException;
import com.mido.elearning.exception.RecordNotFoundException;
import com.mido.elearning.mapping.AcademicSpecializationMapper;
import com.mido.elearning.mapping.FacultyMapper;
import com.mido.elearning.repository.AcademicSpecializationRepository;
import com.mido.elearning.service.AcademicSpecializationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AcademicSpecializationServiceImpl implements AcademicSpecializationService {
    private final AcademicSpecializationRepository specializationRepository;


    @Override
    public List<AcademicSpecializationDto> findAll() {
        List<AcademicSpecializationDto> specializations = new ArrayList<>();
        specializationRepository.findAll().forEach(e-> specializations.add(AcademicSpecializationMapper.entityToDto(e)));
        return specializations;
    }

    @Override
    public AcademicSpecializationDto save(AcademicSpecializationDto dto) {
        return AcademicSpecializationMapper.entityToDto(specializationRepository.save(AcademicSpecializationMapper.dtoToEntity(dto)));
    }
    @Override
    public void deleteById(Long id) {

        Optional<AcademicSpecialization> specialization = specializationRepository.findById(id);

        if(specialization.isPresent()){
            specializationRepository.deleteById(id);
        }else{
            throw new RecordNotFoundException("No Academic Specialization With Id "+ id);
        }
    }

    @Override
    public List<AcademicSpecializationDto> findByName(String name) {

        List<AcademicSpecialization> specializations = specializationRepository.findByName(name);

        if(!specializations.isEmpty()){
            List<AcademicSpecializationDto> result = new ArrayList<>();

            specializations.forEach( entity-> result.add(AcademicSpecializationMapper.entityToDto(entity)));
            return result;
        }

        throw new NoContentException("No Faculties Specialization With Name: "+ name);
    }
}
