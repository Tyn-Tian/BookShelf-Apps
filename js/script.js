window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        addNewBook();
        searchBook();
    });

    if (isStorageExits) {
        loadDataFromStorage();
    }
    searchBook();
});

document.addEventListener('onDataLoaded', () => {
    refreshDataFromBooks();
});