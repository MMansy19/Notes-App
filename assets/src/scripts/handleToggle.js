// show
export const noteSection = document.querySelector("#noteSection");
export const addNoteSection = document.querySelector("#addNoteSection");
export const addNoteButton = document.querySelector(".menu__nav-item-addNoteButton");
export const noteButton = document.querySelector(".menu__nav-item-noteButton");
const handleAddNoteSection = ()=>{
    noteSection.style.display = "none"
    addNoteSection.style.display = "flex"
};
const handleNoteSection = ()=>{
    addNoteSection.style.display = "none"
    noteSection.style.display = "flex"
};
addNoteButton.addEventListener("click", handleAddNoteSection);
noteButton.addEventListener("click", handleNoteSection);
// =========>
  const navItems = document.querySelectorAll('.menu__nav-item');

navItems.forEach(item => {
    item.addEventListener('click',()=>{ 
      navItems.forEach(anotherItem => {
        if(anotherItem !== item){
            anotherItem.children[0].classList.remove('menu__nav-item-line');
            anotherItem.children[1].classList.remove('menu__nav-item-link-active');
        }
      });
      item.children[0].classList.add('menu__nav-item-line');
      item.children[1].classList.add('menu__nav-item-link-active');
    });
  });
