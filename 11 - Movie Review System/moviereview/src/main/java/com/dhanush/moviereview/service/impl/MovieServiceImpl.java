package com.dhanush.moviereview.service.impl;

import com.dhanush.moviereview.dto.MovieRequest;
import com.dhanush.moviereview.entity.Movie;
import com.dhanush.moviereview.repository.MovieRepository;
import com.dhanush.moviereview.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;

    @Override
    public Movie addMovie(MovieRequest request) {

        Movie movie = Movie.builder()
                .title(request.getTitle())
                .genre(request.getGenre())
                .language(request.getLanguage())
                .releaseYear(request.getReleaseYear())
                .director(request.getDirector())
                .description(request.getDescription())
                .posterUrl(request.getPosterUrl())
                .build();

        return movieRepository.save(movie);
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public Movie getMovieById(Long id) {
        return movieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Movie not found"));
    }

    @Override
    public Movie updateMovie(Long id, MovieRequest request) {

        Movie movie = getMovieById(id);

        movie.setTitle(request.getTitle());
        movie.setGenre(request.getGenre());
        movie.setLanguage(request.getLanguage());
        movie.setReleaseYear(request.getReleaseYear());
        movie.setDirector(request.getDirector());
        movie.setDescription(request.getDescription());
        movie.setPosterUrl(request.getPosterUrl());

        return movieRepository.save(movie);
    }

    @Override
    public void deleteMovie(Long id) {

        Movie movie = getMovieById(id);

        movieRepository.delete(movie);
    }

    @Override
    public List<Movie> searchByTitle(String title) {
        return movieRepository.findByTitleContainingIgnoreCase(title);
    }

    @Override
    public List<Movie> filterByGenre(String genre) {
        return movieRepository.findByGenreIgnoreCase(genre);
    }
}