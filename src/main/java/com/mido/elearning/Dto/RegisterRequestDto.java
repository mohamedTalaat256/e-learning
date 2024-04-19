package com.mido.elearning.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;


@Getter
@Setter
public class RegisterRequestDto {

    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private Set<String> role;
}