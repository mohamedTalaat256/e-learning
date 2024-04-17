package com.mido.elearning.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.mido.elearning.enums.Country;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppUser {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "firstName")
    private String lastName;

    private String email;

    @Column(name = "profile_image")
    private String profileImage;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    private Country nationality;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "organization_id")
    @JsonBackReference
    private Organization organization;
}
