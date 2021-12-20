import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../store/actions";
import { useHistory } from "react-router-dom";

import PriceComponent from "../../PriceComponent";
import styles from "./game-card.module.css";

const GameCard = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const wishlist = user.wishlist;
  const [inWishlist, setStatus] = useState(false);

  useEffect(() => {
    if (wishlist?.includes(props.id)) {
      setStatus(true);
    }
  }, [user.displayName]);

  const history = useHistory();
  const add = (e) => {
    e.preventDefault();
    if (!wishlist) {
      history.push("/signup");
    }
    setStatus(true);

    dispatch(addToWishlist(props.id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.image_div}>
        <img src={props.image} alt={props.title} />
        <div onClick={add} className={styles.icon}>
          {!inWishlist ? (
            <img src="/icons/Add_to_Wishlist.svg" alt="icon" />
          ) : (
            <img src="/icons/Already_in_Wishlist.svg" alt="icon" />
          )}
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.tagline_cont}>
          <p className={styles.tagline}>{props.tagline}</p>
        </div>
      </div>
      <div className={styles.price}>
        <PriceComponent price={props.price} />
      </div>
    </div>
  );
};

export default GameCard;
