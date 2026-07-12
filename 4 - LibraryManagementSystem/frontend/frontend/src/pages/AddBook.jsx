import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../services/bookService";
import { getAuthors } from "../services/authorService";

function AddBook() {

    const navigate = useNavigate();

    const [authors, setAuthors] = useState([]);

    const [book, setBook] = useState({
        title: "",
        price: "",
        authorId: ""
    });

    useEffect(() => {
        loadAuthors();
    }, []);

    const loadAuthors = async () => {
        try {

            const response = await getAuthors();

            setAuthors(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {

        setBook({
            ...book,
            [e.target.name]: e.target.value
        });

    };

    const saveBook = async (e) => {

        e.preventDefault();

        const bookData = {

            title: book.title,

            price: book.price,

            author: {
                id: book.authorId
            }

        };

        try {

            await addBook(bookData);

            alert("Book Added Successfully");

            navigate("/books");

        } catch (error) {

            console.log(error);

            alert("Failed to Add Book");

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-header bg-success text-white">

                            <h3>Add Book</h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={saveBook}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Book Title
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={book.title}
                                        onChange={handleChange}
                                        placeholder="Enter Book Title"
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Price
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="price"
                                        value={book.price}
                                        onChange={handleChange}
                                        placeholder="Enter Price"
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Select Author
                                    </label>

                                    <select
                                        className="form-select"
                                        name="authorId"
                                        value={book.authorId}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">
                                            Select Author
                                        </option>

                                        {

                                            authors.map((author) => (

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
                                    className="btn btn-success"
                                    type="submit"
                                >
                                    Save Book
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

export default AddBook;