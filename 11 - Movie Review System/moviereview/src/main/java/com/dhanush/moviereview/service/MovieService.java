package com.dhanush.moviereview.service;

import com.dhanush.moviereview.dto.MovieRequest;
import com.dhanush.moviereview.entity.Movie;

import java.util.List;

public interface MovieService {

    Movie addMovie(MovieRequest request);

    List<Movie> getAllMovies();

    Movie getMovieById(Long id);

    Movie updateMovie(Long id, MovieRequest request);

    void deleteMovie(Long id);

    List<Movie> searchByTitle(String title);

    List<Movie> filterByGenre(String genre);

}