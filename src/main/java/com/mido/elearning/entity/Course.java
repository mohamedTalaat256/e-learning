package com.mido.elearning.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "cources")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String description;
    private double hours;

    @Column(name = "is_course_free")
    private Boolean isCourseFree;
    private BigDecimal price;
    private int discount;
    private double rating;

    @Column(name = "discount_statrt_date")
    private Date discountStartDate;

    @Column(name = "discount_end_date")
    private Date discountEndDate;

    @ManyToOne()
    @JoinColumn(name = "auther_id", referencedColumnName = "id")
    private AppUser author;

    @ManyToMany( cascade = CascadeType.ALL)
    private Set<AppUser> enrolledStudents = new HashSet<>();

    @Column(name = "cover_image")
    private String coverImage;
}
