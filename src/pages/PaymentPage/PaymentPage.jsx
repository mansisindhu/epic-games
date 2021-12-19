import React from "react";
import styles from "./payment.module.css";
import PaymentCard from "../../components/PaymentPageComponents/PaymentCard";
import Sidebar from "../../components/PaymentPageComponents/Sidebar";

const PaymentPage = () => {
  return (
    <>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_container}>
          <div className={styles.main}>
            <div className={styles.payment}>
              <div className={styles.checkout_title}>
                <p>Checkout</p>
              </div>
              <PaymentCard />
            </div>

            <div className={styles.sidebar}>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
