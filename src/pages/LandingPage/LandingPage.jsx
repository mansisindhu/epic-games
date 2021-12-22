import { useSelector } from "react-redux";

import styles from "./landingPage.module.css";
import MainCardContainer from "../../components/LandingPageComponents/MainCardContainer/MainCardContainer";
import SecondaryCardContainer from "../../components/LandingPageComponents/SecondaryCardContainer";
import FreeCardContainer from "../../components/LandingPageComponents/FreeCardContainer";
import MiniCardContainer from "../../components/LandingPageComponents/MiniCardContainer/MiniCardContainer";
import BrowseLink from "../../components/LandingPageComponents/BrowseLink/BrowseLink";
import Header from "../../components/header";
import SubNavbar from "../../components/SubNavbar";
import CarouselMain from "../../components/LandingPageComponents/CarouselMain";
import Footer from "../../components/Footer";
import LoadingPage from "../../components/LoadingPage";

const LandingPage = () => {
  const landingPageData = useSelector((state) => state.landingPageData);
  const saleData = landingPageData.slice(0, 5);
  const recentlyUpdatedData = landingPageData.slice(5, 10);
  const mostPopularData = landingPageData.slice(10, 15);
  const newToStoreData = landingPageData.slice(15, 20);

  const secondaryCardData1 = landingPageData.filter((el) => {
    if (el.title === "Corruption 2029" || el.title === "Anno 1701") {
      return el;
    }
    return false;
  });

  const secondaryCardData2 = landingPageData.filter((el) => {
    if (el.title === "Tribes of Midgard" || el.title === "One Hand Clapping") {
      return el;
    }
    return false;
  });

  return (
    <>
      <Header />
      <SubNavbar />
      <div className={styles.main}>
        <div className={styles.landing_container}>
          <div className={styles.main_container}>
            {!landingPageData.length ? (
              <LoadingPage />
            ) : (
              <>
                <CarouselMain />
                <div className={styles.mainCardContainer}>
                  <div className={styles.data_cont}>
                    <MainCardContainer data={saleData} title="Game On Sale" />
                  </div>
                </div>

                <div className={styles.secondaryCardContainer}>
                  <SecondaryCardContainer data={secondaryCardData1} />
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
                      heading="Holiday Sale"
                    />
                  </div>
                </div>

                <div className={styles.secondaryCardContainer}>
                  <SecondaryCardContainer data={secondaryCardData2} />
                </div>

                <div className={styles.mainCardContainer}>
                  <div className={styles.data_cont}>
                    <MainCardContainer
                      data={recentlyUpdatedData}
                      title="Recently Updated"
                    />
                  </div>
                </div>

                <div className={styles.mainCardContainer}>
                  <div className={styles.data_cont}>
                    <MainCardContainer
                      data={newToStoreData}
                      title="Holiday Sale Spotlight"
                    />
                  </div>
                </div>
                <BrowseLink />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
