import axios from "axios";

const BASE_URL = "http://localhost:8080/books";

// Get All Books
export const getBooks = () => {
    return axios.get(BASE_URL);
};

// Get Book By Id
export const getBook = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

// Add Book
export const addBook = (book) => {
    return axios.post(BASE_URL, book);
};

// Update Book
export const updateBook = (id, book) => {
    return axios.put(`${BASE_URL}/${id}`, book);
};

// Delete Book
export const deleteBook = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};

export const searchBook = (keyword) => {
    return axios.get(`http://localhost:8080/books/search?keyword=${keyword}`);
};