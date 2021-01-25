/* ======================== SHOW MENU  ===========================*/
// debugger
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        navmenu = document.getElementById(navId)
    // kiểm tra khác null thì thực hiện
    if (navmenu && toggle) {
        toggle.addEventListener('click' , ()=>{
            navmenu.classList.toggle('header__menu-show');
        })
    }

    /* cách 2 sử dụng hàm add và remove */
    /* toggle.addEventListener('click', () => {
        if (navmenu.classList.value.indexOf('header__menu-show') === -1) {
            navmenu.classList.add('header__menu-show');
        }
        else {
            navmenu.classList.remove('header__menu-show');
        }
    }) */

}
showMenu('header-toggle', 'nav-menu');

/* ======================== REMOVE MENU WHEN CLICK MENU LINK MOBILE ===========================*/
// debugger
const linklist = document.querySelectorAll('.header__menu-link');

const removemenulist = () => {
    const navmenu = document.getElementById('nav-menu');
    navmenu.classList.remove('header__menu-show');
    
}
linklist.forEach(element => {
    element.addEventListener('click',removemenulist);
});

