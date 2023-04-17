console.log('active js');
var list = document.querySelectorAll('.list')
console.log(list);
list.forEach(e => {
    e.addEventListener('click' ,function(){
       list.forEach(e => {
        e.classList.remove('active');
       });
       e.classList.add('active');
    });
});
