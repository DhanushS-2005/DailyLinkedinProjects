package com.dhanush.moviereview.service;

import com.dhanush.moviereview.dto.ReviewRequest;
import com.dhanush.moviereview.entity.Review;

import java.util.List;

public interface ReviewService {

    Review addReview(Long movieId, ReviewRequest request);

    List<Review> getReviewsByMovie(Long movieId);

    void deleteReview(Long reviewId);

    Double getAverageRating(Long movieId);

}