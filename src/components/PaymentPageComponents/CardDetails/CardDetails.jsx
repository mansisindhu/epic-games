import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

import styles from "./cardDetails.module.css";

const CardDetails = () => {
  return (
    <>
      <div className={styles.card_details}>
        <div className={styles.header}>
          <p className={styles.heading}>CARD DETAILS</p>
          <div className={styles.icons}>
            <img src="/icons/visaicon.svg" alt="visa" />
            <img src="/icons/mastericon.svg" alt="master" />
            <img src="/icons/eloicon.svg" alt="master" />
            <img src="/icons/jcbicon.svg" alt="master" />
          </div>
        </div>

        <TextField
          sx={{ mt: 3, width: "100%" }}
          id="outlined-basic"
          label="Card Number"
          variant="outlined"
        />

        <div className={styles.input_div}>
          <TextField
            sx={{ mt: 2, width: "100%" }}
            id="outlined-basic"
            label="Expiration"
            variant="outlined"
          />

          <TextField
            sx={{ mt: 2, width: "100%" }}
            id="outlined-basic"
            label="CVV"
            variant="outlined"
          />
        </div>
        <div className={styles.lower_text}>
          <p className={styles.text}>
            Saved credit cards are authorized for future purchases.
          </p>

          <div className={styles.checkbox_div}>
            <Checkbox sx={{ margin: "0px", padding: "0px" }} />
            <p className={styles.label}>
              Do not save my credit card.{" "}
              <span className={styles.underline_text}>Learn More</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
