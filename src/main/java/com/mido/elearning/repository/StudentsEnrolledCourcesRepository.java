package com.mido.elearning.repository;

import com.mido.elearning.entity.Role;
import com.mido.elearning.entity.StudentsEnrolledCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentsEnrolledCourcesRepository extends JpaRepository<StudentsEnrolledCourse, Long> {

}