
var timeBlockElement = $('.time-block')
// date variable
var today = dayjs();

// using $(document).ready() method the function will run after the browser finalised rendering all elements in html
$(document).ready(function() {
  
  // event listener 
  $('.saveBtn').on('click', function () {
  // get task input
    var taskInputValue = $(this).siblings('.description').val();
  // get parent id
   var timeKey = $(this).parent().attr('id');
  // save to local storage
  localStorage.setItem(timeKey, taskInputValue);
  
  });
  
  // get current hour from dayjs()
  var currentHour = today.format('H');

  // loope over timeblocks
  $.each(timeBlockElement, function () {
    // get only number from the id
    var timeBlock = parseInt($(this).attr('id').split("hour-")[1]);

    // check if the event is past and add class past
    if (timeBlock < currentHour) {
      $(this).removeClass('present');
      $(this).removeClass('future');
      $(this).addClass('past'); 

      // check if the event is current and add class present
    } else if (timeBlock == currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
      // add class future
      
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }

  });

  // get any user input that was saved in localStorage 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  
  // displying curent date 
  $('#currentDay').text(today.format('dddd, MMMM DD'));

});
