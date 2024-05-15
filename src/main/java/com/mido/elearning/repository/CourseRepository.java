package com.mido.elearning.repository;

import com.mido.elearning.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {

    List<Course> findAllByAuthorId(Long authorId);
}
