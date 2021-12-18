import { createContext, useState } from "react";

export const PaymentContext = createContext();

export const PaymentContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = (data) => {
    setModalOpen(data);
  };
  return (
    <PaymentContext.Provider value={{ modalOpen, handleOpen }}>
      {children}
    </PaymentContext.Provider>
  );
};
