package com.mido.elearning.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "roles")

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String name;
}