package com.mido.elearning.repository;

import com.mido.elearning.entity.University;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UniversityRepository extends JpaRepository< University, Long> {
}
