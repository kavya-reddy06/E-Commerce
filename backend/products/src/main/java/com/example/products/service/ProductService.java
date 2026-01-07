package com.example.products.service;

import com.example.products.dto.ProductRequestDTO;
import com.example.products.dto.ProductResponseDTO;
import com.example.products.model.Product;
import com.example.products.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository repo;
    private final ModelMapper mapper;

    public ProductService(ProductRepository repo, ModelMapper mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }


    public Page<ProductResponseDTO> getAllProducts(int page, int size) {
        return repo.findAll(PageRequest.of(page, size)).map(product -> mapper.map(product, ProductResponseDTO.class));
    }

    public ProductResponseDTO addProduct(ProductRequestDTO product) {
        Product p1 = mapper.map(product, Product.class);
        repo.save(p1);
        ProductResponseDTO prd = mapper.map(p1, ProductResponseDTO.class);
        return prd;
    }

    public ProductResponseDTO getProduct(Long id) {
        Optional<Product> p = repo.findById(id);
        ProductResponseDTO p1 = mapper.map(p, ProductResponseDTO.class);
        return p1;
    }

    public void deleteProduct(Long id) {
        repo.deleteById(id);
    }

    public ProductResponseDTO updateProduct(Long id, ProductRequestDTO p1) {
        Product p = repo.findById(id).get();
        p.setName(p1.getName());
        p.setCategory(p1.getCategory());
        p.setBrand(p1.getBrand());
        p.setImage(p1.getImage());
        p.setPrice(p1.getPrice());
        p.setDescription(p1.getDescription());
        p.setProductAvailable(p1.isProductAvailable());
        p.setRating(p1.getRating());
        p.setReleaseDate(p1.getReleaseDate());
        p.setStockQuantity(p1.getStockQuantity());

        repo.save(p);
        return mapper.map(p, ProductResponseDTO.class);

    }

    public List<ProductResponseDTO> searchProducts(String keyword) {
        return repo.findByNameContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(keyword, keyword, keyword).stream().map(p -> mapper.map(p, ProductResponseDTO.class)).toList();
    }

}
