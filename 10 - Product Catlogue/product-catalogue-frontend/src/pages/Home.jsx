import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPannel";

import {
    getProducts,
    filterByCategory,
    filterByBrand,
    filterByAvailability,
    filterByPrice
} from "../services/productService";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    const applyFilter = async (filter) => {

    let response;

    if (filter.category) {
        response = await filterByCategory(filter.category);
    }
    else if (filter.brand) {
        response = await filterByBrand(filter.brand);
    }
    else if (filter.available !== "") {
        response = await filterByAvailability(filter.available);
    }
    else if (filter.maxPrice) {
        response = await filterByPrice(0, filter.maxPrice);
    }
    else {
        response = await getProducts();
    }

    setProducts(response.data);
};

    return (

        <>

            <FilterPanel onFilter={applyFilter} />

            <div className="row">

                {products.map(product => (

                    <div
                        className="col-md-4 mb-4"
                        key={product.id}
                    >
                        <ProductCard product={product} />
                    </div>

                ))}

            </div>

        </>

    );

}

export default Home;