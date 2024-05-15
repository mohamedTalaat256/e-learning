package com.mido.elearning.Dto;

import com.mido.elearning.entity.Organization;
import com.mido.elearning.enums.Country;
import lombok.*;

import java.util.Date;
import java.util.List;
import java.util.Set;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class PublicUserDto {

    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String profileImage;
    private Date dateOfBirth;
    private Country nationality;
    private Organization organization;
    private boolean isEnabled;
    private boolean isCredentialsNonExpired;
    private boolean isAccountNonLocked;
    private boolean isAccountNonExpired;
    
    private List<CourseDto> courses;
}
