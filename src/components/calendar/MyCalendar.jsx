import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale"; // Opcional: Soporte para español
import { Card, Button } from "antd";

// Configurar localización con date-fns
const locales = { es };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // Semana empieza en lunes
  getDay,
  locales,
});

const MyCalendar = () => {
  // eslint-disable-next-line no-unused-vars
  const [events, setEvents] = useState([
    {
      title: "Reunión con equipo",
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 2)), // Evento de 2 horas
      allDay: false,
    },
  ]);

  const addEvent = () => {
    setEvents([
      ...events,
      {
        title: "Nuevo evento",
        start: new Date(),
        end: new Date(new Date().setHours(new Date().getHours() + 0.5)), // Evento de 2 horas
        allDay: false,
      },
    ]);
  }

  return (
    <Card title="Calendario" style={{ margin: 20 }}>
      <Button onClick={addEvent} type="primary" style={{ marginBottom
      : 20 }}>Agregar evento</Button>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </Card>
  );
};

export default MyCalendar;
