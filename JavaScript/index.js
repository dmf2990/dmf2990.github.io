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

//nav-barMain open and close

let toggleNav = function() {
  let toggleNavStatus = false;

  let getSideBar = document.querySelector("#nav-sideBar"); //document = act on an element  querySelector = grab something
  let getSideBarUl = document.querySelector(".nav-main ul"); 

  if (!toggleNavStatus) {
    getSideBarUl.style.visibility = "visible";
    getSideBar.style.width = "273px";

    let arrayLength = getSideBarAnchors.length;
    for (let i=0; i < array.length; i++) {
      getSideBarAnchors[i].style.opacity = "1";   //grab i which is zero - so i = 0, first time loop grab first index, next loop grab next link / index.. so on then style them
    }
    toggleNavStatus = true;
  } else {
    getSideBarUl.style.visibility = "hidden";
    getSideBar.style.width = "36px";
    
    let arrayLength = getSideBarAnchors.length;
    for (let i=0; i < array.length; i++) {
      getSideBarAnchors[i].style.opacity = "1";   //grab i which is zero - so i = 0, first time loop grab first index, next loop grab next link / index.. so on then style them
    }

  }

}