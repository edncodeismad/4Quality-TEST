

toggle = document.getElementById('nav-toggle');
responsiveNavLinks = document.getElementById('responsive-nav-links');

var navIsHidden = true;

toggleNav = () => {
    if (navIsHidden) {
        responsiveNavLinks.style.marginLeft = 0;
        //responsiveNavLinks.classList.add('nav-visible');
        //responsiveNavLinks.classList.remove('nav-hideen');
        toggle.innerHTML = "<img src=\"xmark.svg\">";
    } else {
        responsiveNavLinks.style.marginLeft = "100vw";
        //responsiveNavLinks.classList.add('nav-hidden');
        //responsiveNavLinks.classList.remove('nav-visible');
        toggle.innerHTML = "<img src=\"bars.svg\">";
    }

    navIsHidden = !navIsHidden;
}


toggle.addEventListener("click", toggleNav);
