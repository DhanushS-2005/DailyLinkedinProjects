package com.example.inventorymanagement.controller;

import com.example.inventorymanagement.entity.Product;
import com.example.inventorymanagement.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
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

    @PostMapping
    public Product addProduct(@Valid @RequestBody Product product) {
        return service.addProduct(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return service.getProductById(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id,
                                 @Valid @RequestBody Product product) {
        return service.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        service.deleteProduct(id);
        return "Product deleted successfully";
    }

    @PutMapping("/{id}/add-stock")
    public Product addStock(@PathVariable Long id,
                            @RequestParam Integer qty) {
        return service.addStock(id, qty);
    }

    @PutMapping("/{id}/reduce-stock")
    public ResponseEntity<?> reduceStock(@PathVariable Long id,
                                         @RequestParam Integer qty) {

        Product product = service.getProductById(id);

        if (product.getStock() < qty) {
            return ResponseEntity.badRequest().body("Insufficient stock");
        }

        product.setStock(product.getStock() - qty);
        return ResponseEntity.ok(service.addProduct(product));
    }

    @GetMapping("/low-stock")
    public List<Product> getLowStockProducts() {
        return service.getLowStockProducts();
    }
}