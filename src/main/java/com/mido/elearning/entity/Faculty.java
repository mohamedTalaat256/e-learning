package com.mido.elearning.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "faculties")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString

public class Faculty {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "academic_specialization_id", referencedColumnName = "id")
    private AcademicSpecialization academicSpecialization;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "university_id", referencedColumnName = "id")
    private University university;
}
