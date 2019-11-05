const logo = document.querySelector(".logo");
const menu = document.querySelector(".hamburger-menu");
const imgHero = document.querySelector(".hero-img-start");
const text = document.querySelector(".text-wrapper-in");


const tl = new TimelineMax();

TweenMax.from(menu, 1, {
    opacity: "0", y: "-30px", 
    ease: Power2.easeInOut,
    delay: 2,
});

TweenMax.from(logo, 1, {
    opacity: "0", y: "-30px", 
    ease: Power2.easeInOut,
    delay: 2,
});

TweenMax.fromTo(imgHero, 2, {height: "0%"}, {height: "100%", ease: Expo.easeInOut, delay:.5})

TweenMax.from(text, 1, {opacity:0, y: 20, delay:2, ease: Expo.easeInOut, delay: 2.8})