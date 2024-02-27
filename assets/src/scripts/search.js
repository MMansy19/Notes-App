const notesNameArray = document.querySelectorAll(".note__notes-noteItem-title");
const searchInput = document.querySelector('#search');

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.trim().toLowerCase();

    notesNameArray.forEach(notesName => {
        const title = notesName.textContent.trim().toLowerCase();

        if (title.includes(searchText)) {
            notesName.parentElement.classList.add('highlight'); // Add a CSS class to highlight the note
            notesName.parentElement.style.display = 'block';
        } else {
            notesName.parentElement.classList.remove('highlight'); // Remove the CSS class if the note doesn't match the search query
            notesName.parentElement.style.display = 'none';
        }
    });
});
