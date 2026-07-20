package com.dhanush.moviereview.repository;

import com.dhanush.moviereview.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    // Search movie by title
    List<Movie> findByTitleContainingIgnoreCase(String title);

    // Filter movies by genre
    List<Movie> findByGenreIgnoreCase(String genre);

    // Search by director
    List<Movie> findByDirectorContainingIgnoreCase(String director);

    // Filter by language
    List<Movie> findByLanguageIgnoreCase(String language);

    // Search by release year
    List<Movie> findByReleaseYear(Integer releaseYear);

}