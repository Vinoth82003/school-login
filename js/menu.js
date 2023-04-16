console.log('Menu js');

const opn_nav = document.querySelector('.open-nav');
const cls_nav = document.querySelector('.cls-nav');

const menu = document.querySelector('.menu');
const list_items = document.querySelector('.list-items');

opn_nav.addEventListener('click', function(){
    opn_nav.style.display = 'none';
    menu.style.height = '180px';
    
setTimeout(() => {

    cls_nav.style.display = 'block';
    list_items.style.display = 'block'; 

}, 250);

});

cls_nav.addEventListener('click', function(){
    opn_nav.style.display = 'block';
    cls_nav.style.display = 'none';
    menu.style.height = '40px';
    list_items.style.display = 'none';
});