const handleSearch = () => {
    const notesTitles = document.querySelectorAll('.note__notes-noteItem-title');
    const searchInput = document.querySelector('#search');

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.trim().toLowerCase();

        notesTitles.forEach(titleElement => {
            const title = titleElement.textContent.trim().toLowerCase();
            const noteItem = titleElement.parentElement;

            if (searchText && title.includes(searchText)) {
                noteItem.classList.add('highlight');
            } else {
                noteItem.classList.remove('highlight');
            }
            
        });
    });
}

// Call the function to handle search when the DOM is loaded
document.addEventListener('input', handleSearch);
