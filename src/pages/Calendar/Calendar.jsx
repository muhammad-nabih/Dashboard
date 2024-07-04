import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import { Paper, Stack } from "@mui/material";
import SidebarCalendar from "./SidebarCalendar";
import RenderEventContent from "./RenderEventContent";
import { useTheme } from "@emotion/react";

const Calendar = () => {
  const theme = useTheme();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  const renderDayHeader = (arg) => {
    const dateStr = arg.date.toISOString().split("T")[0]; // Extract YYYY-MM-DD
    return {
      html: `<a href="/day/${dateStr}" onclick="event.preventDefault();" style="text-decoration: none; color: ${theme.palette.primary.main}">${arg.text}</a>`,
    };
  };

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "10px",
      }}
      flexDirection={{ sm: "column", md: "row" }}
    >
      <SidebarCalendar
        weekendsVisible={Boolean(weekendsVisible)}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      />

      <Paper
        sx={{
          padding: "5px",
          flexGrow: 1,
          fontSize: { xs: ".5rem", sm: ".8rem", md: ".9rem" },
        }}
        aria-label="Full Calendar"
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={RenderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
          dayHeaderContent={renderDayHeader}
        />
      </Paper>
    </Stack>
  );
};

export default Calendar;
