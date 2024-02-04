const addBtn = document.querySelector('.add-btn');
const addCard = document.querySelector('.add-card');
const closeBtn = addCard.querySelector('.close-btn')

addBtn.addEventListener('click', () => {
    addBtn.style.display = 'none';
    addCard.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    addBtn.style.display = 'block';
    addCard.style.display = 'none';
    setBackToDefault();
});