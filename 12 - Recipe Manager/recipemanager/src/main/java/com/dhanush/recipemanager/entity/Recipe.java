package com.dhanush.recipemanager.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "recipe")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(length = 3000)
    private String ingredients;

    @Column(length = 5000)
    private String instructions;

    private Integer preparationTime;

    private String difficulty;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
}
