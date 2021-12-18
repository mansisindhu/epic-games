import styles from "./mini-card-container.module.css";
import MiniCard from "../MiniCard";

const MiniCardContainer = ({ data, heading }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <p className={styles.cont_heading}>{heading}</p>

          {data.map((el, i) => {
            return (
              <div key={i} className={styles.card}>
                <MiniCard
                  banner={el.cardImage}
                  title={el.title}
                  price={el.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MiniCardContainer;
