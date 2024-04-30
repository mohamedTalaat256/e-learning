package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.AcademicSpecializationDto;
import com.mido.elearning.mapping.AcademicSpecializationMapper;
import com.mido.elearning.repository.AcademicSpecializationRepository;
import com.mido.elearning.service.AcademicSpecializationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AcademicSpecializationServiceImpl implements AcademicSpecializationService {
    private final AcademicSpecializationRepository specializationRepository;
    @Override
    public AcademicSpecializationDto save(AcademicSpecializationDto dto) {
        return AcademicSpecializationMapper.entityToDto(specializationRepository.save(AcademicSpecializationMapper.dtoToEntity(dto)));
    }
    @Override
    public boolean deleteById(Long id) {
        return false;
    }

    @Override
    public AcademicSpecializationDto findByName(String name) {
        return null;
    }
}
