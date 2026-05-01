import axiosInstance from "./axiosInstance";

export const createPayment = async ({ orderId, userId, amount, currency }) => {
  const response = await axiosInstance.post("/api/v1/payments", {
    orderId,
    userId,
    amount,
    currency,
  });

  return response.data;
};

export const getPayments = async () => {
  const response = await axiosInstance.get("/api/v1/payments");

  return response.data;
};

export const getPaymentById = async (paymentId) => {
  const response = await axiosInstance.get(`/api/v1/payments/${paymentId}`);

  return response.data;
};

export const waitForPaymentByOrderId = async (
  orderId,
  { retries = 10, delayMs = 500 } = {},
) => {
  for (let attempt = 0; attempt < retries; attempt += 1) {
    const payments = await getPayments();
    const payment = payments.find((item) => item.orderId === orderId);

    if (payment) {
      return payment;
    }

    await new Promise((resolve) => {
      setTimeout(resolve, delayMs);
    });
  }

  throw new Error("Ödeme kaydı henüz oluşturulmadı. Lütfen tekrar deneyin.");
};

export const completePayment = async (paymentId) => {
  const response = await axiosInstance.post(
    `/api/v1/payments/${paymentId}/complete`,
  );

  return response.data;
};

export const payWithCard = async (paymentId, card) => {
  const response = await axiosInstance.post(
    `/api/v1/payments/${paymentId}/pay`,
    card,
  );

  return response.data;
};
