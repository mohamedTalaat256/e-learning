package com.mido.elearning.repository;

import com.mido.elearning.entity.LectureReview;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LectureReviewRepository extends JpaRepository<LectureReview, Long> {

    List<LectureReview> findByLectureId(Long id);
}
