"use strict";

let slideIndex = 1;
let isHidden = false;
let moreWhy = false;

const features = {
  leve: false,
  SILFEN: false,
  leaf: false,
  hogwarts: false,
  dragon: false,
  palette: false,
};

const links = {
  leve: "http://sandradesigns.dk/leve-cph/index.html",
  SILFEN: "http://sandradesigns.dk/SILFEN/index.html",
  leaf: "http://sandradesigns.dk/module-04/project_leaf-of-life/product/index.html",
  hogwarts: "https://sandra-krejcir.github.io/hogwarts/",
  dragon:
    "https://emilyhoolahan.com/kea/12_advanced_animation/own_configurator/",
  palette: "https://sandra-krejcir.github.io/color_palatte/",
};

setTimeout(init, 1000);

let maxFirstIterations;
let maxSecondIterations;
let iterator;
const theTextOne = document.querySelector(".typewritten").textContent.trim();
const theTextTwo = document.querySelector(".typewritteN").textContent.trim();

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
    setTimeout(loop, 110);
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
    setTimeout(secondLoop, 90);
  } else {
    document.querySelector("#theWriteR").classList.add("hide");
    revealButtons();
  }
}

function nextSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  document.querySelector("#theMenu").classList.add("hide");
}

function showSlides(n) {
  clearSlides();
  document.querySelector(".frontground-container").classList.add("hide");
  document.querySelector(".slideshow-container").classList.remove("hide");
  document.querySelector("#theMenu").classList.add("hide");
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
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

  if (slideIndex === 1) {
    document.querySelector(".slideshow-container").classList.add("backOne");
    document.querySelector(".slideshow-container").classList.remove("backTwo");
    document
      .querySelector(".slideshow-container")
      .classList.remove("backThree");
    document.querySelector(".slideshow-container").classList.remove("backFour");
  } else if (slideIndex === 2) {
    document.querySelector(".slideshow-container").classList.add("backTwo");
    document.querySelector(".slideshow-container").classList.remove("backOne");
    document
      .querySelector(".slideshow-container")
      .classList.remove("backThree");
    document.querySelector(".slideshow-container").classList.remove("backFour");
  } else if (slideIndex === 3) {
    document.querySelector(".slideshow-container").classList.add("backThree");
    document.querySelector(".slideshow-container").classList.remove("backOne");
    document.querySelector(".slideshow-container").classList.remove("backTwo");
    document.querySelector(".slideshow-container").classList.remove("backFour");
  } else if (slideIndex === 4) {
    document.querySelector(".slideshow-container").classList.add("backFour");
    document.querySelector(".slideshow-container").classList.remove("backOne");
    document
      .querySelector(".slideshow-container")
      .classList.remove("backThree");
    document.querySelector(".slideshow-container").classList.remove("backTwo");
  } else {
    document.querySelector(".slideshow-container").classList.add("backTwo");
    document.querySelector(".slideshow-container").classList.remove("backOne");
    document
      .querySelector(".slideshow-container")
      .classList.remove("backThree");
    document.querySelector(".slideshow-container").classList.remove("backFour");
  }
}

function revealButtons() {
  document.querySelector("#contact").classList.add("showFirst");
  document.querySelector("#viewing").classList.add("showSecond");
}

function showMenu() {
  document.querySelector("#theMenu").classList.toggle("hide");
}

document.querySelector("#readMoreBtn").addEventListener("click", showProjects);

function showProjects() {
  if (isHidden) {
    document.querySelector("#beforeHeadline").classList.remove("hide");
    document.querySelector("#beforeText").classList.remove("hide");
    const parent = document.querySelector("#slideTwosecTwo");
    parent
      .querySelectorAll("img")
      .forEach((element) => element.classList.remove("hide"));
    document.querySelector("#projects_readMore").classList.add("hide");
    document.querySelector("#readMoreBtn").textContent = "View projects";
    document.querySelector("#readMoreBtn").style.color = "gold";
  } else {
    document.querySelector("#beforeHeadline").classList.add("hide");
    document.querySelector("#beforeText").classList.add("hide");
    const parent = document.querySelector("#slideTwosecTwo");
    parent
      .querySelectorAll("img")
      .forEach((element) => element.classList.add("hide"));
    document.querySelector("#projects_readMore").classList.remove("hide");
    document.querySelector("#readMoreBtn").style.color = "cornflowerblue";
    document.querySelector("#readMoreBtn").textContent = "Back to summary";
  }

  isHidden = !isHidden;
}

