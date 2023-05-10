const first_card = document.getElementById("first_card");
const second_card = document.getElementById("second_card");

first_card.addEventListener("click", () => {
  first_card.style.transform = "translateX(0%)";
  second_card.style.transform = "translateX(0)";
  // smooth transition
  first_card.style.transition = "all 0.5s ease-in-out";
  second_card.style.transition = "all 0.5s ease-in-out";
});

second_card.addEventListener("click", () => {
  first_card.style.transform = "translateX(-90%)";
  second_card.style.transform = "translateX(-90%)";
  first_card.style.transition = "all 0.5s ease-in-out";
  second_card.style.transition = "all 0.5s ease-in-out";
});

// swite cards by swipe 
first_card.addEventListener("drag", () => {
  first_card.style.transform = "translateX(0%)";
  second_card.style.transform = "translateX(0)";
  // smooth transition
  first_card.style.transition = "all 0.5s ease-in-out";  
  second_card.style.transition = "all 0.5s ease-in-out";
});

second_card.addEventListener("drag", () => {
  first_card.style.transform = "translateX(-90%)";
  second_card.style.transform = "translateX(-90%)";
  first_card.style.transition = "all 0.5s ease-in-out";
  second_card.style.transition = "all 0.5s ease-in-out";
});


const recent_pull = document.getElementById("recent_pull"); 
const recent = document.getElementById("recent");

let recent_pull_activated = false;

recent.addEventListener("click", () => {
  switch (recent_pull_activated) {
    case true:
      recent.style.transform = "translateY(0%)";
      recent.style.transition = "all 0.5s ease-in-out";
      recent_pull_activated = false;
      break;
    case false: 
      recent.style.transform = "translateY(-40%)";
      recent.style.transition = "all 0.5s ease-in-out";
      recent_pull_activated = true;
      break; 
  } 
});  

recent.addEventListener("drag", () => {
  switch (recent_pull_activated) {
    case true:
      recent.style.transform = "translateY(0% )"; 
      recent.style.transition = "all 0.5s ease-in-out";
      recent_pull.style.height = "50px"; 
      recent_pull_activated = false;
      break; 
    case false:
      recent.style.transform = "translateY(-40%)";
      recent.style.transition = "all 0.5s ease-in-out"; 
      recent_pull_activated = true;
      break;
  } 
});  

const notifications = document.getElementById("notifications");
// closed by default
notifications.style.transform = "translateY(-100%)";
const alert = document.getElementById("alert");
// when i pressed on alert the notifications was opened
alert.addEventListener("click", () => {
  notifications.style.transform = "translateY(0%)";
  notifications.style.transition = "all 0.5s ease-in-out";
}
); 
const close_notifications = document.getElementById("close_notifications");
close_notifications.addEventListener("click", () => {
  notifications.style.transform = "translateY(-100%)";
  notifications.style.transition = "all 0.5s ease-in-out"; 
} 
);

const indev = document.getElementById("indev");
// add this to indev animation: fade-in 4s linear forwards;
const startindev = document.getElementById("startindev");
const indev__progress = document.getElementById("indev__progress");
startindev.addEventListener("click", () => {
  // reset styles
  indev.style.animation = "none";
  indev.offsetHeight; /* trigger reflow */
  // indev__progress transform scale x 0
  indev__progress.style.transform = "scaleX(0)";
  // indev progress animation none
  indev__progress.style.animation = "none";
  // indev progress animation: load 3s 0.25s linear forwards;
  indev__progress.style.animation = "load 3s 0.25s linear forwards";
  indev.style.animation = "fade-in 4s linear forwards";
});

function startindevv() {
  // reset styles
  indev.style.animation = "none";
  indev.offsetHeight; /* trigger reflow */
  // indev__progress transform scale x 0
  indev__progress.style.transform = "scaleX(0)";
  // indev progress animation none
  indev__progress.style.animation = "none";
  // indev progress animation: load 3s 0.25s linear forwards;
  indev__progress.style.animation = "load 3s 0.25s linear forwards";
  indev.style.animation = "fade-in 4s linear forwards";
}

const loader = document.getElementById("loader");
// remove loader when page is loaded
window.addEventListener("load", () => {
  // smooth remove loader using opacity and visibility
  loader.style.opacity = "0";
  loader.style.visibility = "hidden";
});
 