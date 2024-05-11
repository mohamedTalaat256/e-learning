package com.mido.elearning.service;

import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface UserService {

    AppUser save(UserDto registerRequest);

    List<UserDto> getAll();
    UserDto getMyProfile();
    UserDto updateProfile(UserDto newData);
    void updateProfileImage(MultipartFile file) throws IOException;


}
