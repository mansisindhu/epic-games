import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import styles from "./top-category-slider.module.css";

const TopCategorySlider = ({ text }) => {
  return (
    <div className={styles.top}>
      <p className={styles.heading}>{text}</p>
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
