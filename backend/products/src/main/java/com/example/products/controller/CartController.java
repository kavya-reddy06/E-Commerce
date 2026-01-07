package com.example.products.controller;

import com.example.products.dto.ProductResponseDTO;
import com.example.products.model.CartItems;
import com.example.products.service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping("/add")
    public ResponseEntity<ProductResponseDTO> addToCart(
            @RequestParam Long productId,
            @RequestParam Long userId) {

        return ResponseEntity.ok(
                cartService.addToCart(productId, userId)
        );
    }

    @GetMapping
    public ResponseEntity<List<CartItems>> getCart(
            @RequestParam Long userId) {

        return ResponseEntity.ok(
                cartService.getCartItems(userId)
        );
    }
}
