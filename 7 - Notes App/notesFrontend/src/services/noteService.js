import axios from "axios";

const API = "http://localhost:8080/api/notes";

export const getNotes = () => axios.get(API);

export const getNote = (id) => axios.get(`${API}/${id}`);

export const addNote = (note) => axios.post(API, note);

export const updateNote = (id, note) =>
  axios.put(`${API}/${id}`, note);

export const deleteNote = (id) =>
  axios.delete(`${API}/${id}`);