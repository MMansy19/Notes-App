import { addNoteOnly, addNote, clearNotes } from "./addInitialNotes.js";
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#auther');
const detailsInput = document.querySelector('#details');
const normalNoteButton = document.querySelector('#normalNote');
const pinnedNoteButton = document.querySelector('#pinnedNote');
let isPinned = -1;




const onClicked = () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const details = detailsInput.value;
    (title && details && author&&
    addNote(title, author, details, isPinned));
    titleInput.value ='';
    authorInput.value= '';
    detailsInput.value= '';
}

normalNoteButton.addEventListener("click", () => {
    isPinned = 0;
    onClicked();
});

pinnedNoteButton.addEventListener("click", () => {
    isPinned = 1;
    onClicked();
});

// Clear notes in localStorage
// localStorage.clear();

// Load notes from localStorage when the page is loaded
clearNotes();
window.addEventListener('load', () => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
        savedNotes.forEach(note => {
            addNoteOnly(note.title, note.author, note.details, note.isPinned);
        });
    }
});
