import "./mobilePaymentsModal.css";
import React from "react";
import { useState, useContext } from "react";
import { PaymentContext } from "../../contexts/PaymentContext";

export const MobilePaymentModal = () => {
  const { handleOpen } = useContext(PaymentContext);
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(true);
  };
  return (
    <div>
      <div className="main-item">
        <div className="first-one">
          <h3>checkout</h3>
          <i className="fas fa-times"></i>
        </div>
        <hr style={{ marginTop: "10px" }} />
        <div className="main-item-second-one">
          <h4>order summary</h4>
          <div className="main-item-second-one-first">
            <img
              id="img-main-src"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Battlefield_2042_cover_art.jpg/220px-Battlefield_2042_cover_art.jpg"
              alt="Battlefeild42"
            />
            <span>
              <h2 style={{ display: "inline-block", color: "black" }}>
                Battlefield™ 2042
              </h2>
              <p>Electronic Arts</p>
            </span>
          </div>
          <div className="main-item-second-one-second">
            <div className="first-text-second">
              <p>List Price</p>
              <p style={{ textDecoration: "line-through" }}>₹2,999.00</p>
            </div>
            <div className="first-text-second">
              <p>Discount</p>
              <p style={{ color: "red" }}>-₹1,019.66</p>
            </div>

            <div className="first-text-second">
              <p>Price</p>
              <p>₹2,999.00</p>
            </div>
            <div className="first-text-second">
              <p>VAT included if applicable</p>
            </div>
            <hr />
            <div className="first-text-second third-item">
              <p>Total</p>
              <p>₹1,229.34</p>
            </div>
          </div>
          <div className="fourth-item">
            <h2>OTHER PAYMENT METHODS </h2>
            <div className="first-fourth">
              <input
                type="radio"
                name="Credit"
                id="credit-card"
                placeholder="Credit Card"
              />
              <img src="icons/creditCardOriginal.svg" alt="" />
              <h2
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  color: "black",
                }}
              >
                Credit Card
              </h2>
              <div style={toggle ? { display: "block" } : { display: "none" }}>
                <div id="topDetails">
                  <div style={{ minWidth: "200px" }}>
                    <p>Card Details</p>
                  </div>
                  <div className="imageBox_credit">
                    <img
                      src="icons/Credit CardsPayment Page Asset.svg"
                      alt=""
                    />
                    <img src="icons/visa.svg" alt="" />
                    <img src="icons/elopay.svg" alt="" />
                    <img src="icons/maestro.svg" alt="" />
                  </div>
                </div>

                <div className="cardNumber">
                  <input type="text" placeholder="Card Number" />
                </div>

                <div className="twilite">
                  <input type="text" placeholder="Expiry Date" />
                  <input type="text" placeholder="CVV" />
                </div>

                <div className="info">
                  <p>Saved credit cards are authorized for future purchases.</p>
                </div>

                <div className="finalCheck">
                  <input type="checkbox" />
                  <small>
                    Do not save my credit card details.{" "}
                    <small>Learn more</small>
                  </small>
                </div>
              </div>
            </div>

            <div className="sec-fourth">
              <input
                type="radio"
                name="Credit"
                id="credit-card"
                placeholder="Credit Card"
              />
              <img src="icons/paypal.svg" alt="" />
              <h2
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  color: "black",
                }}
              >
                Paypal
              </h2>
            </div>
          </div>
          <div className="fifth-item">
            <h1>Developer Communications</h1>
            <div className="first-item-inside">
              <input type="checkbox" />
              <p>
                <span>
                  Click here to share your email with{" "}
                  <strong>Electronic Arts</strong>.{" "}
                  <strong>Electronic Arts</strong> will use your email address
                  in accordance with its <a href=""> privacy policy</a>, so we
                  encourage you to read it.
                </span>
              </p>
            </div>
          </div>
        </div>
        <p id="need-help">
          Need Help? <a href="">Contact Us</a>
        </p>
        <div className="button">
          <button id="buy-now">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};
