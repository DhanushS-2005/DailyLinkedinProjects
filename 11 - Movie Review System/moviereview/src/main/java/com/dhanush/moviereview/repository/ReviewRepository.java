package com.dhanush.moviereview.repository;

import com.dhanush.moviereview.entity.Movie;
import com.dhanush.moviereview.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    // Get all reviews of a movie
    List<Review> findByMovie(Movie movie);

    // Get all reviews using movie id
    List<Review> findByMovieId(Long movieId);

}