import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../CustomTheme";
import styles from "./accordion.module.css";

const Accordion = (props) => {
  const { image1, image2, image3, image4, image5, image6 } = props;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>More Images</Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionDetails}>
            <img src={image1} />
            <div className={styles.grid}>
              <img src={image2} />
              <img src={image3} />
            </div>
            <img src={image4} />
            <div className={styles.grid}>
              <img src={image5} />
              <img src={image6} />
            </div>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
};

export default Accordion;
