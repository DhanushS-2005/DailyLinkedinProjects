import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBook, updateBook } from "../services/bookService";
import { getAuthors } from "../services/authorService";

function EditBook() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [authors, setAuthors] = useState([]);

    const [book, setBook] = useState({
        title: "",
        price: "",
        authorId: ""
    });

    useEffect(() => {
        loadBook();
        loadAuthors();
    }, []);

    const loadBook = async () => {

        const response = await getBook(id);

        setBook({
            title: response.data.title,
            price: response.data.price,
            authorId: response.data.author.id
        });

    };

    const loadAuthors = async () => {

        const response = await getAuthors();

        setAuthors(response.data);

    };

    const handleChange = (e) => {

        setBook({
            ...book,
            [e.target.name]: e.target.value
        });

    };

    const update = async (e) => {

        e.preventDefault();

        const updatedBook = {

            title: book.title,
            price: book.price,
            author: {
                id: book.authorId
            }

        };

        await updateBook(id, updatedBook);

        alert("Book Updated Successfully");

        navigate("/books");

    };

    return (

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-header bg-warning">

                            <h3>Edit Book</h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={update}>

                                <div className="mb-3">

                                    <label>Book Title</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={book.title}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Price</label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="price"
                                        value={book.price}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Author</label>

                                    <select
                                        className="form-select"
                                        name="authorId"
                                        value={book.authorId}
                                        onChange={handleChange}
                                        required
                                    >

                                        {

                                            authors.map(author => (

                                                <option
                                                    key={author.id}
                                                    value={author.id}
                                                >
                                                    {author.name}
                                                </option>

                                            ))

                                        }

                                    </select>

                                </div>

                                <button
                                    className="btn btn-warning"
                                    type="submit"
                                >
                                    Update Book
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-secondary ms-2"
                                    onClick={() => navigate("/books")}
                                >
                                    Cancel
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default EditBook;