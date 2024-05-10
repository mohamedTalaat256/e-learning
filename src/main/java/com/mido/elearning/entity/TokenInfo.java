package com.mido.elearning.entity;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "token_info")
@Builder
public class TokenInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(length = 800)
    private String accessToken;


    @Column(length = 800)
    private String refreshToken;

    private String userAgentText ;

    private String localIpAddress;

    private String remoteIpAddress;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", referencedColumnName = "ID")
    private AppUser user;



}