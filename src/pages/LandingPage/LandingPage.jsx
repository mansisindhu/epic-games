import { useSelector } from "react-redux";

import Data from "../../Data.json";
import styles from "./landingPage.module.css";
import MainCardContainer from "../../components/LandingPageComponents/MainCardContainer/MainCardContainer";
import SecondaryCardContainer from "../../components/LandingPageComponents/SecondaryCardContainer";
import FreeCardContainer from "../../components/LandingPageComponents/FreeCardContainer";
import MiniCardContainer from "../../components/LandingPageComponents/MiniCardContainer/MiniCardContainer";
import BrowseLink from "../../components/LandingPageComponents/BrowseLink/BrowseLink";
import Header from "../../components/header";
import SubNavbar from "../../components/SubNavbar";
import CarouselMain from "../../components/CarouselMain";

const LandingPage = () => {
  const landingPageData = useSelector((state) => state.landingPageData);
  const saleData = landingPageData.slice(0, 5);
  const recentlyUpdatedData = landingPageData.slice(5, 10);
  const mostPopularData = landingPageData.slice(10, 15); // to be changed
  const newToStoreData = landingPageData.slice(10, 15);
  const secondaryCardData = Data; // to be changed

  return (
    <>
      <Header />
      <SubNavbar />
      <div className={styles.main}>
        <div className={styles.landing_container}>
          <div className={styles.main_container}>
            <CarouselMain />
            <div className={styles.mainCardContainer}>
              <div className={styles.data_cont}>
                <MainCardContainer data={saleData} />
              </div>
            </div>

            <div className={styles.secondaryCardContainer}>
              <SecondaryCardContainer
                data={[secondaryCardData[6], secondaryCardData[14]]}
              />
            </div>

            <div className={styles.freeCardContainer}>
              <FreeCardContainer />
            </div>

            <div className={styles.minicard}>
              <div className={styles.miniCardContainer}>
                <MiniCardContainer data={saleData} heading="New Releases" />
              </div>

              <div className={styles.miniCardContainer}>
                <MiniCardContainer
                  data={newToStoreData}
                  heading="Top Sellers"
                />
              </div>

              <div className={styles.miniCardContainer}>
                <MiniCardContainer
                  data={mostPopularData}
                  heading="Coming Soon"
                />
              </div>
            </div>

            <div className={styles.secondaryCardContainer}>
              <SecondaryCardContainer
                data={[secondaryCardData[2], secondaryCardData[3]]}
              />
            </div>

            <div className={styles.mainCardContainer}>
              <div className={styles.data_cont}>
                <MainCardContainer data={recentlyUpdatedData} />
              </div>
            </div>

            <div className={styles.mainCardContainer}>
              <div className={styles.data_cont}>
                <MainCardContainer data={newToStoreData} />
              </div>
            </div>

            <BrowseLink />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
