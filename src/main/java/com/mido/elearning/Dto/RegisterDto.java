package com.mido.elearning.Dto;

import com.mido.elearning.entity.Organization;
import com.mido.elearning.enums.Country;
import lombok.*;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class RegisterDto {

    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String role;
}
