package com.example.BookStoreBackend.controller;

import com.example.BookStoreBackend.entity.Cart;
import com.example.BookStoreBackend.service.CartService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    private final CartService service;

    public CartController(CartService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public Cart addToCart(@RequestParam Long cartId,
                          @RequestParam Long bookId,
                          @RequestParam Integer quantity) {

        return service.addToCart(cartId, bookId, quantity);
    }

    @GetMapping("/{cartId}")
    public Cart getCart(@PathVariable Long cartId) {
        return service.getCart(cartId);
    }

    @DeleteMapping("/remove/{itemId}")
    public String removeItem(@PathVariable Long itemId) {
        service.removeItem(itemId);
        return "Item removed successfully";
    }
}