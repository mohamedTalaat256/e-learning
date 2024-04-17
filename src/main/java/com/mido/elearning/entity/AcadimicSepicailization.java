package com.mido.elearning.entity;


import com.mido.elearning.enums.Country;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "acadimic_sepicailizations")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AcadimicSepicailization {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
}
