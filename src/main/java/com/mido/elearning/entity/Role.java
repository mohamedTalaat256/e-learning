package com.mido.elearning.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "roles")

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String name;
}