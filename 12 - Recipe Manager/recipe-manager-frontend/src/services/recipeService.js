import api from "./api";

export const getAllRecipes = () => {
    return api.get("/recipes");
};

export const getRecipeById = (id) => {
    return api.get(`/recipes/${id}`);
};

export const createRecipe = (recipe) => {
    return api.post("/recipes", recipe);
};

export const updateRecipe = (id, recipe) => {
    return api.put(`/recipes/${id}`, recipe);
};

export const deleteRecipe = (id) => {
    return api.delete(`/recipes/${id}`);
};

export const getRecipesByCategory = (categoryId) => {
    return api.get(`/recipes/category/${categoryId}`);
};

export const searchRecipes = (name) => {
    return api.get(`/recipes/search?name=${name}`);
};