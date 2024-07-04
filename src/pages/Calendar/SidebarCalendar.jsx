import { List, Paper, Stack, Typography } from "@mui/material";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import SidebarEvents from "./SidebarEvent";

const SidebarCalendar = ({ currentEvents }) => {
  return (
    <Paper
      sx={{
        flexGrow: 1,
        padding: "10px",
        minWidth: "fit-content",
        gap: 2,
      }}
    >
      <Stack direction="row">
        <Typography
          sx={{ display: "flex", alignItems: "center", gap: "3px" }}
          variant="h6"
          fontSize={{ xs: ".6rem", sm: ".9rem", md: "1.5rem" }}
        >
          <EventAvailableOutlinedIcon />
          All Events [ {currentEvents.length} ]
        </Typography>
      </Stack>

      <List>
        {currentEvents.map((event) => (
          <SidebarEvents key={event.id} event={event} />
        ))}
      </List>
    </Paper>
  );
};

export default SidebarCalendar;
