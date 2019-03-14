var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-Item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//hamburger change
function myFunction(x) {
  x.classList.toggle("change");
}

//nav-barmain open and close
let toggleNavStatus = false;
 
let toggleNav = function() {

  let getSideBar = document.querySelector("#nav-sideBar"); //document = act on an element  querySelector = grab something
  let getSideBarUl = document.querySelector(".nav-main ul"); 
  let getSideBarAnchors = document.querySelectorAll(".nav-main ul a"); //all selects all anchor tags - not just the first one

  if (toggleNavStatus == false) {
    getSideBarUl.style.visibility = "visible";
    getSideBar.style.width = "273px";
    getSideBar.style.opacity = "1";

    let arrayLength = getSideBarAnchors.length;
    for (let i=0; i < array.length; i++) {
      getSideBarAnchors[i].style.opacity = "1";   //grab i which is zero - so i = 0, first time loop grab first index, next loop grab next link / index.. so on then style them
    }
    toggleNavStatus = true;
 }
  
  if (toggleNavStatus == true) {
    getSideBarUl.style.visibility = "hidden";
    getSideBar.style.width = "2.3rem";
    getSideBar.style.opacity = "1";
    
    let arrayLength = getSideBarAnchors.length;
    for (let i=0; i < array.length; i++) {
      getSideBarAnchors[i].style.opacity = "1";   //grab i which is zero - so i = 0, first time loop grab first index, next loop grab next link / index.. so on then style them
    }


  }

}