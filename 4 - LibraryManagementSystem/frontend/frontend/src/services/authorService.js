import axios from "axios";

const BASE_URL = "http://localhost:8080/authors";

// Get All Authors
export const getAuthors = () => {
    return axios.get(BASE_URL);
};

// Get Author By Id
export const getAuthor = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

// Add Author
export const addAuthor = (author) => {
    return axios.post(BASE_URL, author);
};

// Update Author
export const updateAuthor = (id, author) => {
    return axios.put(`${BASE_URL}/${id}`, author);
};

// Delete Author
export const deleteAuthor = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};