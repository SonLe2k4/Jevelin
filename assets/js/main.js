let menu_mobile = document.querySelector('.js-menu_mobile');
let spanOnMenu_mobile = document.querySelector('.menu_mobile-link span');
let bodyMenu_mobile = document.querySelector('.header-content-center');
let itemMenu_mobiles = document.querySelectorAll(`.main-menu li a`);
let social_Mobiles = document.querySelectorAll('.list-social__mobile li a');
let modal_mobile = document.querySelector('.modal_mobile');
let isShowMenuMobile = false
// toggle menu mobile 
function toggleMenuMobile() {
    if(isShowMenuMobile == false) {
        menu_mobile.classList.add('open')
        spanOnMenu_mobile.style.backgroundColor = 'transparent'
        bodyMenu_mobile.style.maxHeight = '85vh'
        modal_mobile.style.display = 'block'
        modal_mobile.style.opacity = '1'
        isShowMenuMobile = true
    } else {
        menu_mobile.classList.remove('open')
        spanOnMenu_mobile.style.backgroundColor = 'var(--black-68)'
        bodyMenu_mobile.style.maxHeight = '0'
        modal_mobile.style.display = 'none'
        modal_mobile.style.opacity = '0'
        isShowMenuMobile = false
    }
}
menu_mobile.addEventListener('click', toggleMenuMobile)
// hidden body menu mobile when click
function hiddenMenu_mobile() {
    menu_mobile.classList.remove('open')
    spanOnMenu_mobile.style.backgroundColor = 'var(--black-68)'
    bodyMenu_mobile.style.maxHeight = '0'
    modal_mobile.style.display = 'none'
    modal_mobile.style.opacity = '0'
    isShowMenuMobile = false
}
for(let itemMenu_mobile of itemMenu_mobiles) {
    itemMenu_mobile.addEventListener('click', hiddenMenu_mobile)
}
for(let social_Mobile of social_Mobiles) {
    social_Mobile.addEventListener('click', hiddenMenu_mobile)
}

modal_mobile.addEventListener('click', hiddenMenu_mobile)