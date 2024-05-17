package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.Dto.CourseUploadRequest;
import com.mido.elearning.Dto.EnrollRequest;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.Course;
import com.mido.elearning.mapping.CourseMapper;
import com.mido.elearning.repository.CourseRepository;
import com.mido.elearning.repository.UserRepository;
import com.mido.elearning.service.CourseService;
import com.mido.elearning.utils.FileUtils;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class CourseServiceImpl implements CourseService {


    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

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
    public CourseDto findById(Long id) {
        return null;
    }

    @Override
    public List<CourseDto> findByAuthorId(Long authorId) {

        List<CourseDto> data = new ArrayList<>();
        courseRepository.findAllByAuthorId(authorId).forEach( e->  data.add(CourseMapper.entityToDto(e)));
        return data;
    }


    @Transactional
    public Object enRollToCourse( EnrollRequest enrollRequest){
        AppUser student = userRepository.findById(enrollRequest.getStudentId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Course course = courseRepository.findById(enrollRequest.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        if (!student.getEnrolledCourses().contains(course)) {
            student.getEnrolledCourses().add(course);
        }
        if (!course.getEnrolledStudents().contains(student)) {
            course.getEnrolledStudents().add(student);
        }

        userRepository.save(student);
        courseRepository.save(course);
        return course;

    }

    @Override
    public void updateCoverImage(MultipartFile file) throws IOException {
            /*String fileName = FileUtils.SaveFileAndGetName(file);

            currentUser.setProfileImage(fileName);
            userRepository.save(currentUser);*/
    }
}
