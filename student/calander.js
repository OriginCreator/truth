// const calendarBody = document.querySelector(".calendar-body");
// const currentMonthYear = document.querySelector("#current-month-year");
// const prevMonthBtn = document.querySelector("#prev-month");
// const nextMonthBtn = document.querySelector("#next-month");
const total = document.querySelector(".container")

let currentDate = new Date();
// let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
  // calendarBody.innerHTML = "";
  for(let currentMonth=0;currentMonth<12;currentMonth++){
  
    const calander = document.createElement("div");
    calander.classList.add("calendar");
    
    const cont= document.createElement("div");
    cont.classList.add("calendar-header");
    
    const currentMonthYear=document.createElement("p");
    currentMonthYear.setAttribute("id","current-month-year");
    
    const calendarBody = document.createElement("div");
    calendarBody.classList.add("calendar-body")

  currentMonthYear.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
  cont.appendChild(currentMonthYear);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("calendar-day");
    calendarBody.appendChild(emptyDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("calendar-day");
    if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
      dayElement.classList.add("today");
    }
    dayElement.textContent = i;
    calendarBody.appendChild(dayElement);
  }
  calander.appendChild(cont);
  calander.appendChild(calendarBody)
  total.appendChild(calander);
}
}
function getMonthName(month) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[month];
}

// prevMonthBtn.addEventListener("click", () => {
//   currentMonth--;
//   if (currentMonth < 0) {
//     currentMonth = 11;
//     currentYear--;
//   }
//   renderCalendar();
// });

// nextMonthBtn.addEventListener("click", () => {
//   currentMonth++;
//   if (currentMonth > 11) {
//     currentMonth = 0;
//     currentYear++;
//   }
//   renderCalendar();
// });
renderCalendar();



