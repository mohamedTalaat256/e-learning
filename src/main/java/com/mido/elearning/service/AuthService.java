package com.mido.elearning.service;

import com.mido.elearning.Dto.AccessTokenDto;
import com.mido.elearning.Dto.JWTResponseDto;
import com.mido.elearning.Dto.RegisterDto;
import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.TokenInfo;
import com.mido.elearning.utils.AppResponse;

public interface AuthService {

     AppResponse login(String username, String password);
     UserDto register(RegisterDto registerDto);
     TokenInfo createLoginToken(String userName, Long userId);
     AccessTokenDto refreshAccessToken(String refreshToken);
     void logoutUser(String refreshToken);

}
