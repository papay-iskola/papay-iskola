// This code is taken from the demo code at fullcalendar.js

 $(document).ready(function() {
  var calendarEl = document.getElementById('calendar');
  if (calendarEl !== null) {
    var calendar = new FullCalendar.Calendar( calendarEl, {
      initialView: 'dayGridMonth',
      googleCalendarApiKey: 'AIzaSyBs_iHXnsg_-srQoaqm__SxO3v2o_LD1Zw',
      eventSources: [
        {
          googleCalendarId: 'mkse3rucalq83d1c3hmijufr1o@group.calendar.google.com',
          className: 'iskola-event'
        },
        {
          googleCalendarId: '2qi0h9h72954mbg2mt92etq2fc@group.calendar.google.com',
          className: 'alapitvany-event'
        }
      ],
      themeSystem: 'bootstrap',
      locale: 'hu',
      firstDay: 1
    });
    calendar.render();
};
});
