import { useEffect, useState } from "react";
import { getBooks, addToCart } from "../services/bookService";
import BookCard from "../components/BookCard";

function Home() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const response = await getBooks();
        setBooks(response.data);
    };

    const handleAddCart = async (bookId) => {
    try {

        await addToCart(1, bookId, 1);

        // Reload books to get updated stock
        await loadBooks();

        alert("Book Added Successfully");

    } catch (error) {
        console.log(error);
    }
};

    return (

        <div className="container mt-4">

            <div className="text-center mb-5">

                <h1>Welcome to Book Store 📚</h1>

                <p className="text-secondary">
                    Buy your favourite programming books
                </p>

            </div>

            <div className="row">

                {
                    books.map(book => (

                        <BookCard
                            key={book.id}
                            book={book}
                            addCart={handleAddCart}
                        />

                    ))
                }

            </div>

        </div>

    );
}

export default Home;