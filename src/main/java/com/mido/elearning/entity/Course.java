package com.mido.elearning.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "cources")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@EntityListeners({AuditingEntityListener.class})
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
    @CreatedBy
    private AppUser author;

    @OneToMany( mappedBy = "course", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<StudentsEnrolledCourse> studentsEnrolledCourse = new HashSet<>();

    @Column(name ="enrolled_students_count")
    private int enrolledStudentsCount;

    @Column(name = "cover_image")
    private String coverImage;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Lecture> lectures;

    @Column(name ="lectures_count")
    private int lecturesCount;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Review> reviews;

    @Column(name ="reviews_count")
    private int reviewsCount;

    public Course(long id) {
        this.id = id;
    }
}
