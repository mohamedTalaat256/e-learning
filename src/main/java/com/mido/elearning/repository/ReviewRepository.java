package com.mido.elearning.repository;

import com.mido.elearning.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByCourseId(Long id);
    List<Review> findByLectureId(Long id);

    int countByCourseId(Long id);
}
