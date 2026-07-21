package com.dhanush.recipemanager.repository;

import com.dhanush.recipemanager.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}

