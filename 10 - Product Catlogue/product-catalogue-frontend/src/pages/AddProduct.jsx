import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/productService";

function AddProduct() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        brand: "",
        category: "",
        price: "",
        stock: "",
        available: true
    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setProduct({
            ...product,
            [name]: type === "checkbox" ? checked : value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addProduct(product);

            alert("Product Added Successfully");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Failed to Add Product");

        }

    };

    return (

        <div className="row justify-content-center">

            <div className="col-md-6">

                <div className="card shadow">

                    <div className="card-body">

                        <h3 className="mb-4 text-center">
                            Add Product
                        </h3>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label>Name</label>
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
                                <label>Brand</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="brand"
                                    value={product.brand}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Category</label>
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
                                <label>Price</label>
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
                                <label>Stock</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="stock"
                                    value={product.stock}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-check mb-3">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="available"
                                    checked={product.available}
                                    onChange={handleChange}
                                />

                                <label className="form-check-label">
                                    Available
                                </label>

                            </div>

                            <button
                                className="btn btn-primary w-100"
                                type="submit"
                            >
                                Add Product
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AddProduct;