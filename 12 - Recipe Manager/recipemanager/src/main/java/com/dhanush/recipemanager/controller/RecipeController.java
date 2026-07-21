package com.dhanush.recipemanager.controller;

import com.dhanush.recipemanager.dto.RecipeDTO;
import com.dhanush.recipemanager.service.RecipeService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "http://localhost:5173")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @PostMapping
    public RecipeDTO createRecipe(@Valid @RequestBody RecipeDTO recipeDTO) {
        return recipeService.saveRecipe(recipeDTO);
    }

    @GetMapping
    public List<RecipeDTO> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @GetMapping("/{id}")
    public RecipeDTO getRecipeById(@PathVariable Long id) {
        return recipeService.getRecipeById(id);
    }

    @PutMapping("/{id}")
    public RecipeDTO updateRecipe(@PathVariable Long id,
                                  @Valid @RequestBody RecipeDTO recipeDTO) {
        return recipeService.updateRecipe(id, recipeDTO);
    }

    @DeleteMapping("/{id}")
    public String deleteRecipe(@PathVariable Long id) {
        recipeService.deleteRecipe(id);
        return "Recipe deleted successfully.";
    }

    @GetMapping("/category/{categoryId}")
    public List<RecipeDTO> getRecipesByCategory(@PathVariable Long categoryId) {
        return recipeService.getRecipesByCategory(categoryId);
    }

    @GetMapping("/search")
    public List<RecipeDTO> searchRecipes(@RequestParam String name) {
        return recipeService.searchRecipes(name);
    }
}