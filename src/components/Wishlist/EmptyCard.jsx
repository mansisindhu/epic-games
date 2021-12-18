import React from "react";
import styles from "./emptyCard.module.css";

export const EmptyCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/icons/wishlistLogo.svg" alt="" />
      </div>

      <div>
        <p className={styles.large}>
          You haven't added anything to your wishlist yet.
        </p>

        <div className={styles.small__div}>
          <p className={styles.small}>Shop for Apps & Games</p>
        </div>
      </div>
    </div>
  );
};
