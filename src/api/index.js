import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api-user',
});
export const createNewUser = (payload) => api.post(`/create-new-user`, payload);
export const getUserById = (uid) => api.get(`/user/${uid}`);
export const getAllUsers = () => api.get(`/users`);
export const deleteUser = (id) => api.delete(`/delete-user/${id}`);
export const getUserByUsername = (username) => api.get(`/username/${username}`);

export const updateUser = (id, payload) =>
  api.put(`/update-user/${id}`, payload);

export const addToFavorite = (userId, _id) =>
  api.put(`/add-to-favorite/${userId}`, _id);

export const getUserFavorites = (userId) =>
  api.get(`/user-favorites/${userId}`);

export const checkIfItemIsFavorite = (userId, payload) =>
  api.get(`/check-if-is-favorite/${userId}`, {
    params: payload,
  });

export const removeFromFavorites = (userId, _id) =>
  api.delete(`/remove-from-favorite/${userId}`, {
    params: { favoriteId: _id },
  });

const apis = {
  createNewUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserByUsername,
  addToFavorite,
  getUserFavorites,
  checkIfItemIsFavorite,
  removeFromFavorites,
};

export default apis;
