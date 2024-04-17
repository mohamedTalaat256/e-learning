package com.mido.elearning.repository;

import com.mido.elearning.entity.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacultyRepository extends JpaRepository<Long, Faculty> {
}
