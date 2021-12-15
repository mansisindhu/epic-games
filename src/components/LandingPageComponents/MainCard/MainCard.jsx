import styles from "./mainCard.module.css";
const MainCard = (props) => {
  const { image, title, tagline, price, discount } = props;
  console.log(image);

  return (
    <>
      <div className={styles.card}>
        <img className={styles.banner} src={image} alt="cardImage" />
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.tagline_cont}>
          <p className={styles.tagline}> {tagline}</p>
        </div>
        <div className={styles.price_div}>
          <p>-{discount}%</p>
          <p>₹{price}</p>
        </div>
      </div>
    </>
  );
};

export default MainCard;
