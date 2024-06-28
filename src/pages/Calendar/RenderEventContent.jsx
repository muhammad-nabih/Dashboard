import { Box } from "@mui/material";

const RenderEventContent = (eventInfo) => {
  return (
    <>
      <Box>{eventInfo.timeText}</Box>
      <Box>{eventInfo.event.title}</Box>
    </>
  );
};

export default RenderEventContent;
