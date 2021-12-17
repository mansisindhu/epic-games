import PriceComponent from "../../PriceComponent";
import styles from "./game-card.module.css";

const GameCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_div}>
        <img src={props.image} alt={props.title} />
        <div className={styles.icon}>
          <img src="/icons/Add_to_Wishlist.svg" alt="" />
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.tagline_cont}>
          <p className={styles.tagline}>{props.tagline}</p>
        </div>
      </div>
      <div className={styles.price}>
        <PriceComponent price={props.price} />
      </div>
    </div>
  );
};

export default GameCard;
