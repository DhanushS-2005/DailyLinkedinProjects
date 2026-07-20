package com.dhanush.moviereview.controller;

import com.dhanush.moviereview.dto.ReviewRequest;
import com.dhanush.moviereview.entity.Review;
import com.dhanush.moviereview.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping("/{movieId}")
    @ResponseStatus(HttpStatus.CREATED)
    public Review addReview(@PathVariable Long movieId,
                            @Valid @RequestBody ReviewRequest request) {

        return reviewService.addReview(movieId, request);
    }

    @GetMapping("/{movieId}")
    public List<Review> getReviews(@PathVariable Long movieId) {
        return reviewService.getReviewsByMovie(movieId);
    }

    @DeleteMapping("/{reviewId}")
    public String deleteReview(@PathVariable Long reviewId) {

        reviewService.deleteReview(reviewId);

        return "Review deleted successfully";
    }

    @GetMapping("/{movieId}/average")
    public Double averageRating(@PathVariable Long movieId) {

        return reviewService.getAverageRating(movieId);
    }

}