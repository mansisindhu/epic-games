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
              <AccordionDetails></AccordionDetails>
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
              <AccordionDetails></AccordionDetails>
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
              <AccordionDetails></AccordionDetails>
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
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </ThemeProvider>
        </div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default FilterModal;
