const daysP = document.getElementById("days");
const hoursP = document.getElementById("hours");
const minsP = document.getElementById("mins");
const secondsP = document.getElementById("seconds");



const newYears = "01/01/2021 ";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalsec = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalsec / (60*60 )/ 24);
    const hours = Math.floor(totalsec / (60*60)) % 24;
    const mins = Math.floor(totalsec / 60) % 60;
    const seconds = Math.floor(totalsec) % 60;

    daysP.innerHTML = days;
    hoursP.innerHTML = doublezero(hours);
    minsP.innerHTML = doublezero(mins);
    secondsP.innerHTML = doublezero(seconds);
}

function doublezero(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);
