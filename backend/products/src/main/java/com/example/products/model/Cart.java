package com.example.products.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
public class Cart {

    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartId;

    @Setter
    @OneToOne
    @JoinColumn(name = "userId")
    private User user;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


}
