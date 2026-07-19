import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../services/productService";

function EditProduct() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        brand: "",
        category: "",
        price: "",
        stock: "",
        available: true
    });

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        try {
            const response = await getProduct(id);
            setProduct(response.data);
        } catch (error) {
            console.log(error);
        }
    };

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

            await updateProduct(id, product);

            alert("Product Updated Successfully");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Update Failed");

        }

    };

    return (

        <div className="row justify-content-center">

            <div className="col-md-6">

                <div className="card shadow">

                    <div className="card-body">

                        <h3 className="text-center mb-4">
                            Edit Product
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
                                    type="checkbox"
                                    className="form-check-input"
                                    name="available"
                                    checked={product.available}
                                    onChange={handleChange}
                                />

                                <label className="form-check-label">
                                    Available
                                </label>

                            </div>

                            <button
                                className="btn btn-success w-100"
                                type="submit"
                            >
                                Update Product
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default EditProduct;