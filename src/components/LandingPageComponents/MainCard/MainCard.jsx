import styles from "./mainCard.module.css";
const MainCard = (props) => {
  const { image, title, tagline, price, discount } = props;
  console.log(image);

  return (
    <>
      <div className={styles.card}>
        <a className={styles.card} href="">
          <div className={styles.image_div}>
            <img className={styles.banner} src={image} alt="cardImage" />
            <div className={styles.icon}>
              <a href="#">
                <i class="fa fa-pencil fa-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <p className={styles.title}>{title}</p>
            <div className={styles.tagline_cont}>
              <p className={styles.tagline}> {tagline}</p>
            </div>
            <div className={styles.price_div}>
              <div className={styles.discount}>
                <p>-{discount}%</p>
              </div>
              <p className={styles.mrp}>₹{price}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default MainCard;
