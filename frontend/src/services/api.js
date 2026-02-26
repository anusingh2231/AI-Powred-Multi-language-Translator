import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const translateText = async (data) => {
  const response = await axios.post(`${API_URL}/translate`, data);
  return response.data;
};