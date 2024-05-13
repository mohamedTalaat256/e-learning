package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.Dto.CourseUploadRequest;
import com.mido.elearning.entity.Course;
import com.mido.elearning.mapping.CourseMapper;
import com.mido.elearning.repository.CourseRepository;
import com.mido.elearning.service.CourseService;
import com.mido.elearning.utils.FileUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;


@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {


    private final CourseRepository courseRepository;
    @Override
    public CourseDto save(CourseUploadRequest courseUploadRequest) throws IOException {

        String courseCoverImageName = FileUtils.SaveFileAndGetName(courseUploadRequest.getCoverImage(), "");

        CourseDto courseDto = CourseMapper.uploadRequestToDto(courseUploadRequest, courseCoverImageName);

        Course newCourse = courseRepository.save(CourseMapper.dtoToEntity(courseDto));

        return CourseMapper.entityToDto(newCourse);
    }
}
