import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

import theme from "../../components/CustomTheme";
import styles from "./signup.module.css";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="/icons/Epic_games_white.svg" alt="" />
      </div>
      <div className={styles.form}>
        <p>Sign Up</p>
        <div className={styles.names}>
          <ThemeProvider theme={theme}>
            <TextField
              required
              style={{ width: "100%" }}
              label="First Name"
              defaultValue=""
            />
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <TextField
              required
              style={{ width: "100%" }}
              label="Last Name"
              defaultValue="Hello World"
            />
          </ThemeProvider>
        </div>
        <ThemeProvider theme={theme}>
          <TextField
            required
            style={{ width: "100%" }}
            label="Display Name"
            defaultValue=""
          />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <TextField
            disabled
            required
            style={{ width: "100%" }}
            label="First Name"
            defaultValue="mansisindhu@gmail.com"
          />
        </ThemeProvider>
        <div className={styles.checkboxes}>
          <div className={styles.checkbox}>
            <Checkbox
              sx={{
                padding: 0,

                color: "gray",
                "& .MuiSvgIcon-root": { fontSize: 28 },
              }}
            />
            <p>
              I would like to receive news, surveys and special offers from Epic
              Games.
            </p>
          </div>

          <div className={styles.checkbox}>
            <Checkbox
              sx={{
                padding: 0,
                color: "gray",
                "& .MuiSvgIcon-root": { fontSize: 28 },
              }}
            />
            <p>
              I have read and agree to the{" "}
              <span className={styles.underline}>terms of service</span>
            </p>
          </div>
        </div>
        <div>
          <button className={styles.button}>CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
