package com.dhanush.recipemanager.mapper;

import com.dhanush.recipemanager.dto.CategoryDTO;
import com.dhanush.recipemanager.entity.Category;

public class CategoryMapper {

    public static Category toEntity(CategoryDTO dto) {

        Category category = new Category();

        category.setId(dto.getId());
        category.setName(dto.getName());
        category.setDescription(dto.getDescription());

        return category;
    }

    public static CategoryDTO toDTO(Category category) {

        CategoryDTO dto = new CategoryDTO();

        dto.setId(category.getId());
        dto.setName(category.getName());
        dto.setDescription(category.getDescription());

        return dto;
    }
}