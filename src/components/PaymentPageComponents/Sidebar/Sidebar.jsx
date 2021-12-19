import styles from "./sidebar.module.css";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";

import Checkbox from "@mui/material/Checkbox";
import PaymentCard from "../PaymentCard";
import { addToOrders, removeFromWishlist } from "../../../store/actions";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Sidebar = (props) => {
  const { developer, price, id, image, title, closeModal, handleModal } = props;
  const discountedPrice =
    price.mainPrice - Math.floor(price.mainPrice * (price.discount / 100));

  const dispatch = useDispatch();

  const placeOrder = () => {
    dispatch(addToOrders(id));
    dispatch(removeFromWishlist(id));
    handleModal();
    closeModal();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            <p className={styles.sidebar_title}>Order Summary</p>
            <div onClick={closeModal} className={styles.closeIcon}>
              <MdOutlineClose />
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.image_div}>
              <img src={image} alt="banner" />
            </div>
            <div>
              <p className={styles.game_title}>{title}</p>
              <p className={styles.game_developer}>{developer}</p>
            </div>

            <div className={styles.price_info}>
              <div className={styles.price}>
                <p>List Price</p> <p>₹ {price.mainPrice}</p>
              </div>
              <div className={styles.price}>
                <p>Price</p> <p>₹ {discountedPrice}</p>
              </div>

              <div className={styles.price}>
                <p>Discount</p> <p> - {price.discount}%</p>
              </div>

              <p className={styles.vat}>VAT included if applicable</p>
              <div className={styles.price}>
                <p>Total</p> <p>₹ {discountedPrice}</p>
              </div>
            </div>

            <div class="row">
              <div>
                <div class="right-inner-addon input-container">
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter a creator tag"
                  />
                </div>
              </div>
            </div>

            <div className={styles.checkbox_div}>
              <Checkbox {...label} />

              <div>
                <p>
                  Click here to share your email with{" "}
                  <span className={styles.span}>{developer}</span>.
                  <span className={styles.span}> {developer}</span> will use
                  your email address in accordance with its privacy policy, so
                  we encourge you to read it.
                </p>
              </div>
            </div>

            <div className={styles.payment}>
              <PaymentCard />
            </div>

            <p className={styles.text}>
              Need Help? <span className={styles.contact}>Contact us</span>
            </p>
          </div>

          <div className={styles.place_order}>
            <p>
              By clicking “Place Order” below, I represent that I am over 18 and
              an authorized user of this payment method,and I agree to the{" "}
              <span className={styles.contact}>
                {" "}
                End User Licence Agreement
              </span>
            </p>
            <button onClick={placeOrder} className={styles.btn}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
