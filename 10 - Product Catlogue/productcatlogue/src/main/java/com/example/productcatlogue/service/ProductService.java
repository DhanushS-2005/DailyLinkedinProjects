package com.example.productcatlogue.service;

import com.example.productcatlogue.entity.Product;

import java.util.List;

public interface ProductService {

    Product addProduct(Product product);

    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product updateProduct(Long id, Product product);

    void deleteProduct(Long id);

    List<Product> getByCategory(String category);

    List<Product> getByBrand(String brand);

    List<Product> getByAvailability(boolean available);

    List<Product> getByPriceRange(double min, double max);

    List<Product> getCategoryAndBrand(String category, String brand);

    List<Product> getCategoryAndAvailability(String category, boolean available);

    List<Product> getBrandAndAvailability(String brand, boolean available);

    List<Product> getCategoryAndPrice(String category, double min, double max);
}