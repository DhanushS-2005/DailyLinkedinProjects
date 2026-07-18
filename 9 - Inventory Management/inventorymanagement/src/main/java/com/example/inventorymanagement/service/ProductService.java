package com.example.inventorymanagement.service;

import com.example.inventorymanagement.entity.Product;

import java.util.List;

public interface ProductService {

    Product addProduct(Product product);

    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product updateProduct(Long id, Product product);

    void deleteProduct(Long id);

    Product addStock(Long id, Integer qty);

    Product reduceStock(Long id, Integer qty);

    List<Product> getLowStockProducts();
}