package com.mido.elearning.Dto;

import com.mido.elearning.entity.AppUser;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EnrollRequest {

    Long courseId;
    Long studentId;
}
