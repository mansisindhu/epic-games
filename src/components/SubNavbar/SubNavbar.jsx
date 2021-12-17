import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import styles from "./sub-navbar.module.css";

const SubNavbar = () => {
  const [accoridanText, setAccoridanText] = useState("Discover");

  const [isAccordianOpen, setAccordianState] = useState(false);
  return (
    <>
      <div className={styles.main}>
        <BiSearch className={styles.icon} />
        <div
          onClick={() => setAccordianState((prev) => !prev)}
          className={styles.accordion}
        >
          <p className={styles.accordion_text}>{accoridanText}</p>
          {isAccordianOpen ? (
            <IoIosArrowUp className={styles.icon_a} />
          ) : (
            <IoIosArrowDown className={styles.icon_a} />
          )}
        </div>
        <MdOutlineCheckCircleOutline className={styles.icon} />

        {isAccordianOpen ? (
          <div className={styles.accordion_modal}>
            <div
              onClick={() => {
                setAccoridanText("Discover");
                setAccordianState(false);
              }}
              className={styles.option}
            >
              Discover
            </div>
            <div className={styles.line}></div>
            <div
              onClick={() => {
                setAccoridanText("Browse");
                setAccordianState(false);
              }}
              className={styles.option}
            >
              Browse
            </div>
            <div className={styles.line}></div>
            <div
              onClick={() => {
                setAccoridanText("News");
                setAccordianState(false);
              }}
              className={styles.option}
            >
              News
            </div>
          </div>
        ) : null}
      </div>

      <div className={styles.main_desktop}>
        <div className={styles.left}>
          <div className={styles.search_box}>
            <BiSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className={styles.option_desktop}>Discover</div>
          <div className={styles.option_desktop}>Browse</div>
          <div className={styles.option_desktop}>News</div>
        </div>
        <div className={styles.wishlist}>Wishlist</div>
      </div>
    </>
  );
};

export default SubNavbar;
