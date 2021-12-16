import PaymentCard from "../Paymentcard";
import styles from "./gameCard.module.css";
const GameCard = ({ data }) => {
  return (
    <>
      <div className={styles.gameCard}>
        <div className={styles.container}>
          <p>{data.title}</p>
          <div>
            <img src={data.thumbnail} alt="" />
          </div>
        </div>

        <div>
          <PaymentCard
            logo={data.logo}
            discount={data.price.discount}
            price={data.price.mainPrice}
            developer={data.developer}
            publisher={data.publisher}
            releaseDate={data.releaseDate}
            platform={data.platform}
          />
        </div>
      </div>
    </>
  );
};

export default GameCard;
