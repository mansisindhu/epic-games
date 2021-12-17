import TopCategorySlider from "../../TopCategorySlider";
import MainCard from "../MainCard";
import styles from "./mainCardContainer.module.css";

const MainCardContainer = ({ data }) => {
  return (
    <>
      <TopCategorySlider text="Games on Sale" />
      <div className={styles.mainCardContainer}>
        <div className={styles.container}>
          {data.map((el, i) => {
            return (
              <div key={i} className={styles.card}>
                <MainCard
                  image={el.cardImage}
                  title={el.title}
                  tagline={el.cardTagline}
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

export default MainCardContainer;
