package com.mido.elearning.service;

import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;

public interface UserService {

    public AppUser save(UserDto registerRequest);

}
