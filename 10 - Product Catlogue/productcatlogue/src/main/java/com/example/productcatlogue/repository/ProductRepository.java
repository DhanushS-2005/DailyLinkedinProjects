package com.example.productcatlogue.repository;

import com.example.productcatlogue.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // Filter by Category
    List<Product> findByCategory(String category);

    // Filter by Brand
    List<Product> findByBrand(String brand);

    // Filter by Availability
    List<Product> findByAvailable(boolean available);

    // Filter by Price Range
    List<Product> findByPriceBetween(double minPrice, double maxPrice);

    // Category + Brand
    List<Product> findByCategoryAndBrand(String category, String brand);

    // Category + Availability
    List<Product> findByCategoryAndAvailable(String category, boolean available);

    // Brand + Availability
    List<Product> findByBrandAndAvailable(String brand, boolean available);

    // Category + Price Range
    List<Product> findByCategoryAndPriceBetween(
            String category,
            double minPrice,
            double maxPrice
    );
}