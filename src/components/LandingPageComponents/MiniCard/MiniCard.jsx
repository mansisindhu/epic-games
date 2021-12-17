import styles from "./mini-card.module.css";
import PriceComponent from "../PriceComponent";

const MiniCard = (props) => {
  const { banner, title, price } = props;

  return (
    <>
      <div className={styles.main}>
        <div className={styles.image_div}>
          <img src={banner} alt="banner" />
        </div>

        <div className={styles.content}>
          <div className={styles.heading_div}>
            <p className={styles.heading}>{title}</p>
          </div>
          <div className={styles.price}>
            <PriceComponent price={price} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniCard;
