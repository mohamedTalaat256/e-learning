package com.mido.elearning.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.cglib.core.GeneratorStrategy;

import java.util.List;

@Entity
@Table(name = "lectures")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Lecture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private int length;

    @Column(name = "cover_image")
    private String coverImage;

    private String video;

    @ManyToOne
    @JoinColumn(name = "course_id", referencedColumnName = "id")
    private Course course;

    @OneToMany(mappedBy = "lecture", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Review> reviews;

    @Column(name ="reviews_count")
    private int reviewsCount;

    private double rating;


    @Column(name = "lecture_order")
    private int lectureOrder;

    public Lecture(Long id) {
        this.id = id;
    }
}
