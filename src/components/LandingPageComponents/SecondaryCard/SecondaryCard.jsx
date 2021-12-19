import styles from "./secondaryCard.module.css";
import PriceComponent from "../PriceComponent";

const SecondaryCard = (props) => {
  const { image, title, description, price } = props;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.image_div}>
          <img className={styles.banner} src={image} alt="cardImage" />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title} Available Now.</p>
          <div className={styles.description_cont}>
            <p className={styles.description}> {description}</p>
          </div>
          <div className={styles.price}>
            <PriceComponent price={price} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondaryCard;
