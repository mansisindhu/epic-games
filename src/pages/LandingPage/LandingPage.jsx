import BrowseLink from "../../components/LandingPageComponents/BrowseLink/BrowseLink";
import MainCardContainer from "../../components/LandingPageComponents/MainCardContainer/MainCardContainer";
import Data from "../../Data.json";
import CardData from "../../CardData.json";
import SecondaryCardContainer from "../../components/LandingPageComponents/SecondaryCardContainer";

import styles from "./landingPage.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const LandingPage = () => {
  const sale = Data;
  const SecondaryCardData = CardData;

  return (
    <>
      <div className={styles.landing_container}>
        <div className={styles.heading_div}>
          <h4 className={styles.heading}>Games on Sale</h4>
          <div className={styles.icon}>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>

        <div className={styles.mainCardContainer}>
          <MainCardContainer data={sale} />
        </div>
        <SecondaryCardContainer
          data={[SecondaryCardData[0], SecondaryCardData[1]]}
        />
        <SecondaryCardContainer
          data={[SecondaryCardData[2], SecondaryCardData[3]]}
        />
        <SecondaryCardContainer
          data={[SecondaryCardData[4], SecondaryCardData[5]]}
        />
        <BrowseLink />
      </div>
    </>
  );
};

export default LandingPage;
