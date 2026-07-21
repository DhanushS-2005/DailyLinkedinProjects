package com.dhanush.recipemanager.service;

import com.dhanush.recipemanager.dto.RecipeDTO;
import com.dhanush.recipemanager.entity.Category;
import com.dhanush.recipemanager.entity.Recipe;
import com.dhanush.recipemanager.mapper.RecipeMapper;
import com.dhanush.recipemanager.repository.CategoryRepository;
import com.dhanush.recipemanager.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final CategoryRepository categoryRepository;

    public RecipeService(RecipeRepository recipeRepository,
                         CategoryRepository categoryRepository) {
        this.recipeRepository = recipeRepository;
        this.categoryRepository = categoryRepository;
    }

    public RecipeDTO saveRecipe(RecipeDTO recipeDTO) {

        Category category = categoryRepository.findById(recipeDTO.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category Not Found"));

        Recipe recipe = RecipeMapper.toEntity(recipeDTO, category);

        Recipe savedRecipe = recipeRepository.save(recipe);

        return RecipeMapper.toDTO(savedRecipe);
    }

    public List<RecipeDTO> getAllRecipes() {

        return recipeRepository.findAll()
                .stream()
                .map(RecipeMapper::toDTO)
                .toList();
    }

    public RecipeDTO getRecipeById(Long id) {

        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recipe Not Found"));

        return RecipeMapper.toDTO(recipe);
    }

    public RecipeDTO updateRecipe(Long id, RecipeDTO recipeDTO) {

        Recipe existingRecipe = recipeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recipe Not Found"));

        Category category = categoryRepository.findById(recipeDTO.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category Not Found"));

        existingRecipe.setName(recipeDTO.getName());
        existingRecipe.setIngredients(recipeDTO.getIngredients());
        existingRecipe.setInstructions(recipeDTO.getInstructions());
        existingRecipe.setPreparationTime(recipeDTO.getPreparationTime());
        existingRecipe.setDifficulty(recipeDTO.getDifficulty());
        existingRecipe.setCategory(category);

        Recipe updatedRecipe = recipeRepository.save(existingRecipe);

        return RecipeMapper.toDTO(updatedRecipe);
    }

    public void deleteRecipe(Long id) {

        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recipe Not Found"));

        recipeRepository.delete(recipe);
    }

    public List<RecipeDTO> getRecipesByCategory(Long categoryId) {

        return recipeRepository.findByCategoryId(categoryId)
                .stream()
                .map(RecipeMapper::toDTO)
                .toList();
    }

    public List<RecipeDTO> searchRecipes(String name) {

        return recipeRepository.findByNameContainingIgnoreCase(name)
                .stream()
                .map(RecipeMapper::toDTO)
                .toList();
    }
}