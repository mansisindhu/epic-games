import React from "react";
import styles from "./card.module.css";
import PriceComponent from "../../PriceComponent";

const Card = (props) => {
  const price = { mainPrice: 234, discount: 21 };

  return (
    <div className={styles.container}>
      <div className={styles.img_div}>
        <img
          src="https://cdn1.epicgames.com/spt-assets/1d1ceda7b1ba4e7893a36a1166ac3e41/download-dark-deity-offer-1p2y4.jpg?h=1920&resize=1&w=1440"
          alt="banner"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.title_div}>
          <div>
            <div className={styles.base}>Base Game</div>
            <p className={styles.title}>The Dark City</p> {/*  title */}
          </div>

          <div className={styles.platform}>
            <p className={styles.platform_heading}>Platform</p>
            <p className={styles.platform_icon}>Windows</p>
          </div>
        </div>

        <div className={styles.price_div}>
          <div className={styles.payment}>
            <div className={styles.price}>
              <PriceComponent price={price} />
            </div>
          </div>

          <div className={styles.btn_div}>
            <p className={styles.btn_remove}>Remove</p>
            <button className={styles.btn_buy}>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
