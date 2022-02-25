function openMenu() {
    let menu = document.querySelector('#menu-area');
    let opener = document.querySelector('.menu-bars .fas');

    if(menu.style.width == '100vw') {
        menu.style.width = '0px';
        opener.classList.add('fa-bars');
        opener.classList.remove('fa-times');
    } else {
        menu.style.width = '100vw';
        opener.classList.remove('fa-bars');
        opener.classList.add('fa-times');
    }
}

window.onresize = function(){
    location.reload();
};