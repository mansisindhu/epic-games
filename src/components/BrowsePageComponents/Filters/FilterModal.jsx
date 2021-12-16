import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider } from "@mui/material/styles";
import { BiSearch } from "react-icons/bi";

import theme from "../../CustomTheme";
import styles from "./filters.module.css";

const FilterModal = () => {
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
                    <input id="price" type="radio" name="price" />
                    <label htmlFor="price">Free</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="radio" name="price" />
                    <label htmlFor="price">Under Rs. 750.00</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="radio" name="price" />
                    <label htmlFor="price">Under Rs. 1,500.00</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="radio" name="price" />
                    <label htmlFor="price">Under Rs. 2,500.00</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="radio" name="price" />
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
                    <input id="genre" type="checkbox" name="genre" />
                    <label htmlFor="genre">Action</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="genre" />
                    <label htmlFor="genre">Adventure</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="genre" />
                    <label htmlFor="genre">Strategy</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="genre" />
                    <label htmlFor="genre">Shooter</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="genre" />
                    <label htmlFor="genre">Puzzle</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="genre" />
                    <label htmlFor="genre">Indie</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="genre" />
                    <label htmlFor="genre">Casual</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="genre" />
                    <label htmlFor="genre">Survival</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="genre" />
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
                    <input id="features" type="checkbox" name="features" />
                    <label htmlFor="features">Single Player</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="features" />
                    <label htmlFor="features">Controller Support</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="features" />
                    <label htmlFor="features">Mutiplayer</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="features" />
                    <label htmlFor="features">Co-op</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="features" />
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
                    <input id="platform" type="checkbox" name="platform" />
                    <label htmlFor="platform">Windows</label>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" name="platform" />
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
