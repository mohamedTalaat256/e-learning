package com.mido.elearning.repository;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.entity.Course;
import com.mido.elearning.entity.Role;
import com.mido.elearning.entity.StudentsEnrolledCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface StudentsEnrolledCourcesRepository extends JpaRepository<StudentsEnrolledCourse, Long> {

    int countByCourseId(Long id);

    Set<StudentsEnrolledCourse> findByStudentId(Long studentId);
}