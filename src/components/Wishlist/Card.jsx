import React, { useContext } from "react";
import styles from "./card.module.css";
import { PaymentContext } from "../../contexts/PaymentContext";

export const Card = () => {
  const { handleOpen } = useContext(PaymentContext);

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <div className={styles.imageBox__image}>
          <img
            src="https://cdn2.unrealengine.com/19br-keyart-egs-launcher-fc-1200x1600-thumb-alt-1200x1600-1499c260c3d4.jpg"
            alt=""
          />
        </div>

        <div className={styles.imageBox__disc}>
          <div>
            <button>Base Game</button>
            <p className={styles.title}>Fortnite</p>
          </div>

          <div className={styles.platform}>
            <p>Platform</p>
            <img src="/icons/Windows.svg" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.sectionTwo}>
        <div>
          <p>2,999</p>
        </div>

        <div>
          <p>Remove</p>
          <button onClick={() => handleOpen(true)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};
