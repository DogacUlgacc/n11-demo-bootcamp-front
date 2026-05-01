import axiosInstance from "./axiosInstance";

const CART_ID_STORAGE_KEY = "3d5cefed-2835-471e-81b0-2acb6aed28ce";

export const getStoredCartId = () => {
  return localStorage.getItem(CART_ID_STORAGE_KEY);
};

export const storeCartId = (cartId) => {
  if (cartId) {
    localStorage.setItem(CART_ID_STORAGE_KEY, cartId);
  }
};

export const clearStoredCartId = () => {
  localStorage.removeItem(CART_ID_STORAGE_KEY);
};

export const createCart = async (userId, currency = "TRY") => {
  const response = await axiosInstance.post("/api/v1/carts", {
    userId,
    currency,
  });

  storeCartId(response.data?.cartId);

  return response.data;
};

export const ensureCart = async (userId, currency = "TRY") => {
  const storedCartId = getStoredCartId();

  if (storedCartId) {
    return storedCartId;
  }

  const cart = await createCart(userId, currency);

  return cart.cartId;
};

export const getCartById = async (cartId) => {
  const response = await axiosInstance.get(`/api/v1/carts/${cartId}`);

  return response.data;
};

export const getCurrentCart = async (userId, currency = "TRY") => {
  const cartId = await ensureCart(userId, currency);

  return getCartById(cartId);
};

export const addProductToCart = async (
  userId,
  productId,
  quantity = 1,
  currency = "TRY",
) => {
  await ensureCart(userId, currency);

  const response = await axiosInstance.post("/api/v1/carts/items", {
    userId,
    productId,
    quantity,
  });

  return response.data;
};

export const updateCartItemQuantity = async (cartId, productId, quantity) => {
  const response = await axiosInstance.put(
    `/api/v1/carts/${cartId}/items/${productId}`,
    { quantity },
  );

  return response.data;
};

export const removeCartItem = async (cartId, productId) => {
  await axiosInstance.delete(`/api/v1/carts/${cartId}/items/${productId}`);
};
