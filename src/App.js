import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import {
  Header,
  Footer,
  Home,
  Contact,
  Login,
  Register,
  Reset,
} from "./components";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Cart from "./components/cart/Cart";
import CheckoutDetails from "./components/checkout/CheckoutDetails";
import Checkout from "./components/checkout/Checkout";
import CheckoutSuccess from "./components/checkout/CheckoutSuccess";
import OrderHistory from "./components/orderHistory/OrderHistory";
import OrderDetails from "./components/orderDetails/OrderDetails";
import ReviewProducts from "./components/reviewProducts/ReviewProducts";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer className="--toast" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />

          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-details" element={<CheckoutDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="/review-product/:id" element={<ReviewProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
