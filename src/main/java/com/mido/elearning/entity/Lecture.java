package com.mido.elearning.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.cglib.core.GeneratorStrategy;

@Entity
@Table(name = "lecture")
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



}
