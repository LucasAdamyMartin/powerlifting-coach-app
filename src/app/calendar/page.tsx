'use client'

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function CustomCalendar() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
        <div className='w-[100%] justify-center items-center flex'>
        <h1 className='text-3xl'>Jhon Jhon</h1>
        </div>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
        initialView="timeGridWeek"
        locale="fr"  // Définit la locale en français pour le format des dates
        allDaySlot={false}
        slotMinTime="06:00:00"
        scrollTime="06:00:00"
        height="auto"
        headerToolbar={{
          left: 'prev,next today',
          right: 'timeGridDay,timeGridWeek',
        }}
        events={[
          {
            title: 'Squat',
            start: '2025-04-18T10:00:00',
            end: '2025-04-18T11:00:00',
          },
          {
            title: 'Déficit Deadlift',
            start: '2025-04-19T07:30:00',
            end: '2025-04-19T09:00:00',
          },
        ]}
        eventContent={(arg) => (
          <div className="bg-blue-500 text-white px-2 py-1 rounded text-sm shadow-sm">
            {arg.event.title}
          </div>
        )}
        slotLabelClassNames="text-xs text-gray-500"
        dayHeaderClassNames="bg-gray-100 text-gray-700 font-medium"
        dayCellClassNames="border border-gray-200"
        dayHeaderFormat={{ weekday: 'short', day: '2-digit', month: '2-digit' }}
        firstDay={1}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false
        }}
      />
    </div>
  )
}
