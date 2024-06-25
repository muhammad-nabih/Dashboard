import { formatDate } from "../../../node_modules/@fullcalendar/core";
import { useTheme } from "@emotion/react";

const SidebarEvents = ({ event }) => {
  // @ts-ignore
  const { palette } = useTheme();

  return (
    <li
      key={event.id}
      style={{
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "3px 5px",
        marginBottom: "5px",
        borderRadius: "5px",
        backgroundColor: palette.mode === "dark" ? "white" : "#1a252f",
      }}
    >
      <b
        style={{
          color: palette.mode === "dark" ? "#1a252f" : "white",
          fontSize: "13px",
        }}
      >
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i
        style={{
          padding: "0 5px",
          color: "#818181",
          textTransform: "capitalize",
          fontSize: "12px",
        }}
      >
        {event.title}
      </i>
    </li>
  );
};

export default SidebarEvents;
