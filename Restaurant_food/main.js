/* ======================== SHOW MENU  ===========================*/
// debugger
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        navmenu = document.getElementById(navId)
    // kiểm tra khác null thì thực hiện
    if (navmenu && toggle) {
        toggle.addEventListener('click', () => {
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
const linklist = document.querySelectorAll('.header__menu-link');

const removemenulist = () => {
    const navmenu = document.getElementById('nav-menu');
    navmenu.classList.remove('header__menu-show');

}
linklist.forEach(element => {
    element.addEventListener('click', removemenulist);
});

/* ======================== ACTIVE COLOR LINK OF MENU ON HEADER WHEN SCROLL WINDOWS ===========================*/
const sectionlist = document.querySelectorAll('section[id]');

function activelink() {
    const scrollY = window.pageYOffset;

    sectionlist.forEach(element => {
        const sectionHeight = element.offsetHeight;
        const sectionTop = element.offsetTop - 50;
        sectionId = element.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.header__menu header__menu-list a[href*=' + sectionId + ']').classList.add('header__menu-activelink');
        } else {
            document.querySelector('.header__menu header__menu-list a[href*=' + sectionId + ']').classList.remove('header__menu-activelink');
        }
    })
}
window.addEventListener('scroll', activelink);