// we are targeting the hamburger menu (notice the id mobile-menu)
const menu = document.querySelector('#mobile-menu');
// when you refer to classes you use '.classname'
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active'); //like, on-off
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click',mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#repo-page');

    let scrollPos = window.scrollY;
    //console.log(scrollPos)

    // adds the 'highlight' class to my meny items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return;
    }
    else if(window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) 
    || elem) {
        elem.classList.remove('highlight')
        return;
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// Close mobile menu after clicking on an item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)
