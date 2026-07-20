import api from "./api";

export const addReview = (movieId, review) =>
    api.post(`/reviews/${movieId}`, review);

export const getReviews = (movieId) =>
    api.get(`/reviews/${movieId}`);

export const getAverageRating = (movieId) =>
    api.get(`/reviews/${movieId}/average`);

export const deleteReview = (reviewId) =>
    api.delete(`/reviews/${reviewId}`);