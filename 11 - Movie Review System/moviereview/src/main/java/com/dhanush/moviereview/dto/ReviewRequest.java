package com.dhanush.moviereview.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ReviewRequest {

    @NotBlank(message = "Reviewer Name is required")
    private String reviewerName;

    @Min(1)
    @Max(5)
    private Integer rating;

    private String comment;
}