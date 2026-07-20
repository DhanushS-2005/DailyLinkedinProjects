import { useState } from "react";
import { addMovie } from "../api/movieService";

function MovieForm({ onMovieAdded }) {

    const [movie, setMovie] = useState({
        title: "",
        genre: "",
        language: "",
        releaseYear: "",
        director: "",
        description: "",
        posterUrl: ""
    });

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await addMovie(movie);

            alert("Movie Added Successfully!");

            setMovie({
                title: "",
                genre: "",
                language: "",
                releaseYear: "",
                director: "",
                description: "",
                posterUrl: ""
            });

            if (onMovieAdded) {
                onMovieAdded();
            }

        } catch (error) {
            console.error(error);
            alert("Failed to add movie");
        }
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Movie Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="Enter movie title"
                        value={movie.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="genre"
                        placeholder="Action, Drama, Sci-Fi..."
                        value={movie.genre}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Language</label>
                    <input
                        type="text"
                        className="form-control"
                        name="language"
                        placeholder="English"
                        value={movie.language}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Release Year</label>
                    <input
                        type="number"
                        className="form-control"
                        name="releaseYear"
                        placeholder="2025"
                        value={movie.releaseYear}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Director</label>
                    <input
                        type="text"
                        className="form-control"
                        name="director"
                        placeholder="Director Name"
                        value={movie.director}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        rows="3"
                        placeholder="Movie description..."
                        value={movie.description}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Poster Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        name="posterUrl"
                        placeholder="https://example.com/poster.jpg"
                        value={movie.posterUrl}
                        onChange={handleChange}
                    />
                </div>

                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Save Movie
                    </button>
                </div>

            </form>

        </div>
    );
}

export default MovieForm;