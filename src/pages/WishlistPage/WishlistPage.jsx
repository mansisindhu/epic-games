import React from "react";
import styles from "./wishlist.module.css";
import Header from "../../components/header";
import SubNavbar from "../../components/SubNavbar";
import NotificationBar from "../../components/WishlistComponent/NotificationBar/NotificationBar";
import EmptyCard from "../../components/WishlistComponent/EmptyPage/EmptyCard";
import Card from "../../components/WishlistComponent/Card/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishListPage = () => {
  const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.landingPageData);
  const wishlist = data.filter((el) => {
    if (user.wishlist?.includes(el._id)) {
      return el;
    }
  });

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.containter}>
          <div className={styles.sub_navbar}>
            <SubNavbar />
          </div>

          <div className={styles.main_container}>
            <p>Wishlist </p>
            <NotificationBar />

            {wishlist.length ? (
              wishlist.map((el) => {
                return (
                  <Link to={`/games/${el._id}`}>
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
