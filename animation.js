const logo = document.querySelector(".logo");
const menu = document.querySelector(".hamburger-menu");
const imgHero = document.querySelector(".hero-img-start");
const text = document.querySelector(".text-wrapper-in");
const btnStart = document.querySelector(".explore-btn");
const textSec = document.querySelector(".text-wrapper-in-sec");
const Socials = document.querySelector(".socials-start");

const tl = new TimelineMax();

TweenMax.from(menu, 1, {
    opacity: "0", y: "-30px", 
    ease: Power2.easeInOut,
});

TweenMax.from(logo, 1, {
    opacity: "0", y: "-30px", 
    ease: Power2.easeInOut,
});

TweenMax.fromTo(imgHero, 2, {height: "0%"}, {height: "100%", ease: Expo.easeInOut, delay:.7})

TweenMax.from(text, 1, {opacity:0, y: 20, delay:2, ease: Expo.easeInOut})

TweenMax.from(textSec, 1, {opacity:0, y: 20, delay:2.5, ease: Expo.easeInOut})

TweenMax.fromTo(btnStart, 1, {opacity: "0"}, {opacity: "1", delay: 3.5, ease: Power2.easeInOut})

TweenMax.fromTo(Socials, 1, {opacity: "0"}, {opacity: "1", delay: 4.5, ease: Power2.easeInOut})