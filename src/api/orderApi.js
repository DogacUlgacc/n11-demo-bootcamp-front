import axiosInstance from "./axiosInstance";

export const checkoutOrder = async ({ userId, cartId }) => {
  const response = await axiosInstance.post("/api/v1/orders/checkout", {
    userId,
    cartId,
  });

  return response.data;
};
