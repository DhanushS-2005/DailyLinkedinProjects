package com.dhanush.moviereview.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class MovieRequest {

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Genre is required")
    private String genre;

    @NotBlank(message = "Language is required")
    private String language;

    @NotNull(message = "Release Year is required")
    private Integer releaseYear;

    @NotBlank(message = "Director is required")
    private String director;

    private String description;

    private String posterUrl;
}