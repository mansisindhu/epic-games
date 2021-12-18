import React from "react";
import styles from "./payment-card.module.css";
import { IoMdCard } from "react-icons/io";
import { SiPaypal } from "react-icons/si";

const PaymentCard = () => {
  return (
    <div>
      <div className={styles.payment_method}>
        <input
          className={styles.radio}
          type="radio"
          name="paymentMethod"
        ></input>
        <div className={styles.icon}>
          <IoMdCard />
        </div>
        <label for="payment">Credit Card</label>
      </div>

      <div className={styles.payment_method}>
        <input
          className={styles.radio}
          type="radio"
          name="paymentMethod"
        ></input>
        <div className={styles.icon}>
          <SiPaypal />
        </div>
        <label for="payment">Paypal</label>
      </div>
    </div>
  );
};

export default PaymentCard;
