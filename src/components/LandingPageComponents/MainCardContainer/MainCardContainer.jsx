import { Link } from "react-router-dom";

import TopCategorySlider from "../../TopCategorySlider";
import MainCard from "../MainCard";
import styles from "./mainCardContainer.module.css";
import GameCard from "../../BrowsePageComponents/GameCard";

const MainCardContainer = ({ data, title }) => {
  return (
    <>
      <TopCategorySlider text={title} />
      <div className={styles.mainCardContainer}>
        <div className={styles.container}>
          {data.map((el, i) => {
            return (
              <div className={styles.card}>
                <Link key={i} to={`/games/${el._id}`}>
                  <GameCard
                    image={el.cardImage}
                    title={el.title}
                    tagline={el.cardTagline}
                    price={el.price}
                    id={el._id}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainCardContainer;
