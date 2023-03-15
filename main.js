
// auto slide the products section with all details
$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:2,
      itemsDesktop:[1000,2],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768,1],
      pagination:true,
      navigation:true,
      navigationText:["",""],
      autoPlay:true
  });
});


// codes for slider //////////////////////////////////////////////////////
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 5000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});







// codes for navbar when scroll the color changes ////////////////////////////
window.addEventListener("scroll", function () {
  var changeTop = document.getElementById("top-nav");
  var changeBottom = document.getElementById("bottom-nav");
  if(window.scrollY >= 20){
    changeTop.classList.add("change-top-color");
    changeBottom.classList.add("change-bottom-color");
  }else{
    changeTop.classList.remove("change-top-color");
    changeBottom.classList.remove("change-bottom-color");
  }
  
})








// change dark/light mode for PC /////////////////////////////////////////////////
const darkBtn = document.getElementById("dark-mode");
const lightBtn = document.getElementById("light-mode");

darkBtn.addEventListener("click", ()=> {
  darkBtn.style.display = "none";
  lightBtn.style = `display:block; color: gray`
  document.body.style.backgroundColor = "rgb(28, 23, 56)";
  document.body.style.color = "white";
})

lightBtn.addEventListener("click", ()=> {
  lightBtn.style.display = "none";
  darkBtn.style.display = "block";
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
})







// navigation for mobile devices toggler //////////////////////////////////////
$(document).ready(function(){
  //jquery for toggle sub menus
  $('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  //jquery for expand and collapse the sidebar
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "hidden");
  });

  $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
  });
});

// when scroll the navbar color change
const mobileNav = document.querySelector(".mob");
window.addEventListener("scroll", ()=> {
  if(window.scrollY >= 50){
    mobileNav.style.backgroundColor="lightgrey";
  }else{
    mobileNav.style.backgroundColor="white";
  }
})


