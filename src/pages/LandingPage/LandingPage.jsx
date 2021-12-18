import Data from "../../Data.json";
import styles from "./landingPage.module.css";

import MainCardContainer from "../../components/LandingPageComponents/MainCardContainer/MainCardContainer";

import SecondaryCardContainer from "../../components/LandingPageComponents/SecondaryCardContainer";

import FreeCardContainer from "../../components/LandingPageComponents/FreeCardContainer";

import MiniCardContainer from "../../components/LandingPageComponents/MiniCardContainer/MiniCardContainer";

import BrowseLink from "../../components/LandingPageComponents/BrowseLink/BrowseLink";

import Header from "../../components/header";
import SubNavbar from "../../components/SubNavbar";

const LandingPage = () => {
  const sale = Data;
  const secondaryCardData = Data;
  const miniCardData = Data;

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.landing_container}>
          <SubNavbar />
          <div className={styles.main_container}>
            <div className={styles.mainCardContainer}>
              <div className={styles.data_cont}>
                <MainCardContainer data={sale} />
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
                <MiniCardContainer data={miniCardData} heading="New Releases" />
              </div>

              <div className={styles.miniCardContainer}>
                <MiniCardContainer data={miniCardData} heading="Top Sellers" />
              </div>

              <div className={styles.miniCardContainer}>
                <MiniCardContainer data={miniCardData} heading="Coming Soon" />
              </div>
            </div>

            <div className={styles.secondaryCardContainer}>
              <SecondaryCardContainer
                data={[secondaryCardData[2], secondaryCardData[3]]}
              />
            </div>

            <div className={styles.secondaryCardContainer}>
              <SecondaryCardContainer
                data={[secondaryCardData[4], secondaryCardData[5]]}
              />
            </div>
            <BrowseLink />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
