import { Box } from "@mui/material";

const RenderEventContent = (eventInfo) => {
  return (
    <>
      <Box sx={{ color: "#1976d2", fontSize: "15px", padding: "0 5px" }}>
        {eventInfo.timeText}
      </Box>
      <Box>{eventInfo.event.title}</Box>
    </>
  );
};

export default RenderEventContent;
