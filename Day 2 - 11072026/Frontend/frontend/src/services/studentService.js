import axios from "axios";

const API = "http://localhost:8080/students";

export const getStudents = () => axios.get(API);

export const getStudent = (id) => axios.get(`${API}/${id}`);

export const addStudent = (student) => axios.post(API, student);

export const updateStudent = (id, student) =>
  axios.put(`${API}/${id}`, student);

export const deleteStudent = (id) =>
  axios.delete(`${API}/${id}`);

export const searchStudent = (firstName) =>
    axios.get(`${API}/search?firstName=${firstName}`);