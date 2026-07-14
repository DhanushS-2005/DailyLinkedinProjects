import axios from "axios";

const API_URL = "http://localhost:8080";

export const getBooks = () => {
    return axios.get(`${API_URL}/books`);
};

export const addToCart = (cartId, bookId, quantity) => {
    return axios.post(
        `${API_URL}/cart/add?cartId=${cartId}&bookId=${bookId}&quantity=${quantity}`
    );
};

export const getCart = () => {
    return axios.get(`${API_URL}/cart/1`);
};

export const removeCartItem = (itemId) => {
    return axios.delete(`${API_URL}/cart/remove/${itemId}`);
};