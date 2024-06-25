import { Paper } from "@mui/material";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import SidebarEvents from "./SidebarEvent";
const SidebarCalendar = ({ currentEvents }) => {
  return (
    <Paper
      sx={{
        flexBasis: "20%",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: 2,
      }}
    >
      <h2 style={{ color: "#1976d2" }}>
        <EventAvailableOutlinedIcon />{" "}
        <span> All Events ({currentEvents.length}) </span>
      </h2>
      <ul>
        {currentEvents.map((event) => (
          <SidebarEvents key={event.id} event={event} />
        ))}
      </ul>
    </Paper>
  );
};

export default SidebarCalendar;
