import React from "react";
import { MdOutlineClose } from "react-icons/md";

import styles from "./checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_container}>
        <div className={styles.closeIcon}>
          <MdOutlineClose />
        </div>
        <div className={styles.main}>
          <div className={styles.upper}>
            <img src="/icons/Epic_games_store_logo.svg" alt="logo" />
            <p>THANK YOU FOR BUYING</p>
            <h4 className={styles.title}>Battlefield 2042</h4>
            {/* <h4 className={styles.title}>{title}</h4> */}
          </div>

          <div className={styles.lower}>
            <p className={styles.heading}>Got Epic Games?</p>
            <p className={styles.subheading}>
              If you already have the Epic Games Launcher use the “Open” button
              otherwise download the Epic Games Launcher to play.
            </p>

            <button className={styles.btn}>Open Epic Games Launcher</button>
            <button className={styles.btn}>Download Epic Games Launcher</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
