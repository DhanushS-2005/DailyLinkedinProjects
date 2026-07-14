function BookCard({ book, addCart }) {

    return (

        <div className="col-md-4 mb-4">

            <div className="card h-100 shadow border-0">

                <img
                    src={book.imageUrl}
                    className="card-img-top"
                    style={{
                        height: "250px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <h4>{book.title}</h4>

                    <p className="text-muted">
                        {book.author}
                    </p>

                    <h5 className="text-success">
                        ₹{book.price}
                    </h5>

                    <p>
                        Stock :
                        <span className="fw-bold">
                            {" "}{book.stock}
                        </span>
                    </p>

                    <button
                        className="btn btn-primary w-100"
                        onClick={() => addCart(book.id)}
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>

    );

}

export default BookCard;