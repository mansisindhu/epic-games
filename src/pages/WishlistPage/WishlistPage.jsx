import React from "react";
import styles from "./wishlist.module.css";
import Header from "../../components/header";
import SubNavbar from "../../components/SubNavbar";
import NotificationBar from "../../components/WishlistComponent/NotificationBar";
import EmptyCard from "../../components/WishlistComponent/EmptyPage";
import Card from "../../components/WishlistComponent/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishListPage = () => {
  const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.landingPageData);
  const wishlist = data.filter((el) => {
    if (user.wishlist?.includes(el._id)) {
      return el;
    }
    return false;
  });

  return (
    <>
      <Header />
      <SubNavbar />
      <div className={styles.main}>
        <div className={styles.containter}>
          <div className={styles.sub_navbar}></div>

          <div className={styles.main_container}>
            <p>Wishlist </p>
            <NotificationBar />

            {wishlist.length ? (
              wishlist.map((el, i) => {
                return (
                  <Link key={i} to={`/games/${el._id}`}>
                    <Card
                      id={el._id}
                      title={el.title}
                      price={el.price}
                      cardImage={el.cardImage}
                    />
                  </Link>
                );
              })
            ) : (
              <EmptyCard />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListPage;
