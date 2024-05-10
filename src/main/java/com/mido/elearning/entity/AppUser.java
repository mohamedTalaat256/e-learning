package com.mido.elearning.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.mido.elearning.enums.Country;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AppUser {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String email;
    private String password;

    @Column(name = "profile_image")
    private String profileImage;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    private Country nationality;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "organization_id")
    @JsonBackReference
    private Organization organization;


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "users_roles" ,
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    @OrderColumn(name = "id")
    private Set<Role> roles = new HashSet<>();

    private boolean isEnabled;

    private boolean isCredentialsNonExpired;

    private boolean isAccountNonLocked;

    private boolean isAccountNonExpired;


    public AppUser(Long id) {
        this.id = id;
    }
}
