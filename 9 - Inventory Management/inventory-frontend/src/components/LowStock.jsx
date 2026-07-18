import { useEffect, useState } from "react";
import { getLowStock } from "../services/productService";

function LowStock() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadLowStock();
    }, []);

    const loadLowStock = () => {

        getLowStock()
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.log(error));

    };

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-danger text-white">
                    <h3>Low Stock Products</h3>
                </div>

                <div className="card-body">

                    {

                        products.length === 0 ?

                            (

                                <div className="alert alert-success">

                                    All products have sufficient stock.

                                </div>

                            )

                            :

                            (

                                <table className="table table-bordered table-hover">

                                    <thead className="table-dark">

                                    <tr>

                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Minimum Stock</th>
                                        <th>Status</th>

                                    </tr>

                                    </thead>

                                    <tbody>

                                    {

                                        products.map(product => (

                                            <tr key={product.id}>

                                                <td>{product.id}</td>

                                                <td>{product.name}</td>

                                                <td>{product.category}</td>

                                                <td>₹ {product.price}</td>

                                                <td>{product.stock}</td>

                                                <td>{product.minStock}</td>

                                                <td>

                                                    <span className="badge bg-danger">

                                                        Low Stock

                                                    </span>

                                                </td>

                                            </tr>

                                        ))

                                    }

                                    </tbody>

                                </table>

                            )

                    }

                </div>

            </div>

        </div>

    );

}

export default LowStock;