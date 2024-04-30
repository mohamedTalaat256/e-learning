package com.mido.elearning.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "acadimic_sepicailizations")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AcademicSpecialization {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
}
