import MainCard from "../MainCard";
import styles from "./mainCardContainer.module.css";

const MainCardContainer = ({ data, heading }) => {
  console.log(data);

  return (
    <>
      <h1>{heading}</h1>
      <div className={styles.container}>
        {data.map((el) => {
          return (
            <>
              <div className={styles.card}>
                <MainCard
                  image={el.cardImage}
                  title={el.title}
                  tagline={el.cardTagline}
                  discount={el.price.discount}
                  price={el.price.mainPrice}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MainCardContainer;
