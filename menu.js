const menuXD = () => {
    const menuBtn = document.querySelector(".hamburger-menu");
    const menuMain = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menuMain.classList.toggle("_active");
        menuBtn.classList.toggle("toggle");
    });
}

menuXD();

//btn click go to top

const bottomBtn = document.querySelector(".on-top-btn");
let testVar = window.pageYOffset;

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    let testVar2 = window.pageYOffset;

    if(testVar > testVar2) {
        bottomBtn.style.display= "none";
    }
    else {
        bottomBtn.style.display= "block";
    }

    testVar = testVar2;
});