import { useEffect, useState } from "react";

function CategoryForm({ onSave, selectedCategory }) {

    const [category, setCategory] = useState({
        name: "",
        description: ""
    });

    useEffect(() => {

        if (selectedCategory) {
            setCategory(selectedCategory);
        } else {
            setCategory({
                name: "",
                description: ""
            });
        }

    }, [selectedCategory]);

    const handleChange = (e) => {

        setCategory({
            ...category,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(category);

        setCategory({
            name: "",
            description: ""
        });

    };

    return (

        <div className="card shadow mb-4">

            <div className="card-header bg-primary text-white">

                <h4 className="mb-0">

                    {selectedCategory
                        ? "Update Category"
                        : "Add Category"}

                </h4>

            </div>

            <div className="card-body">

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">
                            Category Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={category.name}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Description
                        </label>

                        <textarea
                            name="description"
                            className="form-control"
                            rows="3"
                            value={category.description}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        className="btn btn-success"
                        type="submit"
                    >
                        {selectedCategory
                            ? "Update"
                            : "Save"}
                    </button>

                </form>

            </div>

        </div>

    );
}

export default CategoryForm;