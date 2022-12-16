import Axios from "axios";
import { buildWebStorage, setupCache } from "axios-cache-interceptor";

const API_URL = process.env.REACT_APP_API_URL;

const TTL_CACHE = process.env.REACT_APP_TTL_CACHE_IN_MILLISECONDS;

const axios = setupCache(Axios, {
  storage: buildWebStorage(localStorage, "products-cache:"),
  ttl: TTL_CACHE,
});

export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
