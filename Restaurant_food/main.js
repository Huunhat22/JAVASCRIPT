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
/* debugger
const sectionlist = document.querySelectorAll('section[id]');

function activelink() {
    const scrollY = window.pageYOffset;

    sectionlist.forEach(element => {
        const sectionHeight = element.offsetHeight;
        const sectionTop = element.offsetTop - 50;
        sectionId = element.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.header__menu-link').classList.add('header__menu-activelink');
        } else {
            document.querySelector('.header__menu-link').classList.remove('header__menu-activelink');
        }
    })
}
window.addEventListener('scroll', activelink); */

/* ======================== BOX-SHADOW HEADER WHEN SCROLL===========================*/

function changeheader(){
    const scrollY = window.pageYOffset;
    const nav = document.querySelector('header');
    if( scrollY >= 200) {
        nav.classList.add('header__scroll');
    } else {
        nav.classList.remove('header__scroll');
    }
}

window.addEventListener('scroll',changeheader);

/* ======================== ===========================*/
function scrollTop(){
    const scrollTop = document.querySelector('scrolltop');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop);