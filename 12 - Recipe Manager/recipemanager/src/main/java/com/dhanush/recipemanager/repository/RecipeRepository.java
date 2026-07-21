package com.dhanush.recipemanager.repository;

import com.dhanush.recipemanager.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    List<Recipe> findByCategoryId(Long categoryId);

    List<Recipe> findByNameContainingIgnoreCase(String name);
}
