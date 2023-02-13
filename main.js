var btn = document.querySelector('.btn');
var ul = document.querySelector('.ul1');
var link = document.querySelector('.link1');


btn.addEventListener('click', function(){
    ul.classList.toggle('ul1js');
    btn.querySelector('i').classList.toggle('fa-times');
});