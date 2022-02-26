import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api',
});
export const createNewItem = (payload) =>
  api.post(`/create-new-product`, payload);
export const getAllItems = () => api.get(`/products`);
export const getItemById = (uid) => api.get(`/product/${uid}`);
export const getItemsByTerm = (term) => api.get(`/search/${term}`);
export const deleteItem = (id) => api.delete(`/delete-product/${id}`);

// TODO:
export const updateUser = (id, payload) => api.put(`/update/${id}`, payload);

const apiItem = {
  createNewItem,
  getItemById,
  getAllItems,
  updateUser,
  deleteItem,
  getItemsByTerm,
};

export default apiItem;
