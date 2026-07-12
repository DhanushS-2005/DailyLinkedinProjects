import axios from "axios";

const API_URL = "http://localhost:8080/employees";

// Get All Employees
export const getEmployees = () => {
    return axios.get(API_URL);
};

// Get Employee By ID
export const getEmployee = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Add Employee
export const addEmployee = (employee) => {
    return axios.post(API_URL, employee);
};

// Update Employee
export const updateEmployee = (id, employee) => {
    return axios.put(`${API_URL}/${id}`, employee);
};

// Delete Employee
export const deleteEmployee = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

// Search Employee
export const searchEmployee = (keyword) => {
    return axios.get(`${API_URL}/search?keyword=${keyword}`);
};

// Sort Employee
export const sortEmployee = (field, direction) => {
    return axios.get(
        `${API_URL}/sort?field=${field}&direction=${direction}`
    );
};