import React from "react";
import styles from "./wishlist.module.css";
import { Card } from "../../components/Wishlist/Card";
import { NotificationCard } from "../../components/Wishlist/NotificationCard";
import { EmptyCard } from "../../components/Wishlist/EmptyCard";

export const WishlistPage = () => {
  const data = {
    wishlist: [1],
  };
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>Wishlist</p>
      </div>

      <NotificationCard />

      {!data.wishlist.length ? <EmptyCard /> : <Card />}
    </div>
  );
};
