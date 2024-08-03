
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



function updateCurrentTime(){

    // Get date
    let currDate = new Date()

// Weekday
    let wd = currDate.getDay()


// Month, day
    let month = currDate.getMonth()
    let d = currDate.getDate()
    let y = currDate.getFullYear()




    // Time-related (Hours and minutes)
    let h = currDate.getHours()
    let m = currDate.getMinutes()
    let s = currDate.getSeconds()

    var date = document.getElementById('currentDay').innerHTML = `Today is ${weekdays[wd]}, ${months[month]} ${d}, ${y}. ${h}:${m}:${s.toString().padStart(2,"0")}`

}

updateCurrentTime()
setInterval(updateCurrentTime, 1000)





// weekday.innerHTML = weekdays[wd]