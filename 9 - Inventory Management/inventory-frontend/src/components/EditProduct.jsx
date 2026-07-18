import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    getProduct,
    updateProduct
} from "../services/productService";

function EditProduct() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        minStock: ""
    });

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = () => {

        getProduct(id)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => console.log(error));
    };

    const handleChange = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        updateProduct(id, product)
            .then(() => {
                alert("Product Updated Successfully");
                navigate("/");
            })
            .catch((error) => console.log(error));

    };

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-warning">
                    <h3>Edit Product</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Product Name</label>

                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">
                            <label className="form-label">Category</label>

                            <input
                                type="text"
                                className="form-control"
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">
                            <label className="form-label">Price</label>

                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">
                            <label className="form-label">Stock</label>

                            <input
                                type="number"
                                className="form-control"
                                name="stock"
                                value={product.stock}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">
                            <label className="form-label">Minimum Stock</label>

                            <input
                                type="number"
                                className="form-control"
                                name="minStock"
                                value={product.minStock}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <button className="btn btn-warning me-2">
                            Update Product
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate("/")}
                        >
                            Cancel
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default EditProduct;