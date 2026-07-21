package com.dhanush.recipemanager.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecipeDTO {

    private Long id;

    @NotBlank(message = "Recipe name is required")
    private String name;

    @NotBlank(message = "Ingredients are required")
    private String ingredients;

    @NotBlank(message = "Instructions are required")
    private String instructions;

    @NotNull(message = "Preparation time is required")
    private Integer preparationTime;

    @NotBlank(message = "Difficulty is required")
    private String difficulty;

    @NotNull(message = "Category is required")
    private Long categoryId;

    private String categoryName;
}