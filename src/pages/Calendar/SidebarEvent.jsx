import { Divider, ListItem } from "@mui/material";
import { formatDate } from "@fullcalendar/core"; // استخدام الطريقة المباشرة لـ formatDate بدون النمط المحدد
import { useTheme } from "@emotion/react";

const SidebarEvents = ({ event }) => {
  const { palette } = useTheme();

  return (
    <>
      <ListItem
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "5px",
          marginBottom: "5px",
          borderRadius: "5px",
        }}
      >
        <b
          style={{
            color: palette.text.secondary,
            fontSize: "13px",
          }}
        >
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <b
          style={{
            padding: "0 5px",
            color: palette.primary.main,
            textTransform: "capitalize",
            fontSize: "14px",
          }}
        >
          {event.title}
        </b>
      </ListItem>
      <Divider component="li" />
    </>
  );
};

export default SidebarEvents;
