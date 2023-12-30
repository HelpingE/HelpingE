function addToggleEvent(elementH1, elementP) {
  elementH1.addEventListener("click", () => {
    elementP.style.display = "block";
    console.log("Clicked!");
  });
}

const introductionH1 = document.getElementById("introduction");
const introductionP = document.getElementById("introductionP");
addToggleEvent(introductionH1, introductionP);

const motivationH1 = document.getElementById("motivation");
const motivationP = document.getElementById("motivationP");
addToggleEvent(motivationH1, motivationP);

const gratitudeH1 = document.getElementById("gratitude");
const gratitudeP = document.getElementById("gratitudeP");
addToggleEvent(gratitudeH1, gratitudeP);

const scheduleH1 = document.getElementById("schedule");
const scheduleP = document.getElementById("scheduleP");
addToggleEvent(scheduleH1, scheduleP);

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("body *");

  elements.forEach(function (element) {
    element.classList.add("fade-in");
  });
});
