
let myName = document.getElementById("myName");
let elementName = prompt("Enter your name: ");
let clock = document.getElementById("myClock");

//Get the name with pop-ups.
console.log(elementName);
myName.innerText = elementName;


//set the days 0-6 / 0->Sunday
const days=["Sunday", "Monday", "Tuesday", "Wednesday", " Thursday","Friday","Saturday"]

function clockTime() {

    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const day = days[now.getDay()];

    clock.innerText = 
    hour.toString().padStart(2,"0") + ":"+ 
    min.toString().padStart(2,"0")+ ":"+ 
    sec.toString().padStart(2,"0")+ " " +
    day;
}

setInterval(clockTime,1000);//Tekrarlayan islem icin
clockTime(); //Sayfa ilk acildiginda hemen cagirilmasi icin



