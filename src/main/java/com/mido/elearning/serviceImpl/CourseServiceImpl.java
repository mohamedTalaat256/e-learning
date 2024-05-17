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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {


    private final CourseRepository courseRepository;

    private final CourseMapper courseMapper;
    @Override
    public CourseDto save(CourseUploadRequest courseUploadRequest, MultipartFile coverImageFile) throws IOException {

        String courseCoverImageName = FileUtils.SaveFileAndGetName(coverImageFile, courseUploadRequest.getTitle());
        CourseDto courseDto = courseMapper.uploadRequestToDto(courseUploadRequest, courseCoverImageName);
        Course newCourse = courseRepository.save(CourseMapper.dtoToEntity(courseDto));

        return CourseMapper.entityToDto(newCourse);
    }

    @Override
    public List<CourseDto> findAll() {
        List<CourseDto> data = new ArrayList<>();

        courseRepository.findAll().forEach( e-> data.add(CourseMapper.entityToDto(e)));
        return data;
    }

    @Override
    public CourseDto findById() {
        return null;
    }

    @Override
    public List<CourseDto> findByAuthorId(Long authorId) {

        List<CourseDto> data = new ArrayList<>();
        courseRepository.findAllByAuthorId(authorId).forEach( e->  data.add(CourseMapper.entityToDto(e)));
        return data;
    }

    @Override
    public void updateCoverImage(MultipartFile file) throws IOException {
            /*String fileName = FileUtils.SaveFileAndGetName(file);

            currentUser.setProfileImage(fileName);
            userRepository.save(currentUser);*/
    }
}
