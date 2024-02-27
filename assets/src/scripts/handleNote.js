const blogShown = document.querySelector(".note__blog");
const notesArray = document.querySelectorAll(".note__notes-noteItem");

document.addEventListener("click", (event) => {
    if (event.target.classList.contains('note__notes-noteItem-last-delete')) {
        // If the delete button is clicked, remove the note
        const note = event.target.parentElement.parentElement;
        const noteId = parseInt(note.dataset.noteId); // Get the ID of the note

        note.remove();
        // Remove the note from local storage
        const titleElement = note.querySelector('.note__notes-noteItem-title');
        const title = titleElement.textContent.trim();
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        const updatedNotes = notes.filter(note => note.title !== title);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));



    } else if (event.target.classList.contains('note__notes-noteItem-title')) {
        // If the note itself is clicked, show its details in the blog section
        const note = event.target.parentElement;

        // Find the title, author, and details elements within the clicked note
        const titleElement = note.querySelector('.note__notes-noteItem-title');
        const authorElement = note.querySelector('.note__notes-noteItem-last-date');
        const detailsElement = note.querySelector('.note__notes-noteItem-details');

        // Extract the text content from the found elements
        const title = titleElement.textContent.trim();
        const author = authorElement.textContent.trim();
        const details = detailsElement.textContent.trim();

        // Create the blog HTML content using the extracted information
        const blog = `
            <h2 class="note__blog-title">${title}</h2>
            <span class="note__blog-auther">${author}</span>
            <p class="note__blog-details">${details}</p>
        `;

        // Set the inner HTML of blogShown to the generated blog content
        blogShown.innerHTML = blog;
    }
});


