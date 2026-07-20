import MovieForm from "../components/MovieForm";

function AddMovie() {
    return (
        <div className="container mt-4">
            <MovieForm onMovieAdded={() => {}} />
        </div>
    );
}

export default AddMovie;