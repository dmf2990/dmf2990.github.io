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

// var clicked = false;
// function toggle(){
// let getSideBarWidth = document.getElementById("#nav-sideBar"); //document = act on an element  querySelector = grab something
// let getSideBarUl = document.getElementsByClassName(".nav-main ul"); 
//   if (!clicked){
//     clicked = true;
//     getSideBarUl.style.visibility = "visible";
//     getSideBarWidth.style.width = "273px";
//   }else{
//     clicked = false;
//     getSideBarUl.style.visibility = "hidden";
//     getSideBarWidth.style.width = "37px";
//   }
// }

function toggleHideMainNav(element){
  element.classList.toggle('hideMainNav'); //located in CSS = display: none; --- we will toggle this
}

function linkHamburgerToMainNav(){
  const hamburgerBtn = document.querySelector('.mainNavBtn');

  hamburgerBtn.addEventListener('click', function(){
    const navItemsToHide = document.querySelector('.navItems'); 
    toggleHideMainNav(navItemsToHide);
  });
}

function runMainNavHide() {
  linkHamburgerToMainNav();
}

runMainNavHide();

var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
	


