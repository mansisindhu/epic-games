import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

import PopularGenre from "../../components/BrowsePageComponents/PopularGenre";
import styles from "./browse-page.module.css";
import Data from "../../Data.json";
import GameCard from "../../components/BrowsePageComponents/GameCard";

const BrowsePage = () => {
  const [sortingModal, setSortingModalState] = useState(false);

  const [filterDialog, setFilterdialog] = useState(false);

  return (
    <div className={styles.main}>
      <PopularGenre />
      <div className={styles.main_container}>
        <div className={styles.filters_sorting_container}>
          <div className={styles.sorting}>
            <p className={styles.sorting_para}>
              Sort By: <span>New release</span>
            </p>
          </div>
          <div onClick={() => setFilterdialog(true)} className={styles.filters}>
            <p>Filters</p>
            <IoFilterSharp style={{ width: "18px", height: "18px" }} />
          </div>
        </div>
        <div className={styles.data_container}>
          {Data.map((el) => (
            <div className={styles.card_container}>
              <GameCard
                image={el.cardImage}
                title={el.title}
                tagline={el.cardTagline}
                price={el.price.mainPrice}
                discount={el.price.discount}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