document
  .querySelectorAll(".project")
  .forEach((project) => project.addEventListener("click", revealProject));

function revealProject(event) {
  const target = event.currentTarget;
  const feature = target.dataset.feature;
  document.querySelector("#project_text").innerHTML = "";

  let selectedProject = createProjectElement(feature);
  document.querySelector(".project_container").appendChild(selectedProject);

  target.classList.add("chosen");
  console.log(features[feature]);
  features[feature] = true;
  const firstFrame = target.getBoundingClientRect();
  console.log(firstFrame);

  document
    .querySelector("#projects_readMore")
    .animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 300,
      easing: "ease-out",
    });

  document.querySelector("#projects_readMore").classList.add("hide");
  document.querySelector("#readMoreBtn").classList.add("hide");
  document.querySelector("#showProject").classList.remove("hide");
  document.querySelector("#goBackBtn").classList.remove("hide");

  const lastFrame = document
    .querySelector(".project_container")
    .getBoundingClientRect();
  console.log(lastFrame);

  const deltaX = firstFrame.left - lastFrame.left;
  const deltaY = firstFrame.top - lastFrame.top;
  const deltaWidth = firstFrame.width / lastFrame.width;
  const deltaHeight = firstFrame.height / lastFrame.height;

  const projectAnime = selectedProject.animate(
    [
      {
        transformOrigin: "top left",
        transform: `translateX(${deltaX}px)
      translateY(${deltaY}px) scaleX(${deltaWidth}) scaleY(${deltaHeight})`,
      },
      { transformOrigin: "top left", transform: "none" },
    ],
    {
      duration: 800,
      easing: "ease-in-out",
    }
  );

  projectAnime.onfinish = function () {
    features[feature] = false;
    document
      .querySelector("#goBackBtn")
      .addEventListener("click", returnToProjects);
    if (feature === "leve") {
      console.log(feature);
      document.querySelector("#project_text").innerHTML =
        "This project was my, as well as my groups, first solo collaboration with a client- in this case we chose to work with leve. Copenhagen. It was made as a final exam project for the 2nd semester. <br><br> After debriefing with the client we concluded their social media presence as well as corporate image and identity are well defined, but aren't propely translated outside of their social media accounts. With that conclusion we decided to redesign the leve. website & webshop in order to show the image they truely represent.<br><br> My role was mostly developing the Javascript for initializing the webshop (setting up the local and restdb storage, fetching the JSON file & display of product, newsletter form etc.). Because I found the UX part, aside from Javascript, most interesting, I was also in charge of conducting the SWAT, market, competitor and trend analysis.<br><br> The final prototype was based on leve.'s cheerful and laidback character trying to portray their friendly and very personalized approach the each of the customers. ";
    } else if (feature === "SILFEN") {
      document.querySelector("#project_text").innerHTML =
        "The collaboration with SILFEN was based on learning how to work with restdb, fetching/ posting JSON data to and from the server, as well as sharpening our UX skills. This project could actually be taken as a prototype before our final exam project. <br><br> The main focus of the project was to do a complete redesign of the current SILFEN website and provide the company with a newsletter feature, as well as with a new SoMe strategy to attract (and keep) more customers. <br><br>I was again in 'the background' of the project developing the Javascript code and I have struggled with making the filter and the cart function properly. Unfortunately both of them ended up being hard coded, since creating both features was reserved for later classes in the semester (the final exam project).";
    } else if (feature === "leaf") {
      document.querySelector("#project_text").innerHTML =
        "Creation of this 'video game' marked my first encounter with Javascript. We were asked to develop a game based on our own idea with a user story to underpin the idea. All game segments and characters had to be drawn in Adobe Illustrator, as well as animated using Javascript into a real game with instructions, timelimit, points, lives...<br><br>Jumping right into the project, I didn't fully understand all the code I've used and with only some examples from the teachers, coding took up a lot more time than expected. This first javascript encounter actually resulted in my nervousness to use Javascript for later projects. E.g. for my first semester portfolio, I haven't used a single line of Javascript not wanting to brake the code.<br><br>However, when the next semester followed with more Javascript, I soon realized the logic and structure wanting to learn and improve my Javascript skills in the later projects.";
    } else if (feature === "hogwarts") {
      document.querySelector("#project_text").innerHTML =
        "The Hogwarts list was supposed to be fetched as a JSON file and 'cleaned' of all/any grammar and data mistakes only through Javascript (no rewriting of the JSON). The fetched data was to be displayed in a pop-up with their personal info (and the data would also have to be available through filtering, sorting and search).The user could then add the student to different groups if the requirements were met(inquisitorial group only accepts students from Slytherin or pure-blooded).<br><br> I've struggled the most with getting the students blood status (which was read from another JSON file) and with setting the requirement for the prefect (there's only two prefects in each house).<br><br>For the 'double JSON' problem, I loaded the bloodline file before the students file and stored the bloodlines as global variables. The solution to the prefects was very similar- I created a global object which is read/checked when calling the function. The design itslef isn't much since the focus was on properly executing the code.";
    } else if (feature === "dragon") {
      document.querySelector("#project_text").innerHTML =
        "This configurator project has so far been the most fun and creative assignment of the Frontend Elective. By working in groups, the main goal was to show off our Adobe Photoshop & Illustrator skills, while combining them with new coding techniques and animations.<br><br> For this project, my partner and I decided to make a configurator where one could costumize their own dragon (avatar). Considering her CSS skills and my Javascript skills are something we're most proud of, we decided to split the roles as such since we wanted this project to be simple, fun and a break from the first five weeks of countinuos coding...<br><br>We kept each other updated and challenged ourselves to find a feature/ solution we haven't worked with before. ";
    } else {
      document.querySelector("#project_text").innerHTML =
        "Trying to recreate what's already done by 'input type=color', we made our own color palette. By choosing a color on the color wheel, a display with HEX, RGB and HSL values of the selected color is presented. Additionally, the user is able to choose the harmonies which will then result into calculating and displaying four additional colors that are monochromatic, analogous etc.<br><br> Calculating and returning all the values has definately been the most challenging part of the project. I have used return functions before, but at the time I didn't fully understand it. Now, I had to carefully plan the layout of the code and which functions have to be connected in order to get the returned values into new needed funactions (without the constant use of the global variables).<br><br> The project still needs work as I only coded the calculations for analogous colors, and haven't figured out how to 'restart' and clear the palette.";
    }
    function returnToProjects() {
      document.querySelector(".project_container").removeChild(selectedProject);
      document.querySelector("#projects_readMore").classList.remove("hide");
      document.querySelector("#readMoreBtn").classList.remove("hide");
      document.querySelector("#readMoreBtn").style.color = "cornflowerblue";
      document.querySelector("#showProject").classList.add("hide");
      document.querySelector("#goBackBtn").classList.add("hide");
    }
  };
}

function createProjectElement(feature) {
  const conDiv = document.createElement("div");
  const div = document.createElement("div");
  const link = document.createElement("a");
  link.href = links[feature];
  link.target = "_blank";
  div.classList.add(`${feature}`);
  div.dataset.feature = feature;

  link.appendChild(div);
  conDiv.appendChild(link);

  return conDiv;
}

function clearSlides() {
  document.querySelector("#projects_readMore").classList.add("hide");
  document.querySelector("#readMoreBtn").classList.remove("hide");
  document.querySelector("#showProject").classList.add("hide");
  document.querySelector("#goBackBtn").classList.add("hide");
  document.querySelector("#beforeHeadline").classList.remove("hide");
  document.querySelector("#beforeText").classList.remove("hide");
  const parent = document.querySelector("#slideTwosecTwo");
  parent
    .querySelectorAll("img")
    .forEach((element) => element.classList.remove("hide"));
  document.querySelector("#readMoreBtn").textContent = "View projects";
  document.querySelector("#readMoreBtn").style.color = "gold";
  document.querySelector(".project_container").innerHTML = "";
}
