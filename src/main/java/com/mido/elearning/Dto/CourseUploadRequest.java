package com.mido.elearning.Dto;

import com.mido.elearning.entity.AppUser;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseUploadRequest {


    private String title;
    private String description;
    private double hours;
    private Boolean isCourseFree;
    private BigDecimal price;
    private int discount;
    private Date discountStartDate;
    private Date discountEndDate;
   // private MultipartFile coverImageFile;
}
