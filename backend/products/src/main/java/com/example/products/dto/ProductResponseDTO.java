package com.example.products.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
public class ProductResponseDTO {

    private Long id;
    private String name;
    private String brand;
    private String description;
    private BigDecimal price;
    private String category;
    private int stockQuantity;
    private LocalDate releaseDate;
    private boolean productAvailable;
    private int rating;
    private String praise;
    private String image;

    public ProductResponseDTO(Long id, @NotBlank String name, int quantity) {
        this.id = id;
        this.name = name;
        this.stockQuantity = quantity;
    }
}
