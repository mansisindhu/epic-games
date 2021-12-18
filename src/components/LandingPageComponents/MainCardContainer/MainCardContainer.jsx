import { Link } from "react-router-dom";

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
              <Link key={i} to={`/games/${el._id}`}>
                <div className={styles.card}>
                  <MainCard
                    image={el.cardImage}
                    title={el.title}
                    tagline={el.cardTagline}
                    price={el.price}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainCardContainer;
