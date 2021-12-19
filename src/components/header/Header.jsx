import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styles from "./header.module.css";
import { logoutUser } from "../../store/actions";

const Header = () => {
  const user = useSelector((state) => state.user);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const handleClose = () => {
    setToggle(false);
  };

  const [logoutModal, setLogoutModal] = useState(false);

  const handleCloseLogoutModal = () => {
    setLogoutModal((prev) => !prev);
  };

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <div id="header" className={styles.header__main__div}>
      <div className={styles.header__first}>
        <Link to="/">
          <div className={styles.header__logo}>
            <img
              style={{ height: "36px" }}
              src="/icons/Epic_Games_white.svg"
              alt="epic"
            />
          </div>
        </Link>

        <div className={styles.header__navigations}>
          <div className={styles.header__navigations__div}>
            <Link to="/">
              <p className={styles.onhover__color__white}>STORE</p>
            </Link>
          </div>
          <div className={styles.header__navigations__div}>
            <p className={styles.onhover__color__white}>FAQ</p>
          </div>
          <div className={styles.header__navigations__div}>
            <p className={styles.onhover__color__white}>HELP</p>
          </div>
          <div className={styles.header__navigations__div}>
            <p className={styles.onhover__color__white}>UNREAL ENGINE</p>
          </div>
        </div>
      </div>

      <div className={styles.header__second}>
        <div
          className={`${styles.padding__left} ${styles.icon} ${styles.padding__right} ${styles.display__none} ${styles.onhover__color__white}`}
        >
          <img src="/icons/header_global.svg" alt="global" />
        </div>

        {!user.displayName ? (
          <Link to="/signup">
            <div
              className={`${styles.header__second__user} ${styles.padding__left} ${styles.padding__right} ${styles.display__none}}`}
            >
              <div
                className={`${styles.padding__left} ${styles.padding__right} ${styles.icon} ${styles.onhover__color__white} ${styles.display__none}`}
              >
                <img src="/icons/header_user_offline.svg" alt="offline user" />
              </div>
              <div
                id={styles.header__rewrite}
                className={`${styles.padding__right} ${styles.display__none}`}
              >
                <p className={styles.onhover__color__white}>SIGN IN</p>
              </div>
            </div>
          </Link>
        ) : (
          <>
            <div
              onClick={handleCloseLogoutModal}
              style={{ position: "relative" }}
              className={`${styles.header__second__user} ${styles.padding__left} ${styles.padding__right} ${styles.display__none}}`}
            >
              <div
                className={`${styles.padding__left} ${styles.padding__right} ${styles.icon} ${styles.onhover__color__white} ${styles.display__none}`}
              >
                <img
                  style={{ height: "26px" }}
                  src="/icons/Sign_In_Online.svg"
                  alt="online user"
                />
              </div>
              <div
                id={styles.header__rewrite}
                className={`${styles.padding__right} ${styles.display__none}`}
              >
                <p
                  style={{ fontSize: "14px" }}
                  className={styles.onhover__color__white}
                >
                  {user.displayName}
                </p>
              </div>
            </div>
            {logoutModal ? (
              <div className={styles.logout_modal}>
                <Link onClick={handleCloseLogoutModal} to="/wishlist">
                  Wishlist
                </Link>
                <p
                  onClick={() => {
                    handleCloseLogoutModal();
                    logout();
                  }}
                >
                  Sign out
                </p>
              </div>
            ) : null}
          </>
        )}

        <div
          className={`${styles.padding__left} ${styles.display__none} ${styles.download_btn}`}
        >
          <button
            className={`${styles.header__button} ${styles.onhover__color__blue}`}
          >
            DOWNLOAD
          </button>
        </div>

        <div
          onClick={handleToggle}
          className={
            toggle ? `${styles.toggle} ${styles.active}` : `${styles.toggle}`
          }
          style={{ backgroundColor: toggle ? "#2A2A2A" : "#0078F2" }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          id="side-menu"
          className={styles.sidemenu}
          style={{ width: toggle ? "86%" : "" }}
        >
          {/* <div className={styles.closebtn' onClick={handleClose}>&times;</div> */}
          <div className={styles.mainMenu} id="main__menu">
            <div className={styles.sidebar__info}>
              <p onClick={handleClose}>STORE</p>
              <p onClick={handleClose}>FAQ</p>
              <p onClick={handleClose}>HELP</p>
              <p onClick={handleClose}>UNREAL ENGINE</p>
            </div>

            <div>
              {user.displayName ? (
                <div className={styles.slider__botton}>
                  <div className={styles.slider__botton__first}>
                    <img
                      src="/icons/header_user_offline.svg"
                      alt="offline user"
                    />
                    <p className={styles.onhover__color__white}>SIGN IN</p>
                  </div>
                  <div className={styles.slider__botton__second}>
                    <img src="/icons/header_global.svg" alt="global" />
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className={`${styles.header__second__user} ${styles.padding__left} ${styles.padding__right} ${styles.display__none}}`}
                  >
                    <div
                      className={`${styles.padding__left} ${styles.padding__right} ${styles.icon} ${styles.onhover__color__white} ${styles.display__none}`}
                    >
                      <img src="/icons/Sign_In_Online.svg" alt="online user" />
                    </div>
                    <div
                      id={styles.header__rewrite}
                      className={`${styles.padding__right} ${styles.display__none}`}
                    >
                      <p className={styles.onhover__color__white}>
                        {user.displayName}
                      </p>
                    </div>
                  </div>
                </>
              )}

              <div>
                <button
                  id={styles.btn__revoke}
                  className={`${styles.header__button} ${styles.onhover__color__blue}`}
                >
                  DOWNLOAD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
