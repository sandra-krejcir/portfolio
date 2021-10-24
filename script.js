"use strict";

let slideIndex = 1;
let isHidden = false;
let moreWhy = false;

const features = {
  leve: false,
  SILFEN: false,
  mover: false,
  hogwarts: false,
  dragon: false,
  palette: false,
};

const links = {
  leve: "http://sandradesigns.dk/leve-cph/index.html",
  SILFEN: "http://sandradesigns.dk/SILFEN/index.html",
  mover:
    "https://xd.adobe.com/view/d859950e-9a8c-4c1f-b906-02cd913c1be9-8d0a/?fullscreen",
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

  if ((i = 2)) {
    slides[i].style.backgroundImage = "url(images/background3.jpg)";
  }

  if ((i = 3)) {
    slides[i].style.backgroundImage = "url(images/background4.jpg)";
  }

  if ((i = 4)) {
    slides[i].style.backgroundImage = "url(images/background2.jpg)";
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
    document.querySelector("#readMoreBtn").textContent = "Back to summery";
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
        "The collaboration with SILFEN was based on learning how to work with restdb, fetching/ posting JSON data to and from the server, as well as sharpening our UX skills. This project could actually be taken as a prototype before our final exam project. <br><br> Main focus of the project was to do a complete redesign of the current SILFEN website and providing the company with the newsletter feature as well as with a new SoMe strategy to attract (and keep) more customers. <br><br> During the project, I was again in 'the background' of the project developing the Javascript, and have quite struggled with making the filter and the cart function properly. Both unfortunately, ended up being hard coded, since the creating of both of the features were reserved for later classes in the semester (the final exam project).";
    } else if (feature === "mover") {
      document.querySelector("#project_text").innerHTML =
        "Working with our first client (Me-Mover),the assignment was to do a thorough analysis of the company's UX- SWAT, market, competitor, corporate image and  identity, target audience, and of course the trends analysis. Using the results of the analyisis, we were to create a compaign consisting of (a longer YouTube video) a short campaign video and a landing page explaining the focus, values and goals of the new campaign.<br><br>Our idea for the campaign was to target an older part of their audience and attract them by presenting the Me-mover not only as a way of living a healthier life, but also as a way to socialize, make new memories,be a part of a new community, and escape the solumn feel created by the lockdown.<br><br>N.B. The link is to the xd prototype since the website has been removed by one of the group members. Here are also links to the videos: <a href=`https://www.youtube.com/watch?v=37s0MYfTutU` target=`_blank`> long video</a> and <a href=`https://www.youtube.com/watch?v=Naj-yVOeNic` target=`_blank`>short video</a>.";
    } else if (feature === "hogwarts") {
      document.querySelector("#project_text").innerHTML =
        "The Hogwarts list was supposed to be fetched as a JSON file and 'cleaned' of all/any grammar and data mistakes only through Javascript (no rewriting of the JSON). The fetched data was to be displayed in a pop-up with their personal info (and the data would also have to be available through filtering, sorting and search).There the user could add the student to different groups if the requirements were met(inquisitorial group only accepts students from Slytherin or pure-blooded).<br><br> I've struggled the most with getting the students blood status (which was read from another JSON file) and with setting the requirement for the prefect (there's only two prefects in each house).<br><br>For the 'double JSON' problem, I loaded the bloodline file before the students file and stored the bloodlines as global variables. The solution to the prefects was very similar- I created a global object which is read/checked when calling the function. The design itslef isn't much since the focus was on properly executing the code.";
    } else if (feature === "dragon") {
      document.querySelector("#project_text").innerHTML =
        "This configurator project has so far been the most fun and creative assignment of the Frontend Elective. Working in groups the main goal was to show off our Adobe Photoshop & Illustrator skills, while combining them with new coding techniques and animations.<br><br> For this project, my partner and I decided to make a configurator where one could costumize their own dragon (avatar). Concluding her CSS skills and mine Javascript skills are something we're most proud of, we decided to split the roles as such sice we wanted this project to be simple, fun (and a break from the first five weeks of countinuos coding).<br><br> Even though it seemed like each of us was doing her own thing, we constantly kept each other updated and challenged ourselves to find a feature/ solution we haven't worked before. ";
    } else {
      document.querySelector("#project_text").innerHTML =
        "Trying to recreate was is already being done by 'input type=color', we made our own color palette. By choosing a color on the color wheel, you are presented a display with HEX, RGB and HSL values of the selected color. Additionally, the user is able to choose the harmonies which will then result into calculating and displaying four additional colors that are monochromatic, analogous etc.<br><br> Caclulating and returning all the values has definately been the most challenging part of the project. I have used return functions before, but at the time I didn't fully understand it. Now, I had to carefully plan the layout of the code and which functions have to be connected in order to get the returned values into new needed funactions (without the constant use of the global variables).<br><br> The project still needs work as I only coded the calculations for analogous colors, and haven't figured out how to 'restart' and clear the palette.";
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
