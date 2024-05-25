package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.LectureReviewDto;
import com.mido.elearning.mapping.LectureReviewMapper;
import com.mido.elearning.mapping.UserMapper;
import com.mido.elearning.repository.LectureReviewRepository;
import com.mido.elearning.service.LectureReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class LectureReviewServiceImpl implements LectureReviewService {

    private final LectureReviewRepository lectureReviewRepository;
    private final UserServiceImpl userService;

    @Override
    public List<LectureReviewDto> findAllByLectureId(Long id) {

        return lectureReviewRepository.findByLectureId(id).stream()
                .map(LectureReviewMapper::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public LectureReviewDto save(LectureReviewDto lectureReviewDto) {
        lectureReviewDto.setAuthor(UserMapper.entityToPublicUserDto(userService.getCurrentAuthUser()));

        return LectureReviewMapper.entityToDto(lectureReviewRepository.save(LectureReviewMapper.dtoToEntity(lectureReviewDto)));
    }
}
