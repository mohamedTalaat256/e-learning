package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.AccessTokenDto;
import com.mido.elearning.Dto.JWTResponseDto;
import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.TokenInfo;
import com.mido.elearning.exception.DuplicateRecordException;
import com.mido.elearning.mapping.UserMapper;
import com.mido.elearning.repository.RoleRepository;
import com.mido.elearning.repository.UserRepository;
import com.mido.elearning.security.AppUserDetail;
import com.mido.elearning.security.JwtTokenUtils;
import com.mido.elearning.security.TokenInfoService;
import com.mido.elearning.service.AuthService;
import java.util.*;

import com.mido.elearning.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@Log4j2
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final AuthenticationManager authManager;
    private final UserRepository userRepository;

    @Override
    public JWTResponseDto login(String username, String password) {
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password));

        if (authentication.isAuthenticated()){
            log.debug("Valid userDetails credentials.");

            AppUserDetail userDetails = (AppUserDetail) authentication.getPrincipal();

            SecurityContextHolder.getContext().setAuthentication(authentication);
            log.debug("SecurityContextHolder updated. [login={}]", username);

            TokenInfo tokenInfo = createLoginToken(username, userDetails.getId());

            Map<String, String> userData = new HashMap<>();

            userData.put("id", userDetails.getId().toString());
            userData.put("email", userDetails.getEmail());
            userData.put("firstName", userDetails.getFirstName());
            userData.put("lastName", userDetails.getLastName());
            userData.put("username", userDetails.getUsername());
            userData.put("roles", userDetails.getAuthorities().toString());

            return JWTResponseDto.builder()
                    .accessToken(tokenInfo.getAccessToken())
                    .refreshToken(tokenInfo.getRefreshToken())
                    .message("login_success")
                    .userData( userData)
                    .build();
        }else {

            return JWTResponseDto.builder()
                    .accessToken("")
                    .refreshToken("")
                    .message("fail to login")
                    .build();
        }


    }


    @Override
    public TokenInfo createLoginToken(String userName, Long userId) {
        return null;
    }

    @Override
    public AccessTokenDto refreshAccessToken(String refreshToken) {
        return null;
    }

    @Override
    public void logoutUser(String refreshToken) {

    }



}
