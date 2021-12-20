import { ImWindows8 } from "react-icons/im";
import { FaApple } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./paymentCard.module.css";
import PriceComponent from "../../PriceComponent";
import { addToWishlist } from "../../../store/actions";
import PaymentPage from "../../../pages/PaymentPage";
import Checkout from "../../Checkout";

const PaymentCard = (props) => {
  const {
    logo,
    developer,
    price,
    publisher,
    releaseDate,
    platform,
    id,
    image,
    title,
  } = props;

  const user = useSelector((state) => state.user);
  const wishlist = user.wishlist;
  const orders = user.orders;

  const [isWishlisted, setWishlistedStatus] = useState(false);
  const [isOrdered, setOrderedStatus] = useState(false);

  useEffect(() => {
    if (wishlist?.includes(id)) {
      setWishlistedStatus(true);
    }

    if (orders?.includes(id)) {
      setOrderedStatus(true);
    }
  }, [user.orders]);

  const dispatch = useDispatch();
  const history = useHistory();

  const wishlistGame = () => {
    if (!user.displayName) {
      history.push("/signup");
      return;
    }
    dispatch(addToWishlist(id));
    setWishlistedStatus(true);
  };

  const [isModalOpen, setModalState] = useState(false);

  const closeModal = () => {
    if (!user.displayName) {
      history.push("/signup");
      return;
    }
    setModalState((prev) => !prev);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [isModalOpen]);

  const [thankyouModal, setThankyouModal] = useState(false);

  const handleModal = () => {
    setThankyouModal((prev) => !prev);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.setAttribute("class", "overflow-hidden");
    } else {
      document.body.removeAttribute("class", "overflow-hidden");
    }
  }, [thankyouModal]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.upper}>
          <div className={styles.basegame}>Base Game</div>

          <div className={styles.price}>
            <PriceComponent price={price} />
          </div>
        </div>

        <div className={styles.buttons}>
          {isOrdered ? (
            <button className={styles.in_library_btn}>
              <img src="/icons/Library.svg" alt="" />
              <p>IN LIBRARY</p>
            </button>
          ) : (
            <>
              <button onClick={closeModal} className={styles.buy_btn}>
                BUY NOW
              </button>
              {isWishlisted ? (
                <button className={styles.wishlist_btn}>
                  <img src="/icons/Already_in_Wishlist.svg" alt="logo" />
                  <p>ADDED TO WISHLIST</p>
                </button>
              ) : (
                <button onClick={wishlistGame} className={styles.wishlist_btn}>
                  <img src="/icons/Add_to_Wishlist.svg" alt="logo" />
                  <p>ADD TO WISHLIST</p>
                </button>
              )}
            </>
          )}
        </div>

        <div className={styles.game_info}>
          <div className={styles.game_details}>
            <p className={styles.details_title}>Developer</p>
            <div className={styles.title}>
              <p>{developer}</p>
            </div>
          </div>

          <div className={styles.game_details}>
            <p className={styles.details_title}>Publisher</p>
            <div className={styles.title}>
              <p>{publisher}</p>
            </div>
          </div>

          <div className={styles.game_details}>
            <p className={styles.details_title}>Release Date</p>
            <div className={styles.title}>
              <p>{releaseDate}</p>
            </div>
          </div>

          <div className={styles.game_details}>
            <p className={styles.details_title}>Platform</p>
            <div className={styles.title}>
              {platform.map((el, i) => {
                if (el === "Windows") {
                  return <ImWindows8 className={styles.iconW} key={i} />;
                }
                if (el === "Mac") {
                  return <FaApple className={styles.iconA} key={i} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen ? (
        <div className={styles.modal_overlay}>
          <div className={styles.modal_container}>
            {loading ? (
              <div className={styles.loading}>
                <img src="/icons/Epic_Games_Dark.svg" alt="" />
                <p>Loading your order...</p>
              </div>
            ) : (
              <PaymentPage
                handleModal={handleModal}
                developer={developer}
                image={image}
                price={price}
                title={title}
                id={id}
                closeModal={closeModal}
              />
            )}
          </div>
        </div>
      ) : null}
      {thankyouModal ? (
        <Checkout handleModal={handleModal} title={title} id={id} />
      ) : null}
    </>
  );
};

export default PaymentCard;
