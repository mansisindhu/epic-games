import styles from "./price-component.module.css";

const PriceComponent = ({ price }) => {
  const discount = price.discount;
  const mainPrice = price.mainPrice;

  let discountedPrice = mainPrice - Math.floor(mainPrice * (discount / 100));

  return (
    <div className={styles.price}>
      {discount === 100 ? (
        <>
          <div className={styles.blue_button}>Free</div>
        </>
      ) : discount === 0 ? (
        <>
          <div className={styles.disounted_price}>&#8377; {mainPrice}</div>
        </>
      ) : (
        <>
          <div className={styles.blue_button}>-{price.discount}%</div>
          <div className={styles.prev_price}>&#8377; {price.mainPrice}</div>
          <div className={styles.disounted_price}>
            &#8377; {discountedPrice}
          </div>
        </>
      )}
    </div>
  );
};

export default PriceComponent;
