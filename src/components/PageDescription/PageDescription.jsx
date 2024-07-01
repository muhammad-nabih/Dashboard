import { Box, useTheme } from "@mui/material";

export default function PageDescription({ title, description }) {
  const theme = useTheme();
  return (
    <Box>
      <h2
        style={{
          color: theme.palette.primary.main,
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: theme.palette.text.secondary,
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom:"5px",
          textTransform: "capitalize",
        }}
      >
        {description}
      </p>
    </Box>
  );
}
