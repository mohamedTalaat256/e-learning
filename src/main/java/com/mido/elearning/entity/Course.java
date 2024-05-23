package com.mido.elearning.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@ToString
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
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    private AppUser author;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "students_enrolled_courses",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id"))
    @JsonIgnore
    private Set<AppUser> enrolledStudents = new HashSet<>();


    @Column(name = "cover_image")
    private String coverImage;


    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Lecture> lectures;

    public Course(long id) {
        this.id = id;
    }
}
