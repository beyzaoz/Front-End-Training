//BMI CALCULATOR START
const heightS = document.getElementById("heightSize");
const kilog = document.getElementById("kilogram");
const resultNum = document.getElementById("resultNumber");
const result = document.getElementById("resultReview");
const triangle = document.getElementById("triangle");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
})



function bmicalc() {
    const heightCm = Number(heightS.value);
    const weight = Number(kilog.value);

    if (!heightCm || !weight) {
        alert("Please enter value!");
        return;
    }

    const heightM = heightCm / 100;
    let bmiresult = weight / (heightM * heightM);

    if (bmiresult < 18.5) {
        result.innerText = "Underweight";
    } else if (bmiresult < 25) {
        result.innerText = "Normal";
    } else if (bmiresult < 30) {
        result.innerText = "Overweight";
    } else if (bmiresult < 35) {
        result.innerText = "Obese";
    } else {
        result.innerText = "Extremely Obese";
    }

    bmiresult = Number(bmiresult.toFixed(2));
    resultNum.innerText = bmiresult;

    moveTriangle(bmiresult);
}


document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        bmicalc();
    }
});

function moveTriangle(bmi) {
    const triangle = document.getElementById("triangle");

    // 1. BMI değerini 15 ile 40 arasında sınırla
    let safeBMI = Math.max(15, Math.min(40, bmi));

    // 2. BMI'yı 0-100 arasına normalleştir
    let rawPercent = ((safeBMI - 15) / (40 - 15)) * 100;

    // 3. 0-100 aralığını 10-90 arasına sıkıştır
    // Formül: (Değer * Hareket_Alanı / 100) + Başlangıç_Noktası
    // Hareket alanı 10'dan 90'a gittiği için 80 birimdir.
    let finalPosition = (rawPercent * 78 / 100) + 10;

    triangle.style.left = finalPosition + "%";
}
//BMI CALCULATOR END



//Mobil Hamburger style
 document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".navLinks");

  hamburger.onclick = () => {
    navLinks.classList.toggle("active");
  };
});