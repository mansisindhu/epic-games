import React from "react";
import { Link } from "react-router-dom";
import styles from "./emptyCard.module.css";

const EmptyCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image_div}>
        <img src="/icons/sorry.svg" alt="noResults" />
      </div>
      <p className={styles.heading}>
        You haven't added anything to your wishlist yet.
      </p>

      <Link to="/browse" className={styles.link}>
        Shop for Apps & Games
      </Link>
    </div>
  );
};

export default EmptyCard;
