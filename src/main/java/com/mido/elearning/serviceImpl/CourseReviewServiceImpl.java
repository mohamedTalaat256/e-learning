package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.Dto.CourseReviewDto;
import com.mido.elearning.Dto.CourseUploadRequest;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.Course;
import com.mido.elearning.exception.RecordNotFoundException;
import com.mido.elearning.mapping.CourseMapper;
import com.mido.elearning.mapping.CourseReviewMapper;
import com.mido.elearning.mapping.UserMapper;
import com.mido.elearning.repository.CourseRepository;
import com.mido.elearning.repository.CourseReviewRepository;
import com.mido.elearning.repository.UserRepository;
import com.mido.elearning.service.CourseReviewService;
import com.mido.elearning.service.CourseService;
import com.mido.elearning.utils.FileUtils;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class CourseReviewServiceImpl implements CourseReviewService {

    private final CourseReviewRepository courseReviewRepository;
    private final UserServiceImpl userService;

    @Override
    public List<CourseReviewDto> findAllByCourseId(Long id) {

        return courseReviewRepository.findByCourseId(id).stream()
                .map(CourseReviewMapper::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public CourseReviewDto save(CourseReviewDto courseReviewDto) {
        courseReviewDto.setAuthor(UserMapper.entityToPublicUserDto(userService.getCurrentAuthUser()));
        return CourseReviewMapper.entityToDto(courseReviewRepository.save(CourseReviewMapper.dtoToEntity(courseReviewDto)));
    }
}
