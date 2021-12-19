import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import theme from "../../components/CustomTheme";
import styles from "./signup.module.css";
import { postUser } from "../../store/actions";

const SignupPage = () => {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState({
    displayName: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleInput = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        email: user.email,
        lastName: user.lastName,
        firstName: user.firstName,
      };
    });
  }, [user]);

  const [displayNameAvailabilty, setDisplayNameAvailabilty] = useState({
    message: "",
    status: false,
    loading: false,
  });

  const [error, setError] = useState(false);

  const checkDisplayNameAvailability = async () => {
    setDisplayNameAvailabilty((prev) => ({ ...prev, loading: true }));
    try {
      const { data: displayNameData } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/display-name-availability`,
        {
          displayName: data.displayName,
        },
        {
          withCredentials: true,
        }
      );

      setDisplayNameAvailabilty({ ...displayNameData, loading: false });
      setError(!displayNameData.status);
    } catch (err) {
      setDisplayNameAvailabilty((prev) => ({ ...prev, loading: false }));
    }
  };

  const debounced = useDebouncedCallback(checkDisplayNameAvailability, 500);

  // Debouncing for displayName input
  const displayNameInputHandler = (e) => {
    const { value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        displayName: value,
      };
    });
    if (value.length > 0) debounced();
  };

  const dispatch = useDispatch();
  let history = useHistory();
  const postUserData = () => {
    dispatch(postUser(data));
    history.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="/icons/Epic_Games_white.svg" alt="logo" />
      </div>
      <div className={styles.form}>
        <p>Sign Up</p>
        <div className={styles.names}>
          <ThemeProvider theme={theme}>
            <TextField
              required
              style={{ width: "100%" }}
              label="First Name"
              value={data.firstName}
              onChange={handleInput}
              name="firstName"
              defaultValue={user.firstName}
            />
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <TextField
              required
              style={{ width: "100%" }}
              label="Last Name"
              defaultValue={user.lastName}
              name="lastName"
              value={data.lastName}
              onChange={handleInput}
            />
          </ThemeProvider>
        </div>
        <ThemeProvider theme={theme}>
          <TextField
            error={error}
            required
            style={{ width: "100%" }}
            label="Display Name"
            value={data.displayName}
            name="displayName"
            onChange={displayNameInputHandler}
            helperText={displayNameAvailabilty.message}
            autoComplete={false}
          />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <TextField
            disabled
            required
            style={{ width: "100%" }}
            label="email"
            value={data.email}
            defaultValue={user.email}
            name="email"
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
          <button
            onClick={displayNameAvailabilty.status ? postUserData : null}
            style={!displayNameAvailabilty.status ? { opacity: "0.5" } : null}
            className={styles.button}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
