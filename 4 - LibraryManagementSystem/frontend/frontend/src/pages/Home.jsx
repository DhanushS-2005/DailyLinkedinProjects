import { useEffect, useState } from "react";
import { getAuthors } from "../services/authorService";
import { getBooks } from "../services/bookService";

function Home() {

    const [authorCount, setAuthorCount] = useState(0);
    const [bookCount, setBookCount] = useState(0);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const authors = await getAuthors();
            const books = await getBooks();

            setAuthorCount(authors.data.length);
            setBookCount(books.data.length);

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div>

            <div className="text-center mb-5">
                <h2>📚 Library Management System</h2>
                <p className="text-muted">
                    Manage Authors and Books using Java Full Stack
                </p>
            </div>

            <div className="row">

                <div className="col-md-6 mb-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h5>Total Authors</h5>

                            <h1 className="text-primary">
                                {authorCount}
                            </h1>

                        </div>

                    </div>

                </div>

                <div className="col-md-6 mb-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h5>Total Books</h5>

                            <h1 className="text-success">
                                {bookCount}
                            </h1>

                        </div>

                    </div>

                </div>

            </div>

            <div className="card shadow mt-4">

                <div className="card-body">

                    <h4>Project Features</h4>

                    <ul>
                        <li>Add Authors</li>
                        <li>Add Books</li>
                        <li>View Authors</li>
                        <li>View Books</li>
                        <li>One-to-Many Relationship</li>
                        <li>Spring Boot REST API</li>
                        <li>React Frontend</li>
                        <li>MySQL Database</li>
                    </ul>

                </div>

            </div>

        </div>

    );
}

export default Home;