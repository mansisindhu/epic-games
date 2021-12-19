import React from "react";
import styles from "./payment.module.css";
import PaymentCard from "../../components/PaymentPageComponents/PaymentCard";
import Sidebar from "../../components/PaymentPageComponents/Sidebar";

const PaymentPage = (props) => {
  const { developer, price, id, image, title, closeModal, handleModal } = props;
  return (
    <>
      <div className={styles.main}>
        <div className={styles.payment}>
          <div className={styles.checkout_title}>
            <p>Checkout</p>
          </div>
          <PaymentCard />
        </div>

        <div className={styles.sidebar}>
          <Sidebar
            developer={developer}
            image={image}
            price={price}
            title={title}
            id={id}
            closeModal={closeModal}
            handleModal={handleModal}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
