package com.mido.elearning.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "lecture_reviews")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class LectureReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content_text")
    private String contentText;

    @ManyToOne()
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    private AppUser author;

    @ManyToOne()
    @JoinColumn(name = "lecture_id", referencedColumnName = "id")
    private Lecture lecture;

}
