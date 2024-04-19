package com.mido.elearning.Dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Setter
@Getter
@Builder
public class JWTResponseDto {

    private String accessToken;

    private String refreshToken;
    private String message;

    private Map<String, String> userData;

}