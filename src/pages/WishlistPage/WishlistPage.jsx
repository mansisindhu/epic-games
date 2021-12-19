import React from "react";
import styles from "./wishlist.module.css";
import Header from "../../components/header";
import SubNavbar from "../../components/SubNavbar";
import NotificationBar from "../../components/WishlistComponent/NotificationBar/NotificationBar";

import Card from "../../components/WishlistComponent/Card/Card";

const WishListPage = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.containter}>
          <SubNavbar />

          <div className={styles.main_container}>
            <p>Wishlist </p>

            <NotificationBar />

            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListPage;
