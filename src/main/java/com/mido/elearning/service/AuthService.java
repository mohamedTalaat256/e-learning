package com.mido.elearning.service;

import com.mido.elearning.Dto.AccessTokenDto;
import com.mido.elearning.Dto.JWTResponseDto;
import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.TokenInfo;
import com.mido.elearning.utils.AppResponse;

public interface AuthService {

    public AppResponse login(String username, String password);

    public TokenInfo createLoginToken(String userName, Long userId);

    public AccessTokenDto refreshAccessToken(String refreshToken);

    public void logoutUser(String refreshToken);
}
