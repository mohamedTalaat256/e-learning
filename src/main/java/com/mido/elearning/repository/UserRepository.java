package com.mido.elearning.repository;

import com.mido.elearning.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Long, AppUser> {
}
