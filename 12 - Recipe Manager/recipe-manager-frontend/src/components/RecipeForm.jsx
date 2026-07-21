import { useEffect, useState } from "react";

function RecipeForm({
    onSave,
    selectedRecipe,
    categories
}) {

    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: "",
        instructions: "",
        preparationTime: "",
        difficulty: "Easy",
        categoryId: ""
    });

    useEffect(() => {

        if (selectedRecipe) {

            setRecipe(selectedRecipe);

        } else {

            setRecipe({
                name: "",
                ingredients: "",
                instructions: "",
                preparationTime: "",
                difficulty: "Easy",
                categoryId: ""
            });

        }

    }, [selectedRecipe]);

    const handleChange = (e) => {

        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(recipe);

    };

    return (

        <div className="card shadow mb-4">

            <div className="card-header bg-primary text-white">

                <h4>

                    {selectedRecipe
                        ? "Update Recipe"
                        : "Add Recipe"}

                </h4>

            </div>

            <div className="card-body">

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label>Recipe Name</label>

                        <input
                            className="form-control"
                            name="name"
                            value={recipe.name}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label>Ingredients</label>

                        <textarea
                            className="form-control"
                            rows="3"
                            name="ingredients"
                            value={recipe.ingredients}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label>Instructions</label>

                        <textarea
                            className="form-control"
                            rows="4"
                            name="instructions"
                            value={recipe.instructions}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="row">

                        <div className="col-md-6">

                            <label>Preparation Time</label>

                            <input
                                type="number"
                                className="form-control"
                                name="preparationTime"
                                value={recipe.preparationTime}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6">

                            <label>Difficulty</label>

                            <select
                                className="form-select"
                                name="difficulty"
                                value={recipe.difficulty}
                                onChange={handleChange}
                            >

                                <option>Easy</option>

                                <option>Medium</option>

                                <option>Hard</option>

                            </select>

                        </div>

                    </div>

                    <div className="mt-3">

                        <label>Category</label>

                        <select
                            className="form-select"
                            name="categoryId"
                            value={recipe.categoryId}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Select Category
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

                    <button
                        className="btn btn-success mt-4"
                    >

                        {selectedRecipe
                            ? "Update"
                            : "Save"}

                    </button>

                </form>

            </div>

        </div>

    );

}

export default RecipeForm;