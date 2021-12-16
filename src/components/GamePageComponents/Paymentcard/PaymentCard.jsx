import styles from "./paymentCard.module.css";

const PaymentCard = (props) => {
  const { logo, discount, price, developer, publisher, releaseDate, platform } =
    props;
  return (
    <>
      <div className={styles.main}>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.price_div}>
          <p>-{discount}%</p>
          <p>₹{price}</p>
        </div>

        <div>
          <button>BUY NOW</button>
          <button>ADD TO WISHLIST</button>
        </div>

        <div>
          <div>
            <p>Developer</p>
            <div>{developer}</div>
          </div>

          <div>
            <p>Publisher</p>
            <div>{publisher}</div>
          </div>

          <div>
            <p>Release Date</p>
            <div>{releaseDate}</div>
          </div>

          <div>
            <p>Platform</p>
            <div>{platform}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
