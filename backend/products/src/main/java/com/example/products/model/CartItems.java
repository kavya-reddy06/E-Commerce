package com.example.products.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
public class CartItems {

    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartItemId;
    @Setter
    @Getter
    @ManyToOne
    @JoinColumn(name = "cartId")
    private Cart cart;
    @Setter
    @Getter
    @ManyToOne
    @JoinColumn(name = "id")
    private Product product;

    @Setter
    @Getter
    private int quantity;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


}
