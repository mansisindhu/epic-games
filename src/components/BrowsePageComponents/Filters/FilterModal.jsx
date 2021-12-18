import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider } from "@mui/material/styles";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import querystring from "querystring";

import theme from "../../CustomTheme";
import styles from "./filters.module.css";
import { filterData } from "../../../store/actions";

const FilterModal = () => {
  const dispatch = useDispatch();

  const [filtersObj, setObj] = useState({
    price: "",
    features: [],
    genre: [],
    platforms: [],
  });

  const sorting = (e) => {
    const { name, value, id, checked } = e.target;
    console.log({ name, value, id, checked });

    setObj((prev) => {
      if (name === "price") {
        return {
          ...prev,
          price: value,
        };
      }

      if (id === "features") {
        if (checked) {
          return {
            ...prev,
            features: [...prev.features, value],
          };
        } else {
          return {
            ...prev,
            features: prev.features.filter((el) => {
              if (el !== value) {
                return el;
              }
            }),
          };
        }
      }

      if (id === "genre") {
        if (checked) {
          return {
            ...prev,
            genre: [...prev.genre, value],
          };
        } else {
          return {
            ...prev,
            genre: prev.genre.filter((el) => {
              if (el !== value) {
                return el;
              }
            }),
          };
        }
      }

      if (id === "platforms") {
        if (checked) {
          return {
            ...prev,
            platforms: [...prev.platforms, value],
          };
        } else {
          return {
            ...prev,
            platforms: prev.platforms.filter((el) => {
              if (el !== value) {
                return el;
              }
            }),
          };
        }
      }
    });
  };

  useEffect(() => {
    const newObj = {
      price: filtersObj.price,
      platforms: filtersObj.platforms.join(","),
      features: filtersObj.features.join(","),
      genre: filtersObj.genre.join(","),
    };
    const query = new URLSearchParams(newObj).toString();
    dispatch(filterData(query));
  }, [filtersObj]);

  return (
    <>
      <div className={styles.filter_cont}>
        <p className={styles.heading}>Filters</p>
        <div className={styles.search_box}>
          <BiSearch />
          <input type="text" placeholder="Keywords" />
        </div>
        <div className={styles.line}></div>
        <div className={styles.filter}>
          <ThemeProvider theme={theme}>
            <Accordion
              sx={{
                background: "#121212",
                color: "#939393",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#939393" }} />}
              >
                <Typography
                  style={{
                    fontWeight: 600,
                    fontSize: "11px",
                    letterSpacing: "0.5px",
                  }}
                >
                  PRICE
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.checkboxes}>
                  <div className={styles.checkbox}>
                    <input
                      value="1"
                      type="radio"
                      name="price"
                      onChange={sorting}
                    />
                    <label htmlFor="price">Free</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      value="750"
                      type="radio"
                      name="price"
                      onChange={sorting}
                    />
                    <label htmlFor="price">Under Rs. 750.00</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      value="1500"
                      type="radio"
                      name="price"
                      onChange={sorting}
                    />
                    <label htmlFor="price">Under Rs. 1,500.00</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      value="2500"
                      type="radio"
                      name="price"
                      onChange={sorting}
                    />
                    <label htmlFor="price">Under Rs. 2,500.00</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      value="1099"
                      type="radio"
                      name="price"
                      onChange={sorting}
                    />
                    <label htmlFor="price">Rs. 1,099.00 and above</label>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </ThemeProvider>
        </div>
        <div className={styles.line}></div>
        <div className={styles.filter}>
          <ThemeProvider theme={theme}>
            <Accordion
              sx={{
                background: "#121212",
                color: "#939393",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#939393" }} />}
              >
                <Typography
                  style={{
                    fontWeight: 600,
                    fontSize: "11px",
                    letterSpacing: "0.5px",
                  }}
                >
                  GENRE
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.checkboxes}>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Action"
                    />
                    <label htmlFor="genre">Action</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Adventure"
                    />
                    <label htmlFor="genre">Adventure</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Strategy"
                    />
                    <label htmlFor="genre">Strategy</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Shooter"
                    />
                    <label htmlFor="genre">Shooter</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Puzzle"
                    />
                    <label htmlFor="genre">Puzzle</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Indie"
                    />
                    <label htmlFor="genre">Indie</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Casual"
                    />
                    <label htmlFor="genre">Casual</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Survival"
                    />
                    <label htmlFor="genre">Survival</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Horror"
                    />
                    <label htmlFor="genre">Horror</label>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </ThemeProvider>
        </div>
        <div className={styles.line}></div>

        <div className={styles.filter}>
          <ThemeProvider theme={theme}>
            <Accordion
              sx={{
                background: "#121212",
                color: "#939393",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#939393" }} />}
              >
                <Typography
                  style={{
                    fontWeight: 600,
                    fontSize: "11px",
                    letterSpacing: "0.5px",
                  }}
                >
                  FEATURES
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.checkboxes}>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="features"
                      id="features"
                      onChange={sorting}
                      value="single-player"
                    />
                    <label htmlFor="features">Single Player</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="features"
                      id="features"
                      onChange={sorting}
                      value="controller-support"
                    />
                    <label htmlFor="features">Controller Support</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="features"
                      id="features"
                      onChange={sorting}
                      value="multiplayer"
                    />
                    <label htmlFor="features">Mutiplayer</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="features"
                      id="features"
                      onChange={sorting}
                      value="co-op"
                    />
                    <label htmlFor="features">Co-op</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="features"
                      id="features"
                      onChange={sorting}
                      value="competitive"
                    />
                    <label htmlFor="features">Competitive</label>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </ThemeProvider>
        </div>
        <div className={styles.line}></div>

        <div className={styles.filter}>
          <ThemeProvider theme={theme}>
            <Accordion
              sx={{
                background: "#121212",
                color: "#939393",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#939393" }} />}
              >
                <Typography
                  style={{
                    fontWeight: 600,
                    fontSize: "11px",
                    letterSpacing: "0.5px",
                  }}
                >
                  PLATFORM
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.checkboxes}>
                  <div className={styles.checkbox}>
                    <input
                      onChange={sorting}
                      value="Windows"
                      type="checkbox"
                      id="platforms"
                    />
                    <label htmlFor="platform">Windows</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      onChange={sorting}
                      value="Mac"
                      type="checkbox"
                      id="platforms"
                    />
                    <label htmlFor="platform">Mac OS</label>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </ThemeProvider>
        </div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default FilterModal;
