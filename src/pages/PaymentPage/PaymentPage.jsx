import React, { useState } from "react";
import { PaymentModal } from "../../components/PaymentPageComponents/PaymentModal";
import styles from "./paymentPage.module.css";

export const PaymentPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Open
        </button>

        {modalOpen && <PaymentModal setOpenModal={setModalOpen} />}
      </div>
    </div>
  );
};
