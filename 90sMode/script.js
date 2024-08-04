
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



function updateCurrentTime(){
    /**
     * This function will pull the date and return the current date, and time.
     * @type {Date}
     */

    // Get the date
    let currDate = new Date()

    // Get the current weekday. Since this is a number, iterate through the array above to display the day of the week.
    let wd = currDate.getDay()


    // Month, Day, Year
    let month = currDate.getMonth()
    let d = currDate.getDate()
    let y = currDate.getFullYear()


    // Time-related (Hours and minutes)
    let h = currDate.getHours()
    let m = currDate.getMinutes()
    let s = currDate.getSeconds()


    // For something with the id "currentDay", change the contents to the current date.
    var date = document.getElementById('currentDay').innerHTML = `Today is ${weekdays[wd]}, ${months[month]} ${d}, ${y}. ${h}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`

} // function updateCurrentTime()

updateCurrentTime()

// run the same function every 1000ms
setInterval(updateCurrentTime, 1000)





// weekday.innerHTML = weekdays[wd]