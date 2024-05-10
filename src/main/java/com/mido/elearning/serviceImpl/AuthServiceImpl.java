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

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.*;

import com.mido.elearning.service.UserService;
import com.mido.elearning.utils.AppResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
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
    private final UserServiceImpl userServiceImpl;
    private final PasswordEncoder passwordEncoder;
    private final HttpServletRequest httpRequest;
    private final TokenInfoService tokenInfoService;
    private final JwtTokenUtils jwtTokenUtils;

    @Override
    public AppResponse login(String username, String password) {
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password));

        if (authentication.isAuthenticated()){

            AppUserDetail userDetails = (AppUserDetail) authentication.getPrincipal();
            SecurityContextHolder.getContext().setAuthentication(authentication);
            TokenInfo tokenInfo = createLoginToken(username, userDetails.getId());
            Map<String, String> userData = new HashMap<>();
            log.info( tokenInfo );
            userData.put("id", userDetails.getId().toString());
            userData.put("email", userDetails.getEmail());
            userData.put("firstName", userDetails.getFirstName());
            userData.put("lastName", userDetails.getLastName());
            userData.put("username", userDetails.getUsername());
            userData.put("roles", userDetails.getAuthorities().toString());
            userData.put("token", tokenInfo.getAccessToken());
            userData.put("refreshToken", tokenInfo.getRefreshToken());

            return AppResponse.builder()
                    .ok(true)
                    .message("user_logged_in_success")
                    .status(HttpStatus.OK)
                    .data(userData)
                    .build();
        }
        return null;
    }

    @Override
    public UserDto register(UserDto registerDto) {

        Optional<AppUser> appUser =	userRepository.findByUsername(registerDto.getUsername());
        if (appUser.isPresent()) {
            throw new DuplicateRecordException("This User is already registered  : " + registerDto.getUsername());
        }
        registerDto.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        return UserMapper.entityToDto(userRepository.save(UserMapper.DtoToEntity(registerDto)));
    }

    @Override
    public TokenInfo createLoginToken(String userName, Long userId) {
        String userAgent = httpRequest.getHeader(HttpHeaders.USER_AGENT);
        InetAddress ip = null;
        try {
            ip = InetAddress.getLocalHost();
        } catch (UnknownHostException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        String accessTokenId = UUID.randomUUID().toString();
        String accessToken = JwtTokenUtils.generateToken(userName, accessTokenId, false);

        String refreshTokenId = UUID.randomUUID().toString();
        String refreshToken = JwtTokenUtils.generateToken(userName, refreshTokenId, true);

        TokenInfo tokenInfo = TokenInfo.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .user(new AppUser(userId))
                .userAgentText(userAgent)
                .localIpAddress(ip.getHostAddress())
                .remoteIpAddress(httpRequest.getRemoteAddr())
                .build();

        return tokenInfoService.save(tokenInfo);
    }

    @Override
    public AccessTokenDto refreshAccessToken(String refreshToken) {
        if (jwtTokenUtils.isTokenExpired(refreshToken)) {
            return null;
        }
        String userName = jwtTokenUtils.getUserNameFromToken(refreshToken);
        Optional<TokenInfo> refresh = tokenInfoService.findByRefreshToken(refreshToken);
        if (!refresh.isPresent()) {
            return null;
        }

        return new AccessTokenDto(JwtTokenUtils.generateToken(userName, UUID.randomUUID().toString(), false));
    }

    @Override
    public void logoutUser(String refreshToken) {
        log.info("begin logoutUser()");

        Optional<TokenInfo> tokenInfo = tokenInfoService.findByRefreshToken(refreshToken);
        if (tokenInfo.isPresent()) {

            log.info("User loged Out");

            tokenInfoService.deleteById(tokenInfo.get().getId());
        }
    }



}
