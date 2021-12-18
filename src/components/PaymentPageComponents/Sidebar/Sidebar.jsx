import styles from "./sidebar.module.css";
import { MdOutlineClose } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Sidebar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            <p className={styles.sidebar_title}>Order Summary</p>
            <div className={styles.closeIcon}>
              <MdOutlineClose />
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.image_div}>
              <img
                src="https://cdn1.epicgames.com/spt-assets/1d1ceda7b1ba4e7893a36a1166ac3e41/download-dark-deity-offer-1p2y4.jpg?h=1280&resize=1&w=960"
                alt="banner"
              />
            </div>
            <div>
              <p className={styles.game_title}>The Dark and Deity</p>
              <p className={styles.game_developer}>Toplitz Production GmbH</p>
            </div>

            <div className={styles.price_info}>
              <div className={styles.price}>
                <p>List Price</p> <p>₹2999.00</p>
              </div>
              <div className={styles.price}>
                <p>Price</p> <p>₹2999.00</p>
              </div>

              <div className={styles.price}>
                <p>Discount</p> <p> -29%</p>
              </div>

              <p className={styles.vat}>VAT included if applicable</p>
              <div className={styles.price}>
                <p>Total</p> <p>₹2999.00</p>
              </div>
            </div>

            <div class="row">
              <div>
                <div class="right-inner-addon input-container">
                  {/* <i class="fa fa-info-circle"></i> */}
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
                  Click here to share your email with Toplitz Productions GmbH.
                  Toplitz Productions GmbH will use your email address in
                  accordance with its privacy policy, so we encourge you to read
                  it.
                </p>
              </div>
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
            <button className={styles.btn}>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
