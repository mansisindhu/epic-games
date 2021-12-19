import React from "react";
import { useState } from "react";
import styles from "./payment-card.module.css";
import { IoMdCard } from "react-icons/io";
import CardDetails from "../CardDetails";

const PaymentCard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.open}>
        <div className={styles.payment_method_open}>
          <input
            onChange={handleOpen}
            className={styles.radio}
            type="radio"
            name="paymentMethod"
          />
          <div className={styles.icon}>
            <IoMdCard />
          </div>
          <label for="payment">Credit Card</label>
        </div>

        {open ? <CardDetails /> : null}
      </div>

      <div className={[styles.payment_method_open, styles.disabled].join(" ")}>
        <input
          style={{
            cursor: "not-allowed",
            color: "#CCCCCC",
            backgroundColor: "#ececec",
          }}
          className={styles.radio}
          type="radio"
          checked="false"
          name="paymentMethod"
        ></input>
        <div className={styles.icon}>
          <img
            className={styles.paypal}
            src="/icons/paypalicon.svg"
            alt="paypal"
          />
        </div>
        <label for="payment">Paypal</label>
      </div>
    </div>
  );
};

export default PaymentCard;
