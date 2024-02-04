const STORAGE_KEY = 'BOOKSHELF_APPS';

let books = [];

function isStorageExits() {
    if (typeof (storage) === undefined) {
        alert('Browser anda tidak mendukung local storage');
        return false;
    } else {
        return true;
    }
}

function saveData() {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
}

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);

    const data = JSON.parse(serializedData);

    if (data !== null) {
        books = data;
    }

    document.dispatchEvent(new Event('onDataLoaded'));
}

function updateDataToStorage() {
    if (isStorageExits) {
        saveData();
    }
}

function composeBookObject(title, author, year, isComplete) {
    return {
        id: +new Date(),
        title,
        author,
        year,
        isComplete
    };
}

function findBook(bookId) {
    for (const book of books) {
        if (book.id === bookId) {
            return book;
        }
    }
    return null;
}

function findBookIndex(bookId) {
    let index = 0;
    for (const book of books) {
        if (book.id === bookId) {
            return index;
        }
        index++;
    }
    return -1;
}

function refreshDataFromBooks() {
    for (const book of books) {
        const newBook = renderNewBook(book.title, book.author, book.year, book.isComplete);
        newBook[BOOK_ITEMID] = book.id;
    }
}