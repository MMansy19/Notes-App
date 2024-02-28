const icon = document.querySelector(".note__notes-image");
const burgerBar = document.querySelector(".burgerBar");
const menu = document.querySelector(".menu");
const notes = document.querySelector(".note");
const notesSideBar = document.querySelector(".note__notes");
const blog = document.querySelector(".note__blog");

const handleIconClicked = () => {
    if (notesSideBar.style.getPropertyValue('--width-sideBar') === '7px') {
        notesSideBar.style.setProperty('--width-sideBar', '322px');
        icon.classList.remove("rotate");
        blog.style.left= "580px";
    } else {
        notesSideBar.style.setProperty('--width-sideBar', '7px');
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

icon.addEventListener("click", handleIconClicked);

burgerBar.addEventListener("click", handleBurgerBarClicked);

if (window.matchMedia("(max-width: 1200px)").matches) {
    addNoteButton.addEventListener("click", handleBurgerBarClicked);
    noteButton.addEventListener("click", handleBurgerBarClicked);
}