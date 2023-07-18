import React, { useState } from "react";
import styles from "./CheckoutForm.module.scss";
import Card from "../card/Card";
import CheckoutSummary from "../checkoutSummary/CheckoutSummary";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectUserID } from "../../redux/slice/authSlice";
import {
  CLEAR_CART,
  selectCartItems,
  selectCartTotalAmount,
} from "../../redux/slice/cartSlice";
import { selectShippingAddress } from "../../redux/slice/checkoutSlice";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userID = useSelector(selectUserID);
  const userEmail = useSelector(selectEmail);
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const shippingAddress = useSelector(selectShippingAddress);

  // Save order to Order History
  const saveOrder = async () => {
    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
    const orderConfig = {
      userID,
      userEmail,
      orderDate: date,
      orderTime: time,
      orderAmount: cartTotalAmount,
      orderStatus: "Order Placed...",
      cartItems,
      shippingAddress,
      createdAt: Date.now(),
    };
    try {
      const url = "http://localhost:3001/orders";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderConfig),
      };

      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          dispatch(CLEAR_CART());
          toast.success("Order saved");
          navigate("/checkout-success");
        })
        .catch((error) => {
          console.error("Error making POST request:", error);
          toast.error(error);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    saveOrder();
  };

  return (
    <section>
      <div className={`container ${styles.checkout}`}>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Card cardClass={styles.card}>
              <CheckoutSummary />
            </Card>
          </div>
          <div>
            <Card cardClass={`${styles.card} ${styles.pay}`}>
              <h3>Payment Details</h3>
              <button id="submit" className={styles.button}>
                Complete Payment
              </button>
              {message && <div id={styles["payment-message"]}>{message}</div>}
            </Card>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;
