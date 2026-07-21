function CategoryList({ categories, onEdit, onDelete }) {

    return (
        <div className="card shadow">

            <div className="card-header bg-success text-white">
                <h4 className="mb-0">Category List</h4>
            </div>

            <div className="card-body">

                <table className="table table-bordered table-hover">

                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Category Name</th>
                            <th>Description</th>
                            <th width="180">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {categories.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No Categories Found
                                </td>
                            </tr>
                        ) : (

                            categories.map(category => (

                                <tr key={category.id}>

                                    <td>{category.id}</td>

                                    <td>{category.name}</td>

                                    <td>{category.description}</td>

                                    <td>

                                        <button
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() => onEdit(category)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => onDelete(category.id)}
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

export default CategoryList;