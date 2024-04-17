package com.mido.elearning.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.mido.elearning.enums.Country;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "organizations")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Organization {



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String industry;


    @OneToMany(mappedBy = "organization", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonManagedReference
    private Set<AppUser> employees = new HashSet<>();

    public Organization(Long id, String name, String industry) {
        this.id = id;
        this.name = name;
        this.industry = industry;
        this.setDirectors(employees);
    }
    public Organization() {
    }

    public void setDirectors(Set<AppUser> directors) {
        directors.forEach(this::addEmployee);
    }

    public void addEmployee(AppUser employee) {
        employees.add(employee);
        employee.setOrganization(this);
    }

    public void removeEmployee(AppUser employee) {
        employees.remove(employee);
        employee.setOrganization(null);
    }

    private Country country;
}
