dayjs.locale('fr');

const DATES = document.querySelectorAll(".planning span");
const DATES_ADDS = [0,6,7,13,14,20,21,27];
const WEEK_DAYS = document.querySelectorAll(".planning th:not(:first-child");
const DATE_ONE = dayjs().date(20).month(4);

DATES.forEach((date, index) => {
    date.textContent = DATE_ONE.add(DATES_ADDS[index],"day").format("DD/MM");
})

WEEK_DAYS.forEach((day , index) => {
    day.textContent = DATE_ONE.add(index, "day").format("dddd");
});

// const WEEK_DAYS_IDS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
// WEEK_DAYS_IDS.forEach((id , index) => {
//     const DAY_ELEMENT = document.getElementById(id);
//     DAY_ELEMENT.textContent = dateOne.add(index, "day").format("dddd");
// });


//? Without the library: 

let startDate = new Date (2024,4,20);

for(let i= 0; i<4; i++){
    DATES[i*2].textContent = `${String(startDate.getDate()).padStart(2,0)}/${String(startDate.getMonth()+1).padStart(2,0)}`;
    startDate.setDate(startDate.getDate() + 6);
    DATES[i*2+1].textContent = `${String(startDate.getDate()).padStart(2,0)}/${String(startDate.getMonth()+1).padStart(2,0)}`;
    startDate.setDate(startDate.getDate() + 1);
}

// let dateOne = new Date (2024,4,20);  (i=0)
// let dateTwo = new Date (2024,4,26); +6 (i=1)

// let dateThree = new Date (2024,4,27); +1 (i=2)
// let dateFour = new Date (2024,5,2); +6 (i=3)

// let dateFive = new Date (2024,5,3); +1 (i=4)
// let dateSix = new Date (2024,5,9); +6 (i=5)

// let dateSeven = new Date (2024,5,10); +1 (i=6)
// let dateEight = new Date (2024,5,16); +6 (i=7)

// DATE1.textContent = `${String(dateOne.getDate()).padStart(2,0)}/${String(dateOne.getMonth()+1).padStart(2,0)}`;
// DATE2.textContent = `${String(dateTwo.getDate()).padStart(2,0)}/${String(dateTwo.getMonth()+1).padStart(2,0)}`;
// DATE3.textContent = `${String(dateThree.getDate()).padStart(2,0)}/${String(dateThree.getMonth()+1).padStart(2,0)}`;
// DATE4.textContent = `${String(dateFour.getDate()).padStart(2,0)}/${String(dateFour.getMonth()+1).padStart(2,0)}`;
// DATE5.textContent = `${String(dateFive.getDate()).padStart(2,0)}/${String(dateFive.getMonth()+1).padStart(2,0)}`;
// DATE6.textContent = `${String(dateSix.getDate()).padStart(2,0)}/${String(dateSix.getMonth()+1).padStart(2,0)}`;
// DATE7.textContent = `${String(dateSeven.getDate()).padStart(2,0)}/${String(dateSeven.getMonth()+1).padStart(2,0)}`;
// DATE8.textContent = `${String(dateEight.getDate()).padStart(2,0)}/${String(dateEight.getMonth()+1).padStart(2,0)}`;

//? Without the library but with a Loop:

// const dateIds = ["20/05", "26/05", "27/05", "02/06", "03/06", "09/06", "10/06", "16/06"];
// const dateValues = [
//   [2024, 4, 20],
//   [2024, 4, 26],
//   [2024, 4, 27],
//   [2024, 5, 2],
//   [2024, 5, 3],
//   [2024, 5, 9],
//   [2024, 5, 10],
//   [2024, 5, 16]
// ];

// dateIds.forEach((id, index) => {
//   const dateElement = document.getElementById(id);
//   const [year, month, day] = dateValues[index];
//   const date = new Date(year, month, day);
//   dateElement.textContent = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`;
// });


//? With the library Set Method: 

// DATE1.innerText = dayjs().date(20).month(4).format("DD/MM");
// DATE2.innerText = dayjs().date(26).month(4).format("DD/MM");
// DATE3.innerText = dayjs().date(27).month(4).format("DD/MM");
// DATE4.innerText = dayjs().date(2).month(5).format("DD/MM");
// DATE5.innerText = dayjs().date(3).month(5).format("DD/MM");
// DATE6.innerText = dayjs().date(9).month(5).format("DD/MM");
// DATE7.innerText = dayjs().date(10).month(5).format("DD/MM");
// DATE8.innerText = dayjs().date(16).month(5).format("DD/MM");


