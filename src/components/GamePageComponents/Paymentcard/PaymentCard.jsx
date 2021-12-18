import styles from "./paymentCard.module.css";
import { ImWindows8 } from "react-icons/im";
import { FaApple } from "react-icons/fa";

const PaymentCard = (props) => {
  const { logo, discount, price, developer, publisher, releaseDate, platform } =
    props;
  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.basegame}>Base Game</div>

        <div className={styles.price_div}>
          <div className={styles.discount}>
            <p>-{discount}%</p>
          </div>
          <p className={styles.mrp}>₹{price}</p>
        </div>

        <div className={styles.buttons}>
          <button className={styles.buy_btn}>BUY NOW</button>
          <button className={styles.wishlist_btn}>ADD TO WISHLIST</button>
        </div>

        <div className={styles.game_info}>
          <div className={styles.game_details}>
            <p className={styles.details_title}>Developer</p>
            <div className={styles.title}>
              <p>{developer}</p>
            </div>
          </div>

          <div className={styles.game_details}>
            <p className={styles.details_title}>Publisher</p>
            <div className={styles.title}>
              <p>{publisher}</p>
            </div>
          </div>

          <div className={styles.game_details}>
            <p className={styles.details_title}>Release Date</p>
            <div className={styles.title}>
              <p>{releaseDate}</p>
            </div>
          </div>

          <div className={styles.game_details}>
            <p className={styles.details_title}>Platform</p>
            <div className={styles.title}>
              {platform.map((el, i) => {
                if (el === "Windows") {
                  return <ImWindows8 className={styles.iconW} key={i} />;
                }
                if (el === "Mac") {
                  return <FaApple className={styles.iconA} key={i} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
