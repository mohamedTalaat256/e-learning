package com.mido.elearning.Dto;

import com.mido.elearning.entity.AppUser;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseDto {

    private long id;
    private String title;
    private String description;
    private double hours;
    private double rating;
    private String coverImage;
    private Boolean isCourseFree;
    private BigDecimal price;
    private int discount;
    private Date discountStartDate;
    private Date discountEndDate;
    private PublicUserDto author;
    private Set<PublicUserDto> enrolledStudents = new HashSet<>();

}
