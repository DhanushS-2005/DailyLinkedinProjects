import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/productService";

function AddProduct() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        minStock: ""
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        addProduct(product)
            .then(() => {
                alert("Product Added Successfully");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    <h3>Add Product</h3>
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

                        <button className="btn btn-success">
                            Save Product
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default AddProduct;