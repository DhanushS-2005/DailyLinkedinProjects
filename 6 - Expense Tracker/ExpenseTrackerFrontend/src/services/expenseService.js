import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getExpenses = () => axios.get(`${BASE_URL}/expenses`);

export const getExpense = (id) =>
    axios.get(`${BASE_URL}/expenses/${id}`);

export const addExpense = (expense) =>
    axios.post(`${BASE_URL}/expenses`, expense);

export const updateExpense = (id, expense) =>
    axios.put(`${BASE_URL}/expenses/${id}`, expense);

export const deleteExpense = (id) =>
    axios.delete(`${BASE_URL}/expenses/${id}`);

export const searchExpense = (title) =>
    axios.get(`${BASE_URL}/expenses/search?title=${title}`);

export const getCategoryExpense = () =>
    axios.get(`${BASE_URL}/dashboard/category`);

export const getMonthlyExpense = () =>
    axios.get(`${BASE_URL}/dashboard/monthly`);

export const getDashboardSummary = () =>
    axios.get(`${BASE_URL}/dashboard/summary`);