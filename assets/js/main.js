var btns = document.querySelectorAll('.js-buy-ticket');
var modal = document.querySelector('.modal');
var modalCloseBtns = document.querySelectorAll('.js-close-btn');
var modalContent = document.querySelector('.modal-content');

btns.forEach(btn => {
    btn.addEventListener('click', openModal);
})

modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
})

modal.addEventListener('click', closeModal);

modalContent.addEventListener('click', event => {
    event.stopPropagation();
})

function openModal()
{
    modal.classList.add('open');
}

function closeModal()
{
    modal.classList.remove('open');
}