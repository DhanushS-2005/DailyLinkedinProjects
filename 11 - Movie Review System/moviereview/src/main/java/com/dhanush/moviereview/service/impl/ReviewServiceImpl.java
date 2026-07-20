package com.dhanush.moviereview.service.impl;

import com.dhanush.moviereview.dto.ReviewRequest;
import com.dhanush.moviereview.entity.Movie;
import com.dhanush.moviereview.entity.Review;
import com.dhanush.moviereview.repository.MovieRepository;
import com.dhanush.moviereview.repository.ReviewRepository;
import com.dhanush.moviereview.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final MovieRepository movieRepository;

    @Override
    public Review addReview(Long movieId, ReviewRequest request) {

        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new RuntimeException("Movie not found"));

        Review review = Review.builder()
                .reviewerName(request.getReviewerName())
                .rating(request.getRating())
                .comment(request.getComment())
                .movie(movie)
                .build();

        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getReviewsByMovie(Long movieId) {

        return reviewRepository.findByMovieId(movieId);
    }

    @Override
    public void deleteReview(Long reviewId) {

        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        reviewRepository.delete(review);
    }

    @Override
    public Double getAverageRating(Long movieId) {

        List<Review> reviews = reviewRepository.findByMovieId(movieId);

        if (reviews.isEmpty()) {
            return 0.0;
        }

        double total = 0;

        for (Review review : reviews) {
            total += review.getRating();
        }

        return total / reviews.size();
    }
}