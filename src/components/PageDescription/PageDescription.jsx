import { Box,  useTheme } from "@mui/material";

export default function PageDescription({ title, description }) {
  const theme = useTheme();
  return (
    <Box>
      <h2 style={{ color: theme.palette.primary.main }}>{title}</h2>
      <p style={{ color: theme.palette.text.secondary, margin: "0 0 20px 0" }}>
        {description}
      </p>
    </Box>
  );
}
