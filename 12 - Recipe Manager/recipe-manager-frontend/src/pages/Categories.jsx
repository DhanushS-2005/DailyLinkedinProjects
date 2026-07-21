import { useEffect, useState } from "react";

import {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../services/categoryService";

import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

function Categories() {

    const [categories, setCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = () => {

        getAllCategories()
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => console.error(error));

    };

    const handleSave = (category) => {

        if (category.id) {

            updateCategory(category.id, category)
                .then(() => {
                    loadCategories();
                    setSelectedCategory(null);
                });

        } else {

            createCategory(category)
                .then(() => {
                    loadCategories();
                });

        }

    };

    const handleEdit = (category) => {
        setSelectedCategory(category);
    };

    const handleDelete = (id) => {

        if (window.confirm("Delete this category?")) {

            deleteCategory(id)
                .then(() => {
                    loadCategories();
                });

        }

    };

    return (

        <div>

            <h2 className="mb-4">

                Category Management

            </h2>

            <CategoryForm

                onSave={handleSave}

                selectedCategory={selectedCategory}

            />

            <CategoryList

                categories={categories}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

        </div>

    );

}

export default Categories;