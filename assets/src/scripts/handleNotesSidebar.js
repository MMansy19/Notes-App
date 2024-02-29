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
        if (window.matchMedia("(min-width: 900px)").matches) {
            blog.style.left= "580px";
        }
        else if (window.matchMedia("(max-width: 900px)").matches) {
            blog.classList.remove("responsiveBlog");
            
        }
    } else {
        notesSideBar.style.setProperty('--width-sideBar', '10px');
        icon.classList.add("rotate");
        if (window.matchMedia("(min-width: 900px)").matches) {
            blog.style.left= "258px";
        }
        else if (window.matchMedia("(max-width: 900px)").matches) {
            blog.classList.add("responsiveBlog");
            
        }
    }
};
const handleBurgerBarClickedForMobile = () => {
    (menu.style.getPropertyValue('--width-menu') === '0') ? menu.style.setProperty('--width-menu', '258px') : menu.style.setProperty('--width-menu', '0');
    notes.style.left=menu.style.getPropertyValue('--width-menu');
            if (window.matchMedia("(min-width: 900px)").matches) {
            blog.style.left = `${parseInt(menu.style.getPropertyValue('--width-menu')) + 322}px`;
        }

    burgerBar.classList.toggle("rotateBurgerBar");
    menu.classList.toggle("responsiveMenu");
    
    if (window.matchMedia("(max-width: 900px)").matches) {
    menu.classList.toggle("mobileMenu");}
};


const handleBurgerBarClicked = () => {
    (menu.style.getPropertyValue('--width-menu') === '0') ? menu.style.setProperty('--width-menu', '258px') : menu.style.setProperty('--width-menu', '0');
    notes.style.left=menu.style.getPropertyValue('--width-menu');
            if (window.matchMedia("(min-width: 900px)").matches) {
            blog.style.left = `${parseInt(menu.style.getPropertyValue('--width-menu')) + 322}px`;
        }

    burgerBar.classList.toggle("rotateBurgerBar");
    menu.classList.toggle("responsiveMenu");
};

icon.addEventListener("click", handleIconClicked);

burgerBar.addEventListener("click", handleBurgerBarClickedForMobile);

if (window.matchMedia("(max-width: 1200px)").matches) {
    handleBurgerBarClicked()
    if (window.matchMedia("(min-width: 900px)").matches) {
        addNoteButton.addEventListener("click", handleBurgerBarClicked);
        noteButton.addEventListener("click", handleBurgerBarClicked);
    }
    else if (window.matchMedia("(max-width: 900px)").matches) {
        addNoteButton.addEventListener("click", handleBurgerBarClickedForMobile);
        noteButton.addEventListener("click", handleBurgerBarClickedForMobile);
    }
}
