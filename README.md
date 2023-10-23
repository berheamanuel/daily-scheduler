# Workday Scheduler

## Description
This application is a schedule for workday hours (between 9 AM and 5pm) that allows users to input a task in a time slot. Time slots in the past are listed in gray, the current time slot is listed in red, and future time slots are listed in green. The color indicator makes it easy for users to visualise their progress and to prioritize accordingly.

## User Story
* AS AN employee with a busy schedule
* I WANT to add important events to a daily planner
* SO THAT I can manage my time effectively

## Acceptance Criteria
* GIVEN I am using a daily planner to create a schedule
* WHEN I open the planner
* THEN the current day is displayed at the top of the calendar
* WHEN I scroll down
* THEN I am presented with time blocks for standard business hours of 9am to 5pm
* WHEN I view the time blocks for that day
* THEN each time block is color-coded to indicate whether it is in the past, present, or future
* WHEN I click into a time block
* THEN I can enter an event
* WHEN I click the save button for that time block
* THEN the text for that event is saved in local storage
* WHEN I refresh the page
* THEN the saved events persist

## Deployed Application Link
*

## Screenshot

![alt text](assets/images/screenshot.png)

## Technology Used
* HTML
* CSS
* JavaScript
* BootStrap
* jQuery
* dayjs
* FontAwesome
* Google Fonts

## References
* https://day.js.org/docs/en/display/
* https://getbootstrap.com/docs/5.3/components/
* https://developer.mozilla.org/en-US/docs/Web

## License
MIT License
