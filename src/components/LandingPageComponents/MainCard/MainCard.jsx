import styles from "./mainCard.module.css";
import PriceComponent from "../PriceComponent";

const MainCard = (props) => {
  const { image, title, tagline, price } = props;
  console.log(image);

  return (
    <>
      <div className={styles.card}>
        <a className={styles.card} href="https://www.epicgames.com">
          <div className={styles.image_div}>
            <img className={styles.banner} src={image} alt="cardImage" />
            <div className={styles.icon}>
              <img src="./icons/Add_to_Wishlist.svg" alt="wishlistIcon" />
            </div>
          </div>
          <div>
            <p className={styles.title}>{title}</p>
            <div className={styles.tagline_cont}>
              <p className={styles.tagline}> {tagline}</p>
            </div>
            <div className={styles.price}>
              <PriceComponent price={price} />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default MainCard;
