import axiosInstance from './axiosInstance'

export const getProducts = (params = {}) => {
  return axiosInstance.get('/products', { params })
}

export const getProductById = (id) => {
  return axiosInstance.get(`/products/${id}`)
}

export default {
  getProducts,
  getProductById,
}
