
var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


// Get date
var dateData = new Date()


// Get time and date
var currentHour = dateData.getHours()
var currentMin = dateData.getMinutes()
var currentDay = dateData.getDay()


document.getElementById('currentWkDay').textContent = weekdays[currentDay]


document.getElementById('currentTime').textContent = `${currentHour}:${currentMin}`