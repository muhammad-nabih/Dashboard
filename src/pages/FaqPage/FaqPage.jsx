import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqData from "./faqData";
import { Box } from "@mui/material";

export default function FaqPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      {faqData.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {item.summary}
            </Typography>
            {item.secondaryText && (
              <Typography sx={{ color: "text.secondary" }}>
                {item.secondaryText}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
