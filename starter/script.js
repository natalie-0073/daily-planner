$(document).ready(function() {
    const now = dayjs();
    const todayDate = now.format('dddd, MMMM D, YYYY h:mm A');
    $('#currentDay').text( `${todayDate}`);
  });
  