import React, { useContext } from "react";
import { PaymentModal } from "../../components/PaymentPageComponents/PaymentModal";
import { PaymentContext } from "../../contexts/PaymentContext";

export const PaymentPage = () => {
  const { modalOpen } = useContext(PaymentContext);
  return <div>{modalOpen && <PaymentModal />}</div>;
};
