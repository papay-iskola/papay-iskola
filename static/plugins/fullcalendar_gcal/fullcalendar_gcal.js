// This code is taken from the demo code at fullcalendar.js

 $(document).ready(function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar( calendarEl, {
    initialView: 'listMonth',
    googleCalendarApiKey: 'AIzaSyBs_iHXnsg_-srQoaqm__SxO3v2o_LD1Zw',
    events: {
      googleCalendarId: 'ht3jlfaac5lfd6263ulfh4tql8@group.calendar.google.com'
    },
    themeSystem: 'bootstrap',
    locale: 'hu',
    firstDay: 1
  });
  calendar.render();
});
