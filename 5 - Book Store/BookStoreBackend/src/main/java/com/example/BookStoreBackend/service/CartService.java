package com.example.BookStoreBackend.service;

import com.example.BookStoreBackend.entity.Book;
import com.example.BookStoreBackend.entity.Cart;
import com.example.BookStoreBackend.entity.CartItem;
import com.example.BookStoreBackend.repository.BookRepository;
import com.example.BookStoreBackend.repository.CartItemRepository;
import com.example.BookStoreBackend.repository.CartRepository;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final BookRepository bookRepository;
    private final CartItemRepository cartItemRepository;

    public CartService(CartRepository cartRepository,
                       BookRepository bookRepository,
                       CartItemRepository cartItemRepository) {
        this.cartRepository = cartRepository;
        this.bookRepository = bookRepository;
        this.cartItemRepository = cartItemRepository;
    }

    public Cart addToCart(Long cartId, Long bookId, Integer quantity) {

        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        if (book.getStock() < quantity) {
            throw new RuntimeException("Not enough stock available");
        }

// Reduce stock
        book.setStock(book.getStock() - quantity);
        bookRepository.save(book);

        CartItem item = new CartItem();
        item.setBook(book);
        item.setCart(cart);
        item.setQuantity(quantity);

        double subtotal = book.getPrice() * quantity;
        item.setSubtotal(subtotal);

        cart.getCartItems().add(item);
        calculateTotal(cart);

        cartItemRepository.save(item);

        return cartRepository.save(cart);
    }

    public Cart getCart(Long cartId) {
        return cartRepository.findById(cartId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));
    }

    public void removeItem(Long itemId) {

        CartItem item = cartItemRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Item not found"));

        Cart cart = item.getCart();

        cart.setTotalAmount(cart.getTotalAmount() - item.getSubtotal());

        cart.getCartItems().remove(item);

        cartRepository.save(cart);

        cartItemRepository.delete(item);
    }

    private void calculateTotal(Cart cart) {

        double total = 0;

        for (CartItem item : cart.getCartItems()) {
            total += item.getSubtotal();
        }

        cart.setTotalAmount(total);
    }
}