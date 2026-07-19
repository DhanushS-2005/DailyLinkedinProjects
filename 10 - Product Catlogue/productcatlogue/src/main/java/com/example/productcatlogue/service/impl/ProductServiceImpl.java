package com.example.productcatlogue.service.impl;

import com.example.productcatlogue.entity.Product;
import com.example.productcatlogue.repository.ProductRepository;
import com.example.productcatlogue.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository repository;

    public ProductServiceImpl(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public Product addProduct(Product product) {
        return repository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with ID: " + id));
    }

    @Override
    public Product updateProduct(Long id, Product product) {

        Product existing = getProductById(id);

        existing.setName(product.getName());
        existing.setBrand(product.getBrand());
        existing.setCategory(product.getCategory());
        existing.setPrice(product.getPrice());
        existing.setStock(product.getStock());
        existing.setAvailable(product.isAvailable());

        return repository.save(existing);
    }

    @Override
    public void deleteProduct(Long id) {
        Product product = getProductById(id);
        repository.delete(product);
    }

    @Override
    public List<Product> getByCategory(String category) {
        return repository.findByCategory(category);
    }

    @Override
    public List<Product> getByBrand(String brand) {
        return repository.findByBrand(brand);
    }

    @Override
    public List<Product> getByAvailability(boolean available) {
        return repository.findByAvailable(available);
    }

    @Override
    public List<Product> getByPriceRange(double min, double max) {
        return repository.findByPriceBetween(min, max);
    }

    @Override
    public List<Product> getCategoryAndBrand(String category, String brand) {
        return repository.findByCategoryAndBrand(category, brand);
    }

    @Override
    public List<Product> getCategoryAndAvailability(String category, boolean available) {
        return repository.findByCategoryAndAvailable(category, available);
    }

    @Override
    public List<Product> getBrandAndAvailability(String brand, boolean available) {
        return repository.findByBrandAndAvailable(brand, available);
    }

    @Override
    public List<Product> getCategoryAndPrice(String category, double min, double max) {
        return repository.findByCategoryAndPriceBetween(category, min, max);
    }
}