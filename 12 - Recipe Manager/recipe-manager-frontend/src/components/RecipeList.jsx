function RecipeList({ recipes, onEdit, onDelete }) {

    return (

        <div className="card shadow">

            <div className="card-header bg-success text-white">

                <h4 className="mb-0">
                    Recipe List
                </h4>

            </div>

            <div className="card-body">

                <table className="table table-bordered table-hover">

                    <thead className="table-dark">

                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Preparation Time</th>
                            <th>Difficulty</th>
                            <th width="180">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {recipes.length === 0 ? (

                            <tr>

                                <td colSpan="6" className="text-center">

                                    No Recipes Found

                                </td>

                            </tr>

                        ) : (

                            recipes.map(recipe => (

                                <tr key={recipe.id}>

                                    <td>{recipe.id}</td>

                                    <td>{recipe.name}</td>

                                    <td>{recipe.categoryName}</td>

                                    <td>
                                        {recipe.preparationTime} mins
                                    </td>

                                    <td>

                                        <span className={
                                            recipe.difficulty === "Easy"
                                                ? "badge bg-success"
                                                : recipe.difficulty === "Medium"
                                                    ? "badge bg-warning text-dark"
                                                    : "badge bg-danger"
                                        }>

                                            {recipe.difficulty}

                                        </span>

                                    </td>

                                    <td>

                                        <button
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() => onEdit(recipe)}
                                        >

                                            Edit

                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => onDelete(recipe.id)}
                                        >

                                            Delete

                                        </button>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default RecipeList;