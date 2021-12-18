import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import styles from "./top-category-slider.module.css";

const TopCategorySlider = ({ text }) => {
  return (
    <div className={styles.top}>
      <div className={styles.heading_cont}>
        <p className={styles.heading}>{text}</p>
        <MdOutlineKeyboardArrowRight className={styles.arrow} />
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <RiArrowLeftSLine />
        </div>
        <div className={styles.icon}>
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
};

export default TopCategorySlider;
