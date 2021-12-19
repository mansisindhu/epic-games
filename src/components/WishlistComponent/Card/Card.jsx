import React from "react";
import { useDispatch } from "react-redux";

import styles from "./card.module.css";
import PriceComponent from "../../PriceComponent";
import { removeFromWishlist } from "../../../store/actions";

const Card = (props) => {
  const dispatch = useDispatch();

  const buyNow = (e) => {
    e.preventDefault();
  };

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeFromWishlist(props.id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.img_div}>
        <img src={props.cardImage} alt="banner" />
      </div>

      <div className={styles.content}>
        <div className={styles.title_div}>
          <div>
            <div className={styles.base}>Base Game</div>
            <p className={styles.title}>{props.title}</p> {/*  title */}
          </div>

          <div className={styles.platform}>
            <p className={styles.platform_heading}>Platform</p>
            <p className={styles.platform_icon}>Windows</p>
          </div>
        </div>

        <div className={styles.price_div}>
          <div className={styles.payment}>
            <div className={styles.price}>
              <PriceComponent price={props.price} />
            </div>
          </div>

          <div className={styles.btn_div}>
            <p onClick={removeItem} className={styles.btn_remove}>
              Remove
            </p>
            <button onClick={buyNow} className={styles.btn_buy}>
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
