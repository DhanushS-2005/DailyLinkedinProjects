import { useState } from "react";

function FilterPanel({ onFilter }) {

    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [available, setAvailable] = useState("");
    const [maxPrice, setMaxPrice] = useState(150000);

    return (

        <div className="card shadow mb-4">

            <div className="card-body">

                <h4 className="mb-3">Filter Products</h4>

                <div className="row">

                    {/* Category */}

                    <div className="col-md-4">

                        <select
                            className="form-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select Category</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Accessories">Accessories</option>
                        </select>

                    </div>

                    {/* Brand */}

                    <div className="col-md-4">

                        <select
                            className="form-select"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        >
                            <option value="">Select Brand</option>
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Dell">Dell</option>
                            <option value="Boat">Boat</option>
                            <option value="Xiaomi">Xiaomi</option>
                        </select>

                    </div>

                    {/* Availability */}

                    <div className="col-md-4">

                        <select
                            className="form-select"
                            value={available}
                            onChange={(e) => setAvailable(e.target.value)}
                        >
                            <option value="">Select Availability</option>
                            <option value="true">Available</option>
                            <option value="false">Out of Stock</option>
                        </select>

                    </div>

                    {/* Price Range */}

                    <div className="col-md-12 mt-4">

                        <label className="form-label fw-bold">
                            Maximum Price: ₹{Number(maxPrice).toLocaleString()}
                        </label>

                        <input
                            type="range"
                            className="form-range"
                            min="1000"
                            max="150000"
                            step="1000"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />

                    </div>

                </div>

                <div className="mt-3">

                    <button
                        className="btn btn-primary me-2"
                        onClick={() =>
                            onFilter({
                                category,
                                brand,
                                available,
                                maxPrice
                            })
                        }
                    >
                        Apply Filter
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={() => window.location.reload()}
                    >
                        Reset
                    </button>

                </div>

            </div>

        </div>

    );
}

export default FilterPanel;