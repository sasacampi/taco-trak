import api from "./api";

export const searchFoods = async (query) => {
  try {
    const response = await api.get(`/foods?name=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
