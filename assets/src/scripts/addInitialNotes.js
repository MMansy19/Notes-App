const sideBar = document.querySelector(".note__notes");
const pinned = document.querySelector('#pinned');
const normal = document.querySelector('#normal');
const blog = document.querySelector(".note__blog");

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
        if (window.matchMedia("(max-width: 600px)").matches) {
            blog.style.display = 'block';
            sideBar.style.display = 'none';
        }        

blog.innerHTML = `<h2 class="note__blog-title">
              👨‍💻 Experienced
              <span class="note__blog-details-special">Frontend</span>
              Developer (React.js)
            </h2>
            <span class="note__blog-auther"
              >Feb 28, 2024 / By Mahmoud Mansy</span
            >
            <p class="note__blog-details">
              Hello there! I am a dedicated
              <span class="note__blog-details-special">Frontend</span> developer
              currently pursuing my degree in Biomedical Engineering at Cairo
              University. Proficient in HTML, CSS, JavaScript, and React, I also
              possess expertise in tools such as Figma, Sass, Tailwind CSS, and
              eslint.
              <br />
              <br />

              <span class="note__blog-details-special"
                >🛠️ Technical Proficiency:</span
              >
              <br />
              With a solid foundation in frontend technologies, I specialize in
              crafting visually appealing and highly functional user interfaces.
              My skill set extends to responsive web design, ensuring that the
              websites I develop are optimized for seamless performance across
              various screen sizes and devices, including mobile platforms. I
              pride myself on my ability to efficiently develop landing pages
              within a day and complete full
              <span class="note__blog-details-special">Frontend</span> projects
              with multiple pages within three days.
              <br />
              <br />

              <span class="note__blog-details-special"
                >💡 UI/UX Excellence:</span
              >
              <br />
              I am passionate about creating exceptional user experiences.
              Whether it's optimizing user flows or refining interface elements,
              I ensure that the UI and UX of my websites are intuitive,
              engaging, and aesthetically pleasing across all devices. My
              dedication to achieving excellence in design reflects in the
              beauty and usability of the websites I develop. <br />
              <br />
              <br />

              <span class="note__blog-details-special">🚀 Summary:</span>
              <br />
              As a
              <span class="note__blog-details-special">Frontend</span>
              developer, I bring a blend of technical proficiency and creative
              flair to every project. Whether it's collaborating with teams or
              working independently, my goal is to deliver high-quality
              solutions that exceed expectations. If you're seeking a skilled
              developer who can elevate your web projects with responsive design
              for mobile, let's connect and explore opportunities for
              collaboration! 👋 #<span class="note__blog-details-special"
                >Frontend</span
              >Development #UIUXDesign #WebDevelopment #ResponsiveDesign
              <br />
              <br />
            </p>`
