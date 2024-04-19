package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.AccessTokenDto;
import com.mido.elearning.Dto.JWTResponseDto;
import com.mido.elearning.Dto.RegisterRequestDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.Role;
import com.mido.elearning.entity.TokenInfo;
import com.mido.elearning.security.AppUserDetail;
import com.mido.elearning.service.AuthService;

import java.util.HashMap;
import java.util.Map;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;


@Service
@Log4j2
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final AuthenticationManager authManager;

    private final HttpServletRequest httpRequest;

    private final TokenInfoService tokenInfoService;

    private final JwtTokenUtils jwtTokenUtils;
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
    public JWTResponseDto register(RegisterRequestDto registerRequest) {

            Optional<AppUser> user = findUserByEmail(requestDto.getEmail());
            if(user.isPresent()){
                throw new DuplicateRecordException("This Email is already exist");
            }else{
                requestDto.setPassword(passwordEncoder.encode(requestDto.getPassword()));

                Set<Role> roles = new HashSet<>();

                for (String roleName: requestDto.getRole()){

                    Role role = roleRepo.findRoleByName(roleName);
                    roles.add(role);

                }
                return userRepo.save(dtoToEntity.getUser(requestDto,roles));
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
