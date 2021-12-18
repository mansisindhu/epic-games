import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./sub-navbar.module.css";

const SubNavbar = () => {
  const [accoridanText, setAccoridanText] = useState("Discover");

  const [isAccordianOpen, setAccordianState] = useState(false);
  const user = useSelector((state) => state.user);

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
        <Link to="/wishlist">
          <MdOutlineCheckCircleOutline className={styles.icon} />
        </Link>

        {isAccordianOpen ? (
          <div className={styles.accordion_modal}>
            <Link to="/">
              <div
                onClick={() => {
                  setAccoridanText("Discover");
                  setAccordianState(false);
                }}
                className={styles.option}
              >
                Discover
              </div>
            </Link>
            <div className={styles.line}></div>
            <Link to="/browse">
              <div
                onClick={() => {
                  setAccoridanText("Browse");
                  setAccordianState(false);
                }}
                className={styles.option}
              >
                Browse
              </div>
            </Link>
            <div className={styles.line}></div>
            <Link to="/">
              <div
                onClick={() => {
                  setAccoridanText("Discover");
                  setAccordianState(false);
                }}
                className={styles.option}
              >
                News
              </div>
            </Link>
          </div>
        ) : null}
      </div>

      <div className={styles.main_desktop}>
        <div className={styles.left}>
          <div className={styles.search_box}>
            <BiSearch />
            <input type="text" placeholder="Search" />
          </div>
          <Link to="/">
            <div className={styles.option_desktop}>Discover</div>
          </Link>
          <Link to="/browse">
            <div className={styles.option_desktop}>Browse</div>
          </Link>
          <Link to="/">
            <div className={styles.option_desktop}>News</div>
          </Link>
        </div>
        {user.displayName ? (
          <Link to="/wishlist">
            <div className={styles.wishlist}>Wishlist</div>
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default SubNavbar;
