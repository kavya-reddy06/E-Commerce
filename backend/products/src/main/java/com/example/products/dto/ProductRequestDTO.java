package com.example.products.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class ProductRequestDTO {


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

}
