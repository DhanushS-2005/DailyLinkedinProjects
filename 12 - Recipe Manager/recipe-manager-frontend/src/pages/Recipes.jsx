import { useEffect, useState } from "react";

import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";

import {
    getAllRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    searchRecipes,
    getRecipesByCategory
} from "../services/recipeService";

import { getAllCategories } from "../services/categoryService";

function Recipes() {

    const [recipes, setRecipes] = useState([]);

    const [categories, setCategories] = useState([]);

    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const [search, setSearch] = useState("");

    const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("");

    useEffect(() => {

        loadRecipes();
        loadCategories();

    }, []);

    const loadRecipes = () => {

        getAllRecipes()
            .then(response => {

                setRecipes(response.data);

            })
            .catch(error => console.error(error));

    };

    const handleSearch = () => {

        if (search.trim() === "") {

            loadRecipes();

            return;

        }

        searchRecipes(search)
            .then(response => {

                setRecipes(response.data);

            })
            .catch(error => console.error(error));

    };

    const handleCategoryFilter = (e) => {

        const id = e.target.value;

        setSelectedCategoryFilter(id);

        if (id === "") {

            loadRecipes();

            return;

        }

        getRecipesByCategory(id)
            .then(response => {

                setRecipes(response.data);

            })
            .catch(error => console.error(error));

    };

    const loadCategories = () => {

        getAllCategories()
            .then(response => {

                setCategories(response.data);

            })
            .catch(error => console.error(error));

    };

    const handleSave = (recipe) => {

        if (recipe.id) {

            updateRecipe(recipe.id, recipe)
                .then(() => {

                    loadRecipes();

                    setSelectedRecipe(null);

                });

        } else {

            createRecipe(recipe)
                .then(() => {

                    loadRecipes();

                });

        }

    };

    const handleEdit = (recipe) => {

        setSelectedRecipe(recipe);

    };

    const handleDelete = (id) => {

        if (window.confirm("Delete this recipe?")) {

            deleteRecipe(id)
                .then(() => {

                    loadRecipes();

                });

        }

    };

    return (

        <div>

            <h2 className="mb-4">

                Recipe Management

            </h2>

            <div className="row mb-4">

                <div className="col-md-6">

                    <input
                        className="form-control"
                        placeholder="Search Recipe..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <div className="col-md-3">

                    <button
                        className="btn btn-primary w-100"
                        onClick={handleSearch}
                    >
                        Search
                    </button>

                </div>

            </div>

            <div className="mb-4">

                <select
                    className="form-select"
                    value={selectedCategoryFilter}
                    onChange={handleCategoryFilter}
                >

                    <option value="">
                        All Categories
                    </option>

                    {categories.map(category => (

                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>

                    ))}

                </select>

            </div>

            

            <RecipeForm

                onSave={handleSave}

                selectedRecipe={selectedRecipe}

                categories={categories}

            />


            <RecipeList

                recipes={recipes}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

        </div>

    );

}

export default Recipes;