import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieById } from "../api/movieService";
import {
    getReviews,
    getAverageRating
} from "../api/reviewService";

import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";
import Navbar from "../components/Navbar";

function MovieDetails() {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [average, setAverage] = useState(0);

    useEffect(() => {
        loadMovie();
    }, []);

    const loadMovie = async () => {

        try {

            const movieRes = await getMovieById(id);
            const reviewRes = await getReviews(id);
            const avgRes = await getAverageRating(id);

            setMovie(movieRes.data);
            setReviews(reviewRes.data);
            setAverage(avgRes.data);

        } catch (error) {
            console.log(error);
        }
    };

    if (!movie) {
        return <h2 className="text-center mt-5">Loading...</h2>;
    }

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <div className="row">

                    <div className="col-md-4">

                        <img
                            src={movie.posterUrl}
                            className="img-fluid rounded shadow"
                            alt={movie.title}
                            onError={(e) => {
                                e.target.src = "https://placehold.co/400x600?text=No+Image";
                            }}
                        />

                    </div>

                    <div className="col-md-8">

                        <h2>{movie.title}</h2>

                        <p><strong>Genre:</strong> {movie.genre}</p>

                        <p><strong>Language:</strong> {movie.language}</p>

                        <p><strong>Director:</strong> {movie.director}</p>

                        <p><strong>Release Year:</strong> {movie.releaseYear}</p>

                        <p>{movie.description}</p>

                        <h3 className="text-warning">
                            ⭐ {average.toFixed(1)} / 5
                        </h3>

                    </div>

                </div>

                <ReviewForm
                    movieId={id}
                    onReviewAdded={loadMovie}
                />

                <ReviewList
                    reviews={reviews}
                    onReviewDeleted={loadMovie}
                />

            </div>

        </>
    );
}

export default MovieDetails;