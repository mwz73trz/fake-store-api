import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/";

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

const fakeStorAPI = {};

fakeStorAPI.getAllCategories = async () => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}products/categories/`)
  );
};

fakeStorAPI.getProductsByCategory = async (category) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}products/category/${category}/`)
  );
};

fakeStorAPI.getProductById = async (productID) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}products/${productID}/`)
  );
};

export default fakeStorAPI;
