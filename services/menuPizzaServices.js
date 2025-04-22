import axios from "axios";
import { API_URL } from "./config";

export const fetchPizzasByCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      `${API_URL}/getPizzabyCategory?categoryId=${categoryId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching pizzas by category:", error);
    throw error;
  }
};

export const fetchAllCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllCategories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchPizzaById = async (pizzaId) => {
  try {
    const response = await axios.get(`${API_URL}/getPizzaById/${pizzaId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pizza details:", error);
    throw error;
  }
};
