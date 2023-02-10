

const month = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];

const first = "july 10 2017";

function countdown(){
    const firstDate = new Date(first);
    const currentDate = new Date();
    const currentMonthsarry = (currentDate.getTime() - firstDate.getTime()) / 2629746000;
    document.getElementById("months").innerHTML = parseInt(currentMonthsarry) + 1;
    document.getElementById("ordinal").innerHTML = nth(parseInt(currentMonthsarry));
    const monthsarryMonth = (currentDate.getDate() >= 10 ? currentDate.getMonth() + 1: currentDate.getMonth());
    const monthsarryDate = new Date(month[monthsarryMonth] + " 10 " + currentDate.getFullYear());
    const totalSeconds = (monthsarryDate.getTime() - currentDate.getTime()) / 1000;
    const days = totalSeconds / 86400;
    const hours = (days - parseInt(days))* 86400 / 3600;
    const minutes = (hours - parseInt(hours))* 3600 / 60;
    const seconds = (minutes - parseInt(minutes))* 60;

    document.getElementById("days").innerHTML = parseInt(days);
    document.getElementById("hours").innerHTML = parseInt(hours);
    document.getElementById("minutes").innerHTML = parseInt(minutes);
    document.getElementById("seconds").innerHTML = formatSeconds(parseInt(seconds));
    document.getElementById("day").innerHTML = (parseInt(days) < 2 ? "day" : "days");
    document.getElementById("hour").innerHTML = (parseInt(hours) < 2 ? "hour" : "hours");
    document.getElementById("minute").innerHTML = (parseInt(minutes) < 2 ? "minute" : "minutes");
    document.getElementById("second").innerHTML = formatSeconds(parseInt(seconds)) < 2 ? "second" : "seconds";

}

function formatSeconds(seconds){
    if(seconds < 10){
        return "0"+ seconds;
    }
    return seconds
}

function nth(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st Monthsary in";
      case 2:  return "nd Monthsary in";
      case 3:  return "rd Monthsary in";
      default: return "th Monthsary in";
    }
}

const dayToDay = new Date().getDate()

if(dayToDay === 10){
    document.getElementById("wave").className += "wave";
    document.getElementById("wave1").className += "wave";
    document.getElementById("pyro").className += "pyro"
    document.getElementById("happy").className += "happy";
    document.getElementById("monthsary").className += "monthsary"
    document.getElementById("yamko").className += "yamko";
    document.getElementById("happy").innerHTML = "Happy"
    document.getElementById("monthsary").innerHTML = "Monthsary"
    document.getElementById("yamko").innerHTML = "Yam ko"
    let cat = document.getElementById("cat").src = "./images/cat1.gif";
    let heart = document.getElementById("heart").src = "./images/hearts.png";
    let heart2 = document.getElementById("heart2").src = "./images/hearts.png";
    document.getElementById("you").src = "./images/you.jpeg";
    document.getElementById("me").src = "./images/me.jpg";
}else {
    setInterval(countdown, 1000);
}

let pos = -200;

function position(){
    if(pos < innerWidth - 40){
        document.getElementById('cat').style.right = (`${pos}px`);
        pos += 10;
    }else {
        pos = -200
    }
}
setInterval(position, 100)
