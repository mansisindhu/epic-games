import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider } from "@mui/material/styles";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { BiCheck } from "react-icons/bi";

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
              return false;
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
              return false;
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
              return false;
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
              <AccordionDetails style={{ padding: "8px 6px 16px" }}>
                <div className={styles.checkboxes}>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      value="1"
                      type="radio"
                      name="price"
                      onChange={sorting}
                    />
                    <div className={styles.label}>
                      <span>Free</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      value="750"
                      type="radio"
                      name="price"
                      onChange={sorting}
                      className={styles.input}
                    />
                    <div className={styles.label}>
                      <span>Under Rs. 750.00</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      value="1500"
                      type="radio"
                      name="price"
                      onChange={sorting}
                    />
                    <div className={styles.label}>
                      <span>Under Rs. 1,500.00</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      value="2500"
                      type="radio"
                      name="price"
                      onChange={sorting}
                    />
                    <div className={styles.label}>
                      <span>Under Rs. 2,500.00</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      value="1099"
                      type="radio"
                      name="price"
                      onChange={sorting}
                    />
                    <div className={styles.label}>
                      <span>Rs. 1,099.00 and below</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
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
              <AccordionDetails style={{ padding: "8px 6px 16px" }}>
                <div className={styles.checkboxes}>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Action"
                    />
                    <div className={styles.label}>
                      <span>Action</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Adventure"
                    />
                    <div className={styles.label}>
                      <span>Adventure</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Strategy"
                    />
                    <div className={styles.label}>
                      <span>Strategy</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Shooter"
                    />
                    <div className={styles.label}>
                      <span>Shooter</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Puzzle"
                    />
                    <div className={styles.label}>
                      <span>Puzzle</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Indie"
                    />
                    <div className={styles.label}>
                      <span>Indie</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Casual"
                    />
                    <div className={styles.label}>
                      <span>Casual</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Survival"
                    />
                    <div className={styles.label}>
                      <span>Survival</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      id="genre"
                      onChange={sorting}
                      value="Horror"
                    />
                    <div className={styles.label}>
                      <span>Horror</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
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
              <AccordionDetails style={{ padding: "8px 6px 16px" }}>
                <div className={styles.checkboxes}>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      name="features"
                      id="features"
                      onChange={sorting}
                      value="single-player"
                    />
                    <div className={styles.label}>
                      <span>Single Player</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      name="features"
                      id="features"
                      onChange={sorting}
                      value="controller-support"
                    />
                    <div className={styles.label}>
                      <span>Controller Support</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      name="features"
                      id="features"
                      onChange={sorting}
                      value="multiplayer"
                    />
                    <div className={styles.label}>
                      <span>Multiplayer</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      name="features"
                      id="features"
                      onChange={sorting}
                      value="co-op"
                    />
                    <div className={styles.label}>
                      <span>Co Op</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      type="checkbox"
                      name="features"
                      id="features"
                      onChange={sorting}
                      value="competitive"
                    />
                    <div className={styles.label}>
                      <span>Competitive</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
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
              <AccordionDetails style={{ padding: "8px 6px 16px" }}>
                <div className={styles.checkboxes}>
                  <div className={styles.checkbox}>
                    <input
                      className={styles.input}
                      onChange={sorting}
                      value="Windows"
                      type="checkbox"
                      id="platforms"
                    />
                    <div className={styles.label}>
                      <span>Windows</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      onChange={sorting}
                      value="Mac"
                      type="checkbox"
                      id="platforms"
                      className={styles.input}
                    />
                    <div className={styles.label}>
                      <span>Mac Os</span>
                      <span className={styles.check}>
                        <BiCheck />
                      </span>
                    </div>
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
