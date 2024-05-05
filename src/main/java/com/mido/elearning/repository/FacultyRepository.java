package com.mido.elearning.repository;

import com.mido.elearning.entity.AcademicSpecialization;
import com.mido.elearning.entity.Faculty;
import com.mido.elearning.entity.University;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FacultyRepository extends JpaRepository<Faculty, Long > {

    List<Faculty> findByAcademicSpecializationAndUniversity(AcademicSpecialization specialization, University university);
}
