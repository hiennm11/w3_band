var header = document.getElementById('header');
var currentHeight = header.clientHeight;

var btns = document.querySelectorAll('.js-buy-ticket');
var modal = document.querySelector('.modal');
var modalCloseBtns = document.querySelectorAll('.js-close-btn');
var modalContent = document.querySelector('.modal-content');
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');


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


mobileMenuBtn.onclick = function() {
    var isClose = header.clientHeight === currentHeight;
    if(isClose){
        header.style.height = 'auto';
    }
    else{
        header.style.height = null;
    }
}


var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
menuItems.forEach(item => {
    var isParentMenu = item.nextElementSibling && item.nextElementSibling.classList.contains('subnav');
    
    item.onclick = function(event) {
        if(isParentMenu)
        {
            event.preventDefault();
        }     
        else{
            header.style.height = null;
        }   
    };
})

function openModal()
{
    modal.classList.add('open');
}

function closeModal()
{
    modal.classList.remove('open');
}