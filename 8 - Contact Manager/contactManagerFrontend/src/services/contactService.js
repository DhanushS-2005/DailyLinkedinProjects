import axios from "axios";

const API_URL = "http://localhost:8080/contacts";

export const getContacts = () => axios.get(API_URL);

export const getContact = (id) => axios.get(`${API_URL}/${id}`);

export const addContact = (formData) =>
    axios.post(API_URL, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

export const updateContact = (id, formData) =>
    axios.put(`${API_URL}/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

export const deleteContact = (id) =>
    axios.delete(`${API_URL}/${id}`);