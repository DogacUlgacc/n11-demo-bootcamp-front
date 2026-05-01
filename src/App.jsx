import { Route, Routes } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/payment/:paymentId" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;
