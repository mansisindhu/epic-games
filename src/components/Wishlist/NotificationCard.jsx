import React from "react";
import styles from "./notificationCard.module.css";

export const NotificationCard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.small}>Receive notifications about my wishlist.</p>
      <p className={styles.large}>Manage all your communication preferences</p>
      <img src="/icons/link.svg" alt="" />
    </div>
  );
};
