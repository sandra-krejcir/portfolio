let slideIndex = 1;

function nextSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  document.querySelector(".frontground-container").classList.add("hide");
  document.querySelector(".slideshow-container").classList.remove("hide");
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  if ((i = 1)) {
    slides[i].style.backgroundImage = "url(images/background2.jpg)";
  }
}

let maxFirstIterations;
let maxSecondIterations;
let iterator;
const theTextOne = document.querySelector(".typewritten").textContent.trim();
const theTextTwo = document.querySelector(".typewritteN").textContent.trim();

setTimeout(init, 1000);

function init() {
  console.log("function init()");
  maxFirstIterations = theTextOne.length + 1;
  maxSecondIterations = theTextTwo.length + 1;
  iterator = 0;

  document.querySelector("#typewriter").innerHTML = "";
  loop();
}

function loop() {
  console.log("function loop()", iterator);
  console.log("theTextOne[iterator]", theTextOne[iterator]);
  iterator++;
  document.querySelector(".typewritten").classList.remove("hide");
  document.querySelector("#theWriter").classList.remove("hide");

  if (iterator < maxFirstIterations) {
    document.querySelector("#typewriter").textContent +=
      theTextOne[iterator - 1];
    document.querySelector("#theWriter").classList.remove("hide");
    setTimeout(loop, 170);
  } else {
    document.querySelector("#theWriter").classList.add("hide");
    secondInit();
  }
}

function secondInit() {
  maxSecondIterations = theTextTwo.length + 1;
  iterator = 0;
  document.querySelector(".typewritteN").classList.remove("hide");
  document.querySelector("#theWriteR").classList.remove("hide");

  document.querySelector("#typewriteR").innerHTML = "";
  secondLoop();
}

function secondLoop() {
  iterator++;

  if (iterator < maxSecondIterations) {
    document.querySelector("#typewriteR").textContent +=
      theTextTwo[iterator - 1];
    document.querySelector("#theWriteR").classList.remove("hide");
    setTimeout(secondLoop, 150);
  } else {
    document.querySelector("#theWriteR").classList.add("hide");
    revealButtons();
  }
}

function revealButtons() {
  document.querySelector("#contact").classList.add("showFirst");
  document.querySelector("#viewing").classList.add("showSecond");
}
