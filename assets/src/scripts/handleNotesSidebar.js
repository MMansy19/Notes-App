import {addNoteButton, noteButton, addNoteSection,} from "./handleToggle.js"
const icon = document.querySelector(".note__notes-image");
const burgerBar = document.querySelector(".burgerBar");
const menu = document.querySelector(".menu");
const notes = document.querySelector(".note");
const notesSideBar = document.querySelector(".note__notes");
const blog = document.querySelector(".note__blog");

const handleIconClicked = () => {
    if (notesSideBar.style.getPropertyValue('--width-sideBar') === '10px') {
        notesSideBar.style.setProperty('--width-sideBar', '322px');
        icon.classList.remove("rotate");
        blog.style.left= "580px";
    } else {
        notesSideBar.style.setProperty('--width-sideBar', '10px');
        icon.classList.add("rotate");
        blog.style.left= "258px";
    }
};
const handleBurgerBarClicked = () => {
    (menu.style.getPropertyValue('--width-menu') === '0') ? menu.style.setProperty('--width-menu', '258px') : menu.style.setProperty('--width-menu', '0');
    notes.style.left=menu.style.getPropertyValue('--width-menu');
    blog.style.left = `${parseInt(menu.style.getPropertyValue('--width-menu')) + 322}px`;
    burgerBar.classList.toggle("rotateBurgerBar");
    menu.classList.toggle("responsiveMenu");
    };
// const handleBurgerBarClickedForMobile = () => {
//     notes.style.display = "none";
//     addNoteSection.style.display = "none";
//     };

icon.addEventListener("click", handleIconClicked);

burgerBar.addEventListener("click", handleBurgerBarClicked);

if (window.matchMedia("(max-width: 1200px)").matches) {
    addNoteButton.addEventListener("click", handleBurgerBarClicked);
    noteButton.addEventListener("click", handleBurgerBarClicked);
    burgerBar.addEventListener("click", handleBurgerBarClickedForMobile);
}
