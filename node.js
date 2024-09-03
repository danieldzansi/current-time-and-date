function updateDateTime() {
  const now = new Date();
  
  // Current Date and Time
  document.getElementById('Current Date AND Time').textContent = now.toLocaleString();

  //timezone
 document.getElementById('timezone').textContent =Intl.DateTimeFormat();

 // daylightsaving time
 document.getElementById('dst').textContent = now.isDstobserver() ? "yes" : "no";

  // day of the week
  const daysOfWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
  document.getElementById("day of the week").textContent = daysOfWeek[now.getDay()];

  //week number
  const weekNumber =getweekNumber(now);
  document.getElementById("week number").textContent = weeknumber;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById("month").textContent = months[now.getMonth()];

  // year
  document.getElementById("year").textContent = now.getFullYear();
  
  // hour
  document.getElementById("hour").textContent = now.getHours().toString().padStart(2, '0');
  
  // minute
  document.getElementById("minutes").textContent = now.getMinutes().toString().padStart(2, '0');
  
  // second
  document.getElementById("seconds").textContent = now.getSeconds().toString().padStart(2, '0');
  
  // milliseconds
  document.getElementById("millisecond").textContent = now.getMilliseconds().toString().padStart(3, '0');
  
  //unix timestamp
  document.getElementById("uts").textContent =  Math.floor(now.getTime() / 1000);
  }

function getweekNumber(d) {
  d=new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

  //check if daylight saving time is available
  Date.prototype.isDstobserved= function(){
    const january = new Date(this.getFullYear(), 0, 1).getTimezoneoffset();
    const july = new Date(this.getFullYear(), 0, 1).getTimezoneoffset();
    return Math.max(january, july)!==this.getTimezoneOffset();
  }


// Update time every second
setInterval(updateDateTime, 1000);


// Initial update
updateDateTime();

//Button click event
document.getElementById('btn').addEventListener('click', function() {
  alert('Date and time updated!');
  updateDateTime();
});
