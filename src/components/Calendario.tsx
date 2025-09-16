import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";

const Calendario = () => {
  return (
    <div className="p-1 bg-white shadow-md rounded-xl">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locales={[ptBrLocale]}
        locale="pt-br"
        fixedWeekCount={false}   
        events={[
          { title: "Futsal", date: "2025-09-18" },
          { title: "Bate-papo (elas no campo)", date: "2025-09-19" },
          { title: "Workshop - nutrição para atletas", date: "2025-09-20" },
        ]}
        height="auto"
        eventContent={(arg) => (
          <div className="bg-purple-800 text-white text-xs rounded-md px-2 py-1">
            {arg.event.title}
          </div>
        )}
      />
    </div>
  );
};

export default Calendario;
