package com.example.products.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Entity
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotBlank
	private String name;
	private String brand;
	private String description;
	@Positive
	private BigDecimal price;
	private String category;
	@Min(0)
	private int stockQuantity;
	private LocalDate releaseDate;
	private boolean productAvailable;
	@Min(1)
	@Max(5)
	private int rating;
	private String praise;
	private String image;

}
