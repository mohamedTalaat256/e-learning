package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.CourseReviewDto;
import com.mido.elearning.entity.CourseReview;
import com.mido.elearning.mapping.CourseReviewMapper;
import com.mido.elearning.mapping.UserMapper;
import com.mido.elearning.repository.CourseReviewRepository;
import com.mido.elearning.service.CourseReviewService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class CourseReviewServiceImpl implements CourseReviewService {

    private final CourseReviewRepository courseReviewRepository;
    private final UserServiceImpl userService;
    private final CourseServiceImpl courseService;

    @Override
    public List<CourseReviewDto> findAllByCourseId(Long id) {

        return courseReviewRepository.findByCourseId(id).stream()
                .map(CourseReviewMapper::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public CourseReviewDto save(CourseReviewDto courseReviewDto) {
        courseReviewDto.setAuthor(UserMapper.entityToPublicUserDto(userService.getCurrentAuthUser()));
        CourseReview courseReview = courseReviewRepository.save(CourseReviewMapper.dtoToEntity(courseReviewDto));
        courseService.updateCourseReview(courseReviewDto.getCourse().getId());

        CourseReviewDto reviewDto = CourseReviewMapper.entityToDto(courseReview);
        reviewDto.setAuthor(UserMapper.entityToPublicUserDto(userService.getCurrentAuthUser()));

        return reviewDto;
    }



}
