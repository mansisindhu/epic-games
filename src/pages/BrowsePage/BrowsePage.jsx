import { useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import PopularGenre from "../../components/BrowsePageComponents/PopularGenre";
import styles from "./browse-page.module.css";
import GameCard from "../../components/BrowsePageComponents/GameCard";
import FilterModal from "../../components/BrowsePageComponents/Filters/FilterModal";
import Header from "../../components/header";
import SubNavbar from "../../components/SubNavbar";
import Footer from "../../components/Footer";

const BrowsePage = () => {
  const [sortingModal, setSortingModalState] = useState(false);
  const data = useSelector((state) => state.games);

  const closeSortingModal = () => {
    setSortingModalState((prev) => !prev);
  };

  const [filterModal, setFilterModal] = useState(false);

  useEffect(() => {
    if (filterModal) {
      document.body.setAttribute("class", "overflow-hidden");
    } else {
      document.body.removeAttribute("class", "overflow-hidden");
    }
  }, [filterModal]);

  const sortGames = (sortBy) => {
    if (sortBy === "alphabetical") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "highToLow") {
      data.sort((a, b) => b.price.discountedPrice - a.price.discountedPrice);
    } else if (sortBy === "lowToHigh") {
      data.sort((a, b) => a.price.discountedPrice - b.price.discountedPrice);
    } else if (sortBy === "newRelease") {
      data.sort((date1, date2) => {
        date1 = new Date(date1.releaseDate);
        date2 = new Date(date2.releaseDate);
        return date2 - date1;
      });
    }
  };

  const [activeSort, setActiveSort] = useState("New Release");

  return (
    <>
      <Header />
      <SubNavbar />
      <div className={styles.main}>
        <div className={styles.containter}>
          <PopularGenre />
          <div className={styles.main_container}>
            <div className={styles.data_wrapper}>
              <div className={styles.filters_sorting_container}>
                <div className={styles.sorting}>
                  <p className={styles.sorting_para}>
                    Sort By:{" "}
                    <span onClick={closeSortingModal}>{activeSort}</span>
                  </p>
                  {sortingModal ? (
                    <div
                      onClick={closeSortingModal}
                      className={styles.sorting_modal}
                    >
                      <p
                        onClick={() => {
                          sortGames("newRelease");
                          setActiveSort("New Release");
                        }}
                        className={styles.sorting_option}
                      >
                        New Release
                      </p>
                      <p
                        onClick={() => {
                          sortGames("alphabetical");
                          setActiveSort("Alphabetical");
                        }}
                        className={styles.sorting_option}
                      >
                        Alphabetical
                      </p>
                      <p
                        onClick={() => {
                          sortGames("lowToHigh");
                          setActiveSort("Price: Low to High");
                        }}
                        className={styles.sorting_option}
                      >
                        Price: Low to High
                      </p>
                      <p
                        onClick={() => {
                          sortGames("highToLow");
                          setActiveSort("Price: High to Low");
                        }}
                        className={styles.sorting_option}
                      >
                        Price: High to Low
                      </p>
                    </div>
                  ) : null}
                </div>
                <div
                  onClick={() => setFilterModal(true)}
                  className={styles.filters}
                >
                  <p>Filters</p>
                  <IoFilterSharp style={{ width: "18px", height: "18px" }} />
                </div>
              </div>
              <div className={styles.data_container}>
                {data.length ? (
                  data.map((el, i) => (
                    <div key={i} className={styles.card_container}>
                      <Link to={`/games/${el._id}`}>
                        <GameCard
                          image={el.cardImage}
                          title={el.title}
                          tagline={el.cardTagline}
                          price={el.price}
                          id={el._id}
                        />
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className={styles.error}>
                    <p className={styles.error_main}>No results found</p>
                    <p className={styles.error_secondary}>
                      Unfortunately I could not find any resultsmatching your
                      search.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.filters_desktop}>
              <FilterModal />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {filterModal ? (
        <div className={styles.modal_overlay}>
          <div className={styles.modal_container}>
            <FilterModal handleClose={setFilterModal} />
          </div>
          <div className={styles.bottom_navbar}>
            <div className={styles.clear}>CLEAR</div>
            <button
              onClick={() => setFilterModal(false)}
              className={styles.done}
            >
              DONE
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BrowsePage;
