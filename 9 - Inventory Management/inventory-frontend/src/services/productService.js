import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

export const getProducts = () => axios.get(API_URL);

export const getProduct = (id) => axios.get(`${API_URL}/${id}`);

export const addProduct = (product) => axios.post(API_URL, product);

export const updateProduct = (id, product) =>
    axios.put(`${API_URL}/${id}`, product);

export const deleteProduct = (id) =>
    axios.delete(`${API_URL}/${id}`);

export const addStock = (id, qty) =>
    axios.put(`${API_URL}/${id}/add-stock?qty=${qty}`);

export const reduceStock = (id, qty) =>
    axios.put(`${API_URL}/${id}/reduce-stock?qty=${qty}`);

export const getLowStock = () =>
    axios.get(`${API_URL}/low-stock`);