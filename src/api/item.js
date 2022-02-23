import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api',
});
export const createNewItem = (payload) =>
  api.post(`/create-new-product`, payload);
export const getAllItems = () => api.get(`/products`);
export const getItemById = (uid) => api.get(`/product/${uid}`);
export const getItemsByTerm = (term) => api.get(`/search/${term}`);
// TODO:
export const deleteUser = (id) => api.delete(`/user/delete/${id}`);
export const updateUser = (id, payload) => api.put(`/update/${id}`, payload);

const apiItem = {
  createNewItem,
  getItemById,
  getAllItems,
  updateUser,
  deleteUser,
  getItemsByTerm,
};

export default apiItem;
