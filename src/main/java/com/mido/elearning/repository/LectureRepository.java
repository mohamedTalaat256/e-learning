package com.mido.elearning.repository;

import com.mido.elearning.entity.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LectureRepository extends JpaRepository<Lecture, Long> {

    List<Lecture> findAllByCourseIdOrderByLectureOrderAsc(Long courseId);


    @Query("SELECT MAX(l.lectureOrder) FROM Lecture l")
    int findMaxLectureOrder();

    int countByCourseId(Long id);

}
