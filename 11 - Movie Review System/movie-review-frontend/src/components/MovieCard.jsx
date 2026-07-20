import { Link } from "react-router-dom";

function MovieCard({ movie }) {

    return (
        <div className="col-md-4 mb-4">

            <div className="card shadow h-100">

                <img
                    src={movie.posterUrl}
                    className="card-img-top"
                    alt={movie.title}
                    style={{ height: "350px", objectFit: "cover" }}
                    onError={(e) => {
                        e.target.src = "https://placehold.co/400x600?text=No+Image";
                    }}
                />

                <div className="card-body">

                    <h4>{movie.title}</h4>

                    <p><strong>Genre:</strong> {movie.genre}</p>

                    <p><strong>Director:</strong> {movie.director}</p>

                    <p><strong>Year:</strong> {movie.releaseYear}</p>

                </div>

                <div className="card-footer bg-white">

                    <Link
                        to={`/movie/${movie.id}`}
                        className="btn btn-primary w-100"
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default MovieCard;