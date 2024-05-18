package com.mido.elearning.repository;

import com.mido.elearning.Dto.CourseReviewDto;
import com.mido.elearning.entity.Course;
import com.mido.elearning.entity.CourseReview;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseReviewRepository extends JpaRepository<CourseReview, Long> {

    List<CourseReview> findByCourseId(Long id);
}
