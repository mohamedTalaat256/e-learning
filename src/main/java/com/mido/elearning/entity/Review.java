package com.mido.elearning.entity;


import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "reviews")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@EntityListeners({AuditingEntityListener.class})
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content_text")
    private String contentText;

    @Column(name = "rating_value")
    private Double ratingValue;

    @ManyToOne()
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    @CreatedBy
    private AppUser author;

    @ManyToOne()
    @JoinColumn(name = "course_id", referencedColumnName = "id")
    private Course course;

    @ManyToOne()
    @JoinColumn(name = "lecture_id", referencedColumnName = "id")
    private Lecture lecture;


    @Column(name = "created_at")
    @CreatedDate
    private LocalDateTime createdAt;

}
