package com.example.studentManagementSystem.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @NotEmpty
    @NotNull
    String firstName;

    @NotEmpty
    @NotNull
    String lastName;

    @Email
    String email;

    @Pattern(
            regexp = "^[6-9]\\d{9}$"
    )
    String phone;

    @NotNull
    @NotEmpty
    String department;

    @NotNull
    @NotEmpty
    String course;

    @NotNull
    Integer year;
}
