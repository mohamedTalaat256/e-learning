package com.mido.elearning.mapping;

import com.mido.elearning.Dto.RoleDto;
import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.Role;

import java.util.HashSet;
import java.util.Set;

public class UserMapper {

    public static UserDto entityToDto(AppUser entity){

        Set<RoleDto> roles = new HashSet<>();
        entity.getRoles().forEach(i-> roles.add(RoleMapper.entityToDto(i)));

        return UserDto.builder().id(entity.getId())
                .email(entity.getEmail())
                .username(entity.getUsername())
                .password(entity.getPassword())
                .firstName(entity.getFirstName())
                .lastName(entity.getLastName())
                .profileImage(entity.getProfileImage())
                .dateOfBirth(entity.getDateOfBirth())
                .organization(entity.getOrganization())
                .nationality(entity.getNationality())
                .roles(roles)
                .isEnabled(entity.isEnabled())
                .build();
    }


    public static AppUser dtoToEntity(UserDto dto){

        Set<Role> roles = new HashSet<>();
        dto.getRoles().forEach(e-> roles.add(RoleMapper.dtoToEntity(e)));

        return AppUser.builder().id(dto.getId())
                .email(dto.getEmail())
                .username(dto.getUsername())
                .password(dto.getPassword())
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .profileImage(dto.getProfileImage())
                .dateOfBirth(dto.getDateOfBirth())
                .nationality(dto.getNationality())
                .organization(dto.getOrganization())
                .roles(roles)
                .isEnabled(true)
                .isAccountNonExpired(true)
                .isAccountNonLocked(true)
                .isCredentialsNonExpired(true)
                .build();

    }
}
