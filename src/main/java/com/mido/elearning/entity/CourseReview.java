package com.mido.elearning.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "course_reviews")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class CourseReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content_text")
    private String contentText;

    @Column(name = "rating_value")
    private Double ratingValue;

    @ManyToOne()
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    private AppUser author;

    @ManyToOne()
    @JoinColumn(name = "course_id", referencedColumnName = "id")
    private Course course;

}
