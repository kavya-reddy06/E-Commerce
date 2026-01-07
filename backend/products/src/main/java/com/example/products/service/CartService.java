package com.example.products.service;

import com.example.products.dto.ProductResponseDTO;
import com.example.products.model.Cart;
import com.example.products.model.CartItems;
import com.example.products.model.Product;
import com.example.products.model.User;
import com.example.products.repository.CartItemRepository;
import com.example.products.repository.CartRepository;
import com.example.products.repository.ProductRepository;
import com.example.products.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final ModelMapper mapper;

    public CartService(UserRepository userRepository,
                       ProductRepository productRepository,
                       CartRepository cartRepository,
                       CartItemRepository cartItemRepository,
                       ModelMapper mapper) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.mapper=mapper;
    }

    public ProductResponseDTO addToCart(Long productId, Long userId) {

        // 1. Get user
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 2. Get or create cart
        Cart cart = cartRepository.findByUser(user)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    return cartRepository.save(newCart);
                });

        // 3. Get product
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // 4. Check if product already in cart
        CartItems cartItems = cartItemRepository
                .findByCartAndProduct(cart, product)
                .map(item -> {
                    item.setQuantity(item.getQuantity() + 1);
                    return item;
                })
                .orElseGet(() -> {
                    CartItems newItem = new CartItems();
                    newItem.setCart(cart);
                    newItem.setProduct(product);
                    newItem.setQuantity(1);
                    return newItem;
                });

        // 5. Save cart item
        cartItemRepository.save(cartItems);

        ProductResponseDTO dto = mapper.map(product, ProductResponseDTO.class);
        dto.setStockQuantity(cartItems.getQuantity());
        return dto;
    }

    public List<CartItems> getCartItems(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        return cartItemRepository.findByCart(cart);
    }
}
