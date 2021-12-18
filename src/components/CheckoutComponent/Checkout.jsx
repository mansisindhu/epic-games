import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../CustomTheme";

import { MdOutlineClose } from "react-icons/md";

import styles from "./checkout.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Checkout = ({ title }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen}>Place Order</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style} className={styles.modal}>
              <div
                closeAfterTransition
                onClick={handleClose}
                className={styles.closeIcon}
              >
                <MdOutlineClose />
              </div>
              <div className={styles.upper}>
                <img src="./icons/Epic_games_store_logo.svg" alt="logo" />
                <p>THANK YOU FOR BUYING</p>
                <h4 className={styles.title}>Battlefield 2042</h4>
                <h4 className={styles.title}>{title}</h4>
              </div>

              <div className={styles.lower}>
                <p className={styles.heading}>Got Epic Games?</p>
                <p className={styles.subheading}>
                  If you already have the Epic Games Launcher use the “Open”
                  button otherwise download the Epic Games Launcher to play.
                </p>

                <button className={styles.btn}>Open Epic Games Launcher</button>
                <button className={styles.btn}>
                  Download Epic Games Launcher
                </button>
              </div>
            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default Checkout;
