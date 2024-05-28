package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.Dto.CourseUploadRequest;
import com.mido.elearning.Dto.PublicUserDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.Course;
import com.mido.elearning.entity.CourseReview;
import com.mido.elearning.entity.StudentsEnrolledCourse;
import com.mido.elearning.exception.RecordNotFoundException;
import com.mido.elearning.mapping.CourseMapper;
import com.mido.elearning.mapping.CourseReviewMapper;
import com.mido.elearning.mapping.UserMapper;
import com.mido.elearning.repository.*;
import com.mido.elearning.service.CourseService;
import com.mido.elearning.utils.FileUtils;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;
    private final StudentsEnrolledCourcesRepository studentsEnrolledCourcesRepository;
    private final UserServiceImpl userService;
    private final CourseMapper courseMapper;

    @Override
    public CourseDto save(CourseUploadRequest courseUploadRequest, MultipartFile coverImageFile) throws IOException {

        String courseCoverImageName = FileUtils.SaveFileAndGetName(coverImageFile, courseUploadRequest.getTitle());
        CourseDto courseDto = courseMapper.uploadRequestToDto(courseUploadRequest, courseCoverImageName);
        courseDto.setLecturesCount(0);
        courseDto.setEnrolledStudentsCount(0);
        courseDto.setReviewsCount(0);
        Course newCourse = courseRepository.save(CourseMapper.dtoToEntity(courseDto));

        return CourseMapper.entityToDto(newCourse);
    }

    @Override
    public List<CourseDto> findAll() {
        return courseRepository.findAll().stream()
                .map(CourseMapper::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public CourseDto findById(Long id) {

        Set<PublicUserDto> enrolledStudents = new HashSet<>();

        Course course = courseRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("course not found"));
        course.getStudentsEnrolledCourse().forEach( e-> enrolledStudents.add( UserMapper.entityToPublicUserDto(e.getStudent())));

        CourseDto courseDto = CourseMapper.entityToDto(course);
        courseDto.setEnrolledStudents(enrolledStudents);
        courseDto.setEnrolledStudentsCount(enrolledStudents.size());
        courseDto.setReviews(
                course.getReviews().stream()
                .map(CourseReviewMapper::entityToDto)
                .collect(Collectors.toList()));

        return  courseDto;
    }

    @Override
    public List<CourseDto> findByAuthorId(Long authorId) {

        return courseRepository.findAllByAuthorId(authorId).stream()
                .map(CourseMapper::entityToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public Object enRollToCourse(Long courseId){
        AppUser student =  userService.getCurrentAuthUser();

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));


        StudentsEnrolledCourse data = StudentsEnrolledCourse.builder()
                .student(student)
                        .course(course)
                            .enrolledAt(LocalDateTime.now())
                                .progress(0)
                                        .build();

        incrementCourseStudentEnrolledCountByOne(course.getId());
        studentsEnrolledCourcesRepository.save(data);

        return course;
    }

    @Override
    public void updateCoverImage(MultipartFile file) throws IOException {
    }

    @Override
    public Set<CourseDto> findMyEnrolledCourses() {
        return null;
    }


    public void incrementCourseLectureNumbersByOne(Long courseId){
        Course currentCourse = courseRepository.findById(courseId).orElseThrow(() -> new RecordNotFoundException("Course not found"));
        currentCourse.setLecturesCount(currentCourse.getLecturesCount()+1);
        courseRepository.save(currentCourse);
    }

    public void incrementCourseStudentEnrolledCountByOne(Long courseId){
        Course currentCourse = courseRepository.findById(courseId).orElseThrow(() -> new RecordNotFoundException("Course not found"));
        currentCourse.setEnrolledStudentsCount(currentCourse.getEnrolledStudentsCount() +1);
        courseRepository.save(currentCourse);
    }

    public void updateCourseReview(Long courseId){
        Course currentCourse = courseRepository.findById(courseId).orElseThrow(() -> new RecordNotFoundException("Course not found"));
        currentCourse.setReviewsCount(currentCourse.getReviewsCount() + 1);
        courseRepository.save(currentCourse);

        double sum = 0.0;
        int count = 0;
        for (CourseReview review : currentCourse.getReviews()) {
            sum += review.getRatingValue();
            count++;
        }
        if (count > 0) {
            currentCourse.setRating(sum / count);
        } else {
            currentCourse.setRating(0); // Set to null if no reviews
        }
        courseRepository.save(currentCourse); // Update course entity
    }
}
