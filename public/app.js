const btn = document.querySelector('.nav-logo');

btn.onclick = function () {
  const resNav = document.querySelector(".nav-list");
  resNav.classList.toggle("nav-list-visible");
 
}


// -----------------------------------scroll to top----------------------------------- 

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "1";
  } else {
    mybutton.style.display = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// ----------------------------------------------------------------------cursor

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  //   circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 8 + "px";
    circle.style.top = y - 8 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();


// countdown
// const hackathonStartDate = new Date('2023-10-27T23:59:59').getTime();

// const countdown = setInterval(function () {
//   const now = new Date().getTime();
//   const timeLeft = hackathonStartDate - now;

//   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   // const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   document.getElementById('days').textContent = days.toString().padStart(2, '0');
//   document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
//   document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
//   // document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

//   if (timeLeft < 0) {
//     clearInterval(countdown);
//     document.getElementById('countdown-timer').innerHTML = '<p>Hackathon has started!</p>';
//   }
// }, 1000);


// card glow effect -------------------------------------------------------------

// document.getElementById("#about").onmousemove = e => {
//   for(const card of document.getElementsByClassName(".pd-cont")) {
//     const rect = card.getBoundingClientRect(),
//           x = e.clientX - rect.left,
//           y = e.clientY - rect.top;

//     card.style.setPropertx("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   };
// }

// visitors


// background animation 

//-------------------------------- join-us wala part-------------------------------
const sponsor = document.getElementById("sponsor");
const evans = document.getElementById("evans");
const compar = document.getElementById("compar");
const jud = document.getElementById("judges");
const mentor = document.getElementById("mentors");
const sprcont = document.getElementById("spr-cont");
const evanscont = document.getElementById("evans-cont");
const comparcont = document.getElementById("compar-cont");
const mentorcont = document.getElementById("mentor-cont");
const judcont = document.getElementById("judges-cont");

evans.addEventListener("click", ()=> {
  sprcont.style.display = "none";
  evanscont.style.display = "block";
  comparcont.style.display = "none";
  mentorcont.style.display = "none";
  judcont.style.display = "none";
} )

sponsor.addEventListener("click", ()=> {
  sprcont.style.display = "block";
  evanscont.style.display = "none";
  comparcont.style.display = "none";
  mentorcont.style.display = "none";
  judcont.style.display = "none";
} )


compar.addEventListener("click", ()=> {
  sprcont.style.display = "none";
  evanscont.style.display = "none";
  comparcont.style.display = "block";
  mentorcont.style.display = "none";
  judcont.style.display = "none";
} )

mentor.addEventListener("click", ()=> {
  sprcont.style.display = "none";
  evanscont.style.display = "none";
  comparcont.style.display = "none";
  mentorcont.style.display = "block";
  judcont.style.display = "none";
} )

jud.addEventListener("click", ()=> {
  sprcont.style.display = "none";
  evanscont.style.display = "none";
  comparcont.style.display = "none";
  mentorcont.style.display = "none";
  judcont.style.display = "block";
} )




 
 