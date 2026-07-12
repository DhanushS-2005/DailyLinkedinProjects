import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook, searchBook } from "../services/bookService";

function Books() {

    const [keyword, setKeyword] = useState("");

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {
            const response = await getBooks();
            setBooks(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = async () => {

        if (keyword.trim() === "") {

            loadBooks();
            return;

        }

        const response = await searchBook(keyword);

        setBooks(response.data);

    };

    const removeBook = async (id) => {

        if (window.confirm("Are you sure you want to delete this book?")) {

            try {
                await deleteBook(id);
                loadBooks();
            } catch (error) {
                console.log(error);
            }

        }

    };

    return (

        <div className="container">

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h2>Books</h2>

                <Link
                    to="/add-book"
                    className="btn btn-primary"
                >
                    Add Book
                </Link>

            </div>

            <div className="row mb-3">

                <div className="col-md-5">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Book..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />

                </div>

                <div className="col-md-2">

                    <button
                        className="btn btn-success w-100"
                        onClick={handleSearch}
                    >
                        Search
                    </button>

                </div>

                <div className="col-md-2">

                    <button
                        className="btn btn-secondary w-100"
                        onClick={() => {
                            setKeyword("");
                            loadBooks();
                        }}
                    >
                        Reset
                    </button>

                </div>

            </div>

            <table className="table table-bordered table-hover shadow">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>

                        <th>Title</th>

                        <th>Price</th>

                        <th>Author</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        books.length > 0 ?

                            books.map((book) => (

                                <tr key={book.id}>

                                    <td>{book.id}</td>

                                    <td>{book.title}</td>

                                    <td>₹ {book.price}</td>

                                    <td>{book.author?.name}</td>

                                    <td>

                                        <Link
                                            to={`/edit-book/${book.id}`}
                                            className="btn btn-warning btn-sm me-2"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removeBook(book.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                            :

                            <tr>

                                <td colSpan="5" className="text-center">
                                    No Books Found
                                </td>

                            </tr>

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Books;