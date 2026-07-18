package com.example.inventorymanagement.service;

import com.example.inventorymanagement.entity.Product;
import com.example.inventorymanagement.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @Override
    public Product updateProduct(Long id, Product product) {

        Product existing = getProductById(id);

        existing.setName(product.getName());
        existing.setCategory(product.getCategory());
        existing.setPrice(product.getPrice());
        existing.setStock(product.getStock());
        existing.setMinStock(product.getMinStock());

        return repository.save(existing);
    }

    @Override
    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Product addStock(Long id, Integer qty) {

        Product product = getProductById(id);

        product.setStock(product.getStock() + qty);

        return repository.save(product);
    }

    @Override
    public Product reduceStock(Long id, Integer qty) {

        Product product = getProductById(id);

        if (product.getStock() < qty) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Insufficient stock"
            );
        }

        product.setStock(product.getStock() - qty);

        return repository.save(product);
    }

    @Override
    public List<Product> getLowStockProducts() {

        return repository.findAll()
                .stream()
                .filter(p -> p.getStock() <= p.getMinStock())
                .toList();
    }
}