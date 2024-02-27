
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#auther');
const detailsInput = document.querySelector('#details');
const normalNoteButton = document.querySelector('#normalNote');
const pinnedNoteButton = document.querySelector('#pinnedNote');
const pinned = document.querySelector('#pinned');
const normal = document.querySelector('#normal');
let isPinned = -1;

// Function to clear existing notes
const clearNotes = () => {
    normal.insertAdjacentHTML("afterend",'');
    pinned.insertAdjacentHTML("afterend",'');
    
}
const addNoteOnly = (title, author, details, isPinned) => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    const newNote = `<div class="note__notes-noteItem">
    <h2 class="note__notes-noteItem-title">${title}</h2>
    <p class="note__notes-noteItem-details">${details}</p>
    <div class="note__notes-noteItem-last">
    <span class="note__notes-noteItem-last-date">${formattedDate}/ By ${author}</span>
    <button class="note__notes-noteItem-last-delete">Delete</button>
    </div>
    </div>`;
    
    if (isPinned) {
        pinned.insertAdjacentHTML("afterend", newNote);
    } else if(!isPinned) {
        normal.insertAdjacentHTML("afterend", newNote);
    }
}

const addNote = (title, author, details, isPinned) => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    const newNote = `<div class="note__notes-noteItem">
    <h2 class="note__notes-noteItem-title">${title}</h2>
    <p class="note__notes-noteItem-details">${details}</p>
    <div class="note__notes-noteItem-last">
    <span class="note__notes-noteItem-last-date">${formattedDate}/ By ${author}</span>
    <button class="note__notes-noteItem-last-delete">Delete</button>
    </div>
    </div>`;
    
    if (isPinned) {
        pinned.insertAdjacentHTML("afterend", newNote);
    } else if(!isPinned) {
        normal.insertAdjacentHTML("afterend", newNote);
    }
    if(isPinned !== -1){
        // Save the note to localStorage after adding it to the DOM
        clearNotes();
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ title, author, details, isPinned });
        localStorage.setItem('notes', JSON.stringify(notes));
    }
}

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
