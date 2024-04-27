package com.mido.elearning.service;

import com.mido.elearning.entity.TokenInfo;

import java.util.Optional;

public interface TokenInfoService {

    public TokenInfo findById(Long id);

    public Optional<TokenInfo> findByRefreshToken(String refreshToken);

    public TokenInfo save(TokenInfo entity);

    public void deleteById (Long id);
}
