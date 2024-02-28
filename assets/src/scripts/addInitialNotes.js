const pinned = document.querySelector('#pinned');
const normal = document.querySelector('#normal');

// Add Initial Notes
const initialNotesArray = [
    { 
        title:"👨‍💻 Experienced Frontend Developer (React.js)",
        author:"Mahmoud Mansy",
        details:"Hello there! I am a dedicated Frontend developer currently pursuing my degree in Biomedical Engineering at Cairo University...",
        isPinned:1,
    },
    { 
        title:"🎯 ToDoList Project App",
        author:"Mahmoud Mansy",
        details:"Presenting a meticulously crafted React TodoList: a proficient task management tool enabling seamless task creation, updates, and deletion...",
        isPinned:0,
    },
];
// Function to clear existing notes
export const clearNotes = () => {
    normal.insertAdjacentHTML("afterend",'');
    pinned.insertAdjacentHTML("afterend",'');
};

export const addNote = (title, author, details, isPinned) => {
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

export const addNoteOnly = (title, author, details, isPinned) => {
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

initialNotesArray.forEach((note) => {
    addNoteOnly(note.title, note.author, note.details, note.isPinned);
});
