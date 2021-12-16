import BrowseLink from "../../components/LandingPageComponents/BrowseLink/BrowseLink";
import MainCardContainer from "../../components/LandingPageComponents/MainCardContainer/MainCardContainer";
import Data from "../../Data.json";
import CardData from "../../CardData.json";
import SecondaryCardContainer from "../../components/LandingPageComponents/SecondaryCardContainer";

import styles from "./landingPage.module.css";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const LandingPage = () => {
  const sale = Data;
  const SecondaryCardData = CardData;

  return (
    <>
      <div className={styles.main}>
        <div className={styles.landing_container}>
          {/* Main Card Container Section  */}
          <div className={styles.mainCardContainer}>
            <div className={styles.heading_div}>
              <div className={styles.title}>
                <p className={styles.heading}>Games on Sale</p>
                <div className={styles.icon}>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>

              <div className={styles.arrowIcon_div}>
                <div className={styles.arrowicon}>
                  <MdKeyboardArrowLeft />
                </div>

                <div className={styles.arrowicon}>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>

            <div className={styles.data_cont}>
              <MainCardContainer data={sale} />
            </div>
          </div>

          {/* Secondary Card Container Section  */}

          <div className={styles.secondaryCardContainer}>
            <SecondaryCardContainer
              data={[SecondaryCardData[0], SecondaryCardData[1]]}
            />
          </div>

          <div className={styles.mainCardContainer}>
            <div className={styles.heading_div}>
              <div className={styles.title}>
                <p className={styles.heading}>Games on Sale</p>
                <div className={styles.icon}>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>

              <div className={styles.arrowIcon_div}>
                <div className={styles.arrowicon}>
                  <MdKeyboardArrowLeft />
                </div>

                <div className={styles.arrowicon}>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>

            <div className={styles.data_cont}>
              <MainCardContainer data={sale} />
            </div>
          </div>

          <div className={styles.secondaryCardContainer}>
            <SecondaryCardContainer
              data={[SecondaryCardData[2], SecondaryCardData[3]]}
            />
          </div>

          <div className={styles.mainCardContainer}>
            <div className={styles.heading_div}>
              <div className={styles.title}>
                <p className={styles.heading}>Games on Sale</p>
                <div className={styles.icon}>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>

              <div className={styles.arrowIcon_div}>
                <div className={styles.arrowicon}>
                  <MdKeyboardArrowLeft />
                </div>

                <div className={styles.arrowicon}>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>

            <div className={styles.data_cont}>
              <MainCardContainer data={sale} />
            </div>
          </div>
          <div className={styles.secondaryCardContainer}>
            <SecondaryCardContainer
              data={[SecondaryCardData[4], SecondaryCardData[5]]}
            />
          </div>

          <div className={styles.mainCardContainer}>
            <div className={styles.heading_div}>
              <div className={styles.title}>
                <p className={styles.heading}>Games on Sale</p>
                <div className={styles.icon}>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>

              <div className={styles.arrowIcon_div}>
                <div className={styles.arrowicon}>
                  <MdKeyboardArrowLeft />
                </div>

                <div className={styles.arrowicon}>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>

            <div className={styles.data_cont}>
              <MainCardContainer data={sale} />
            </div>
          </div>
          <BrowseLink />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
