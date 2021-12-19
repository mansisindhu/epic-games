import React from "react";
import { useState, useContext } from "react";
import styles from "./paymentModal.module.css";
import { PaymentContext } from "../../contexts/PaymentContext";

export const PaymentModal = () => {
  const { handleOpen } = useContext(PaymentContext);
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(true);
  };

  return (
    <>
      <div className={styles.desktop}>
        <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <div className={styles.sectionOne}>
              <div className={styles.topBox}>
                <p>Checkout</p>
              </div>

              <div className={styles.others}>
                <p>OTHER PAYMENT METHODS</p>
              </div>

              <div className={styles.mainBox}>
                <div
                  className={
                    toggle
                      ? `${styles.creditBoxLarge}`
                      : `${styles.creditBoxSmall}`
                  }
                >
                  <div className={styles.display__flex}>
                    <input type="radio" onChange={handleChange} required />
                    <img src="icons/creditCardOriginal.svg" alt="credit card" />
                    <p>Credit Card</p>
                  </div>

                  <div
                    style={toggle ? { display: "block" } : { display: "none" }}
                  >
                    <div id={styles.topDetails}>
                      <div style={{ minWidth: "200px" }}>
                        <p>Card Details</p>
                      </div>
                      <div className={styles.imageBox_credit}>
                        <img
                          src="icons/Credit CardsPayment Page Asset.svg"
                          alt=""
                        />
                        <img src="icons/visa.svg" alt="" />
                        <img src="icons/elopay.svg" alt="" />
                        <img src="icons/maestro.svg" alt="" />
                      </div>
                    </div>

                    <div className={styles.cardNumber}>
                      <input type="text" placeholder="Card Number" />
                    </div>

                    <div className={styles.twilite}>
                      <input type="text" placeholder="Expiry Date" />
                      <input type="text" placeholder="CVV" />
                    </div>

                    <div className={styles.info}>
                      <p>
                        Saved credit cards are authorized for future purchases.
                      </p>
                    </div>

                    <div className={styles.finalCheck}>
                      <input type="checkbox" />
                      <small>
                        Do not save my credit card details.{" "}
                        <small>Learn more</small>
                      </small>
                    </div>
                  </div>
                </div>

                <div>
                  <input type="radio" disabled />
                  <img src="icons/paypal.svg" alt="paypal" />
                  <p>PayPal</p>
                </div>
              </div>
            </div>

            <div className={styles.sectionTwo}>
              <div className={styles.topSection}>
                <div className={styles.orderName}>
                  <p>Order Summary</p>

                  <div className={styles.titleCloseBtn}>
                    <button
                      onClick={() => {
                        handleOpen(false);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className={styles.imagebox__div}>
                  <img
                    src="https://cdn2.unrealengine.com/19br-keyart-egs-launcher-fc-1200x1600-thumb-alt-1200x1600-1499c260c3d4.jpg"
                    alt=""
                  />
                </div>

                <div>
                  <p className={styles.gameTitle}>Fortnite</p>

                  <p className={styles.gameOwner}>Toplitz Production GmbH</p>
                </div>

                <div className={styles.amount__div}>
                  <div className={styles.calc}>
                    <p>Price</p>
                    <p>4000.00</p>
                  </div>

                  <div className={styles.calc}>
                    <p>Discount</p>
                    <p className={styles.red}>-500.00</p>
                  </div>

                  <div className={styles.calc} id={styles.vat}>
                    <p>VAT included if applicable</p>
                  </div>

                  <hr />

                  <div className={styles.calc}>
                    <p>Total</p>
                    <p>3500.00</p>
                  </div>
                </div>

                <div className={styles.needHelp__div}>
                  <div className={styles.input__div}>
                    <input type="text" placeholder="Enter creator tag" />
                  </div>

                  <div>
                    <div className={styles.checkBox__div}>
                      <div>
                        <input type="checkbox" />
                      </div>
                      <div className={styles.description}>
                        <div>
                          Click here to share your email with{" "}
                          <span>
                            {" "}
                            Toplitz Productions GmbH. Toplitz Production GmbH{" "}
                          </span>{" "}
                          will use your email address in accordance with its{" "}
                          <span>privacy policy</span>
                          so, we encourage you to read it.
                        </div>
                      </div>
                    </div>

                    <div className={styles.needHelp}>
                      <p className={`${styles.needHelp__blue}`}>Need Help? </p>
                      <p className={`${styles.needHelp__grey}`}>Contact us</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.endDiv}>
                <div className={styles.agreement}>
                  By clicking "place order" below I represent that I am over 18
                  and an authorized user of this payment method and I agree to
                  the <span>End User Licence Agreement.</span>
                </div>
                <div>
                  <button>PLACE ORDER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
