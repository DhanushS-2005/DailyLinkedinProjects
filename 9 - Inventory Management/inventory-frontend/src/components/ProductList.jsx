import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    getProducts,
    deleteProduct,
    addStock,
    reduceStock
} from "../services/productService";

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        getProducts()
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDelete = (id) => {

        if (window.confirm("Delete this product?")) {

            deleteProduct(id)
                .then(() => {
                    loadProducts();
                })
                .catch((error) => console.log(error));
        }
    };

    const handleAddStock = (id) => {

        const qty = prompt("Enter quantity");

        if (qty) {

            addStock(id, qty)
                .then(() => loadProducts())
                .catch((error) => console.log(error));
        }
    };

    const handleReduceStock = (id) => {

        const qty = prompt("Enter quantity");

        if (qty) {

            reduceStock(id, qty)
                .then(() => loadProducts())
                .catch(() => {
                    alert("Insufficient Stock");
                });
        }
    };

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-3">

                <h2>Product List</h2>

                <Link to="/add" className="btn btn-primary">
                    Add Product
                </Link>

            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Min Stock</th>
                    <th>Actions</th>

                </tr>

                </thead>

                <tbody>

                {

                    products.map((product) => (

                        <tr key={product.id}>

                            <td>{product.id}</td>

                            <td>{product.name}</td>

                            <td>{product.category}</td>

                            <td>₹ {product.price}</td>

                            <td>{product.stock}</td>

                            <td>{product.minStock}</td>

                            <td>

                                <button
                                    className="btn btn-success btn-sm me-2"
                                    onClick={() => handleAddStock(product.id)}
                                >
                                    + Stock
                                </button>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => handleReduceStock(product.id)}
                                >
                                    - Stock
                                </button>

                                <Link
                                    className="btn btn-info btn-sm me-2"
                                    to={`/edit/${product.id}`}
                                >
                                    Edit
                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))

                }

                </tbody>

            </table>

        </div>

    );

}

export default ProductList;