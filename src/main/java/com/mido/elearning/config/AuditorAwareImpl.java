package com.mido.elearning.config;

import com.mido.elearning.entity.AppUser;
import com.mido.elearning.serviceImpl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

import java.util.Optional;


@Component
public class AuditorAwareImpl implements AuditorAware<AppUser> {

    @Autowired
    private UserServiceImpl userService;


    @Override
    public Optional<AppUser> getCurrentAuditor() {

        return Optional.of(new AppUser(userService.getCurrentAuthUser().getId()));
    }
}