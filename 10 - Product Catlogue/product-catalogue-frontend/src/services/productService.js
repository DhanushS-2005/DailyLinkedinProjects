import axios from "axios";

const API = "http://localhost:8080/api/products";

export const getProducts = () => axios.get(API);

export const getProduct = (id) =>
    axios.get(`${API}/${id}`);

export const addProduct = (product) =>
    axios.post(API, product);

export const updateProduct = (id, product) =>
    axios.put(`${API}/${id}`, product);

export const deleteProduct = (id) =>
    axios.delete(`${API}/${id}`);

// Filters

export const getByCategory = (category) =>
    axios.get(`${API}/category/${category}`);

export const getByBrand = (brand) =>
    axios.get(`${API}/brand/${brand}`);

export const getByAvailability = (available) =>
    axios.get(`${API}/availability/${available}`);

export const getByPrice = (min, max) =>
    axios.get(`${API}/price?min=${min}&max=${max}`);

// Filter by Category
export const filterByCategory = (category) =>
    axios.get(`${API}/category/${category}`);

// Filter by Brand
export const filterByBrand = (brand) =>
    axios.get(`${API}/brand/${brand}`);

// Filter by Availability
export const filterByAvailability = (available) =>
    axios.get(`${API}/availability/${available}`);

// Filter by Price
export const filterByPrice = (min, max) =>
    axios.get(`${API}/price?min=${min}&max=${max}`);