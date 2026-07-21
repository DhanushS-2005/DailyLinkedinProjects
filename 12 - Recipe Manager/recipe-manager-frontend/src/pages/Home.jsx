import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../services/categoryService";
import { getAllRecipes } from "../services/recipeService";

function Home() {

    const [totalCategories, setTotalCategories] = useState(0);
    const [totalRecipes, setTotalRecipes] = useState(0);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = () => {

        getAllCategories()
            .then(response => {
                setTotalCategories(response.data.length);
            })
            .catch(error => console.error(error));

        getAllRecipes()
            .then(response => {
                setTotalRecipes(response.data.length);
            })
            .catch(error => console.error(error));

    };

    return (

        <div>

            <div className="text-center mb-5">

                <h1 className="fw-bold">
                    🍽️ Recipe Manager
                </h1>

                <p className="text-muted">
                    Manage your recipes and categories efficiently.
                </p>

            </div>

            <div className="row">

                <div className="col-md-6 mb-4">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h5>Total Categories</h5>

                            <h1 className="display-4 text-primary">

                                {totalCategories}

                            </h1>

                            <Link
                                to="/categories"
                                className="btn btn-primary"
                            >
                                Manage Categories
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h5>Total Recipes</h5>

                            <h1 className="display-4 text-success">

                                {totalRecipes}

                            </h1>

                            <Link
                                to="/recipes"
                                className="btn btn-success"
                            >
                                Manage Recipes
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

            <div className="card shadow mt-4">

                <div className="card-header bg-dark text-white">

                    <h4 className="mb-0">
                        Features
                    </h4>

                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-6">

                            <ul className="list-group">

                                <li className="list-group-item">
                                    ✅ Category Management
                                </li>

                                <li className="list-group-item">
                                    ✅ Recipe Management
                                </li>

                                <li className="list-group-item">
                                    ✅ Search Recipes
                                </li>

                                <li className="list-group-item">
                                    ✅ Filter by Category
                                </li>

                            </ul>

                        </div>

                        <div className="col-md-6">

                            <ul className="list-group">

                                <li className="list-group-item">
                                    ✅ Spring Boot REST API
                                </li>

                                <li className="list-group-item">
                                    ✅ React + Axios
                                </li>

                                <li className="list-group-item">
                                    ✅ MySQL Database
                                </li>

                                <li className="list-group-item">
                                    ✅ Bootstrap 5 UI
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Home;