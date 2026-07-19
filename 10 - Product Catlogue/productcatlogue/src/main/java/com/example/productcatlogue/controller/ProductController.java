package com.example.productcatlogue.controller;

import com.example.productcatlogue.entity.Product;
import com.example.productcatlogue.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    // Add Product
    @PostMapping
    public Product addProduct(@Valid @RequestBody Product product) {
        return service.addProduct(product);
    }

    // Get All Products
    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    // Get Product By ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return service.getProductById(id);
    }

    // Update Product
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id,
                                 @Valid @RequestBody Product product) {
        return service.updateProduct(id, product);
    }

    // Delete Product
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        service.deleteProduct(id);
        return "Product deleted successfully.";
    }

    // Filter by Category
    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable String category) {
        return service.getByCategory(category);
    }

    // Filter by Brand
    @GetMapping("/brand/{brand}")
    public List<Product> getByBrand(@PathVariable String brand) {
        return service.getByBrand(brand);
    }

    // Filter by Availability
    @GetMapping("/availability/{available}")
    public List<Product> getByAvailability(@PathVariable boolean available) {
        return service.getByAvailability(available);
    }

    // Filter by Price Range
    @GetMapping("/price")
    public List<Product> getByPriceRange(@RequestParam double min,
                                         @RequestParam double max) {
        return service.getByPriceRange(min, max);
    }

    // Category + Brand
    @GetMapping("/category-brand")
    public List<Product> getCategoryAndBrand(
            @RequestParam String category,
            @RequestParam String brand) {

        return service.getCategoryAndBrand(category, brand);
    }

    // Category + Availability
    @GetMapping("/category-availability")
    public List<Product> getCategoryAndAvailability(
            @RequestParam String category,
            @RequestParam boolean available) {

        return service.getCategoryAndAvailability(category, available);
    }

    // Brand + Availability
    @GetMapping("/brand-availability")
    public List<Product> getBrandAndAvailability(
            @RequestParam String brand,
            @RequestParam boolean available) {

        return service.getBrandAndAvailability(brand, available);
    }

    // Category + Price Range
    @GetMapping("/category-price")
    public List<Product> getCategoryAndPrice(
            @RequestParam String category,
            @RequestParam double min,
            @RequestParam double max) {

        return service.getCategoryAndPrice(category, min, max);
    }

}