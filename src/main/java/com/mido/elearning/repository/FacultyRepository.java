package com.mido.elearning.repository;

import com.mido.elearning.entity.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FacultyRepository extends JpaRepository<Faculty, Long > {
}
