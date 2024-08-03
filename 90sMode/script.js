
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


// Get date
let currDate = new Date()

// Weekday
let wd = currDate.getDay()


// Month, day
let month = currDate.getMonth()
let d = currDate.getDay()
let y = currDate.getFullYear()

// Time-related (Hours and minutes)
let h = currDate.getHours()
let m = currDate.getMinutes()



var date = document.getElementById('currentDay').innerHTML = `Today is ${weekdays[wd]}, ${months[month]} ${d}, ${y}. ${h}:${m}`

// weekday.innerHTML = weekdays[wd]