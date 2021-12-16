import styles from "./secondaryCard.module.css";

const SecondaryCard = (props) => {
  const { image, title, description, price, discount } = props;

  return (
    <>
      <a className={styles.card} href="#">
        <div className={styles.card}>
          <div className={styles.image_div}>
            <img className={styles.banner} src={image} alt="cardImage" />
            <div className={styles.icon}>
              <img src="./icons/Add_to_Wishlist.svg" alt="wishlistIcon" />
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{title} Available Now.</p>
            <div className={styles.description_cont}>
              <p className={styles.description}> {description}</p>
            </div>
            <div className={styles.price_div}>
              <div className={styles.discount}>
                <p>-{discount}%</p>
              </div>
              <p className={styles.mrp}>₹{price}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default SecondaryCard;
