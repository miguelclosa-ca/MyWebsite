
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


// Get date
let currDate = new Date()

// Weekday, Hours, Minutes
let wd = currDate.getDay()
let h = currDate.getHours()
let m = currDate.getMinutes()

// Month, day
let month = currDate.getMonth()
let d = currDate.getDay()
let y = currDate.getFullYear()

var date = document.getElementById('currentDay').innerHTML = `Today is ${weekdays[wd]}, ${months[month]} ${d}, ${y}`

// weekday.innerHTML = weekdays[wd]