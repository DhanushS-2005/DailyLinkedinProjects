package com.dhanush.recipemanager.mapper;

import com.dhanush.recipemanager.dto.RecipeDTO;
import com.dhanush.recipemanager.entity.Category;
import com.dhanush.recipemanager.entity.Recipe;

public class RecipeMapper {

    public static Recipe toEntity(RecipeDTO dto, Category category) {

        Recipe recipe = new Recipe();

        recipe.setId(dto.getId());
        recipe.setName(dto.getName());
        recipe.setIngredients(dto.getIngredients());
        recipe.setInstructions(dto.getInstructions());
        recipe.setPreparationTime(dto.getPreparationTime());
        recipe.setDifficulty(dto.getDifficulty());
        recipe.setCategory(category);

        return recipe;
    }

    public static RecipeDTO toDTO(Recipe recipe) {

        RecipeDTO dto = new RecipeDTO();

        dto.setId(recipe.getId());
        dto.setName(recipe.getName());
        dto.setIngredients(recipe.getIngredients());
        dto.setInstructions(recipe.getInstructions());
        dto.setPreparationTime(recipe.getPreparationTime());
        dto.setDifficulty(recipe.getDifficulty());

        dto.setCategoryId(recipe.getCategory().getId());
        dto.setCategoryName(recipe.getCategory().getName());

        return dto;
    }
}