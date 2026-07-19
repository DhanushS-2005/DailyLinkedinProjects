import { Link } from "react-router-dom";
import { deleteProduct } from "../services/productService";

function ProductCard({ product }) {

    const removeProduct = async () => {

        if (window.confirm("Delete Product?")) {
            await deleteProduct(product.id);
            window.location.reload();
        }

    };

    return (

        <div className="card shadow">

            <div className="card-body">

                <h5>{product.name}</h5>

                <p>
                    <strong>Brand:</strong> {product.brand}
                </p>

                <p>
                    <strong>Category:</strong> {product.category}
                </p>

                <p>
                    <strong>Price:</strong> ₹{product.price}
                </p>

                <p>
                    <strong>Stock:</strong> {product.stock}
                </p>

                <p>
                    <strong>Status:</strong>{" "}
                    {product.available ? "Available" : "Out of Stock"}
                </p>

                <Link
                    className="btn btn-warning me-2"
                    to={`/edit/${product.id}`}
                >
                    Edit
                </Link>

                <button
                    className="btn btn-danger"
                    onClick={removeProduct}
                >
                    Delete
                </button>

            </div>

        </div>

    );
}

export default ProductCard;