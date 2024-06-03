package com.mido.elearning.Dto;

import lombok.*;

import java.math.BigDecimal;
import java.util.*;

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
    private int enrolledStudentsCount;
    private int lecturesCount;
    private int reviewsCount;

    private List<ReviewDto> reviews = new ArrayList<>();

}
