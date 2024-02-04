const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');

searchBtn.addEventListener('click', () => {
    searchContainer.style.display = 'block';

    const searchCloseBtn = document.querySelector('.search-close-btn');

    searchCloseBtn.addEventListener('click', () => {
        searchContainer.style.display = 'none';
        const searchBox = document.getElementById('search-box');
        searchBox.value = '';
        const eachBooks = document.querySelectorAll('.book-card');

        for (let i = 0; i < books.length; i++) {
            eachBooks[i].style.display = 'block';
        }
    });
});