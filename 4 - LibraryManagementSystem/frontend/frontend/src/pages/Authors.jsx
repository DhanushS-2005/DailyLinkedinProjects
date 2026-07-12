import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuthors, deleteAuthor } from "../services/authorService";

function Authors() {

    const [authors, setAuthors] = useState([]);

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

    const removeAuthor = async (id) => {

        if (window.confirm("Are you sure you want to delete this author?")) {

            try {
                await deleteAuthor(id);
                loadAuthors();
            } catch (error) {
                console.log(error);
            }

        }

    };

    return (

        <div>

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h2>Authors</h2>

                <Link
                    to="/add-author"
                    className="btn btn-primary"
                >
                    Add Author
                </Link>

            </div>

            <table className="table table-bordered table-hover shadow">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Total Books</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        authors.length > 0 ? (

                            authors.map((author) => (

                                <tr key={author.id}>

                                    <td>{author.id}</td>

                                    <td>{author.name}</td>

                                    <td>
                                        {author.books ? author.books.length : 0}
                                    </td>

                                    <td>

                                        <Link
                                            to={`/edit-author/${author.id}`}
                                            className="btn btn-warning btn-sm me-2"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removeAuthor(author.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td colSpan="4" className="text-center">
                                    No Authors Found
                                </td>

                            </tr>

                        )
                    }

                </tbody>

            </table>

        </div>

    );

}

export default Authors;