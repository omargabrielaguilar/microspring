// src/services/userService.ts
import axios from "axios";
import { User } from "@/types"; // Asegúrate de tener un tipo User definido en src/types

const API_URL = "http://localhost:5000/api/users"; // Reemplaza con la URL de tu API

export const getAllUsers = async (): Promise<User[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createUser = async (user: User): Promise<void> => {
  await axios.post(API_URL, user);
};

export const updateUser = async (id: string, user: User): Promise<void> => {
  await axios.put(`${API_URL}/${id}`, user);
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
