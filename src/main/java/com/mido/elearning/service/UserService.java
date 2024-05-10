package com.mido.elearning.service;

import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;

import java.util.List;

public interface UserService {

    AppUser save(UserDto registerRequest);

    List<UserDto> getAll();
    UserDto getMyProfile();
    UserDto updateProfile(UserDto newData);


}
