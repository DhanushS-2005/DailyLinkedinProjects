import api from "./api";

export const getAllMovies = () => api.get("/movies");

export const getMovieById = (id) => api.get(`/movies/${id}`);

export const addMovie = (movie) => api.post("/movies", movie);

export const updateMovie = (id, movie) =>
    api.put(`/movies/${id}`, movie);

export const deleteMovie = (id) =>
    api.delete(`/movies/${id}`);

export const searchMovie = (title) =>
    api.get(`/movies/search?title=${title}`);

export const filterMovie = (genre) =>
    api.get(`/movies/genre?genre=${genre}`);