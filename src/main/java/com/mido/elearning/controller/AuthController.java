package com.mido.elearning.controller;


import com.mido.elearning.Dto.*;
import com.mido.elearning.service.AuthService;
import com.mido.elearning.utils.AppResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<Object> login (@RequestBody LoginRequestDto loginRequest){
        JWTResponseDto jwtResponseDto = authService.login(loginRequest.getUsername(), loginRequest.getPassword());

        return AppResponse.generateResponse("login success", HttpStatus.OK, jwtResponseDto, true);
    }

    @PostMapping("/register")
    public ResponseEntity<Object> register (@RequestBody @Valid UserDto registerRequest){

        return AppResponse.generateResponse("register success", HttpStatus.OK, authService.register(registerRequest), true);
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<AccessTokenDto> refreshAccessToken(@RequestParam String refreshToken) {
        AccessTokenDto dto = authService.refreshAccessToken(refreshToken);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/logout")
    public ResponseEntity<Object> logout(@RequestParam String refreshToken) {
        authService.logoutUser(refreshToken);

        return AppResponse.generateResponse("logout success", HttpStatus.OK, null, true);

    }
}
