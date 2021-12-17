import styles from "./mini-card.module.css";
import PriceComponent from "../PriceComponent";

const MiniCard = (props) => {
  const { banner, title, price } = props;

  return (
    <>
      <div className={styles.main}>
        <div>
          <img src={banner} alt="banner" />
        </div>

        <div>
          <p>{title}</p>
          <div className={styles.price}>
            <PriceComponent price={price} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniCard;
