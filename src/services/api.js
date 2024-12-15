import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Adjust to your backend's URL

export const fetchItems = () => axios.get(`${API_BASE_URL}/items`);
export const fetchItemById = (id) => axios.get(`${API_BASE_URL}/items/${id}`);
export const createItem = (data) => axios.post(`${API_BASE_URL}/items`, data);
export const updateItem = (id, data) => axios.put(`${API_BASE_URL}/items/${id}`, data);
export const deleteItem = (id) => axios.delete(`${API_BASE_URL}/items/${id}`);
