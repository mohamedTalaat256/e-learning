package com.mido.elearning.service;

import com.mido.elearning.Dto.AccessTokenDto;
import com.mido.elearning.Dto.JWTResponseDto;
import com.mido.elearning.Dto.RegisterRequestDto;
import com.mido.elearning.entity.TokenInfo;

public interface AuthService {

    public JWTResponseDto login(String username, String password);
    public JWTResponseDto register(RegisterRequestDto registerRequest);

    public TokenInfo createLoginToken(String userName, Long userId);

    public AccessTokenDto refreshAccessToken(String refreshToken);
    public void logoutUser(String refreshToken);
}
