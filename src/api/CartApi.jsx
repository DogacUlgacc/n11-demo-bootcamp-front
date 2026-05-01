import axiosInstance from "./axiosInstance";

export const createCart = async (userId, currency = "TRY") => {
  const response = await axiosInstance.post("/api/v1/carts", {
    userId,
    currency,
  });

  return response.data;
};

export const addProductToCart = async (userId, productId, quantity = 1, currency = "TRY") => {
  await createCart(userId, currency);

  const response = await axiosInstance.post("/api/v1/carts/items", {
    userId,
    productId,
    quantity,
  });

  return response.data;
};
