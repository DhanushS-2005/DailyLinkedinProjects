import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";
import { Modal } from "react-bootstrap";

import {
    getAllMovies,
    searchMovie,
    filterMovie
} from "../api/movieService";

function Home() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("All Genres");

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        try {
            const response = await getAllMovies();
            setMovies(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = async (value) => {

        setSearch(value);

        if (value.trim() === "") {
            loadMovies();
            return;
        }

        try {
            const response = await searchMovie(value);
            setMovies(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleGenre = async (value) => {

        setGenre(value);

        if (value === "All Genres") {
            loadMovies();
            return;
        }

        try {
            const response = await filterMovie(value);
            setMovies(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleShow = () => setShowModal(true);

    const handleClose = () => setShowModal(false);

    return (
        <>
            <Navbar />

            <div className="container mt-4">

                <div className="row mb-4">

                    <div className="col-md-5">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search movie..."
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                        />

                    </div>

                    <div className="col-md-3">

                        <select
                            className="form-select"
                            value={genre}
                            onChange={(e) => handleGenre(e.target.value)}
                        >

                            <option>All Genres</option>
                            <option>Action</option>
                            <option>Comedy</option>
                            <option>Drama</option>
                            <option>Sci-Fi</option>
                            <option>Horror</option>

                        </select>

                    </div>

                    <div className="col-md-4 text-end">

                        <button
                            className="btn btn-success"
                            onClick={handleShow}
                        >
                            + Add Movie
                        </button>

                    </div>

                </div>

                <div className="row">

                    {movies.length > 0 ? (

                        movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))

                    ) : (

                        <h4 className="text-center">
                            No Movies Found
                        </h4>

                    )}

                </div>

            </div>

            <Modal
                show={showModal}
                onHide={handleClose}
                size="lg"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title>Add New Movie</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <MovieForm
                        onMovieAdded={() => {
                            loadMovies();
                            handleClose();
                        }}
                    />

                </Modal.Body>

            </Modal>

        </>
    );
}

export default Home;