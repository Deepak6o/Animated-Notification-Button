var noti = document.querySelector('.noti');
var btn =  document.querySelector('.btn');
btn.addEventListener('click',active);

function active(){
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count',add+1);
    if(add===0)
    {
        noti.classList.add('add-numb');
    }
    false;
}