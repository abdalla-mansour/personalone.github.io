// Navigation bar effects on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
// Scroll To top Button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTo = 0;
    document.documentElement.scrollTop = 0;
});
// Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});
// Responsive Navigation Menu Toogle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
// Common reveal options to create reveal animations
ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 100
});
// Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.nav-bar .logo', { delay: 800, origin: 'left' });
ScrollReveal().reveal('.nav-bar .nav-items .active', { delay: 900, origin: 'bottom' });
ScrollReveal().reveal('.nav-bar .nav-items', { delay: 1300, origin: 'bottom' });

ScrollReveal().reveal('.home .info h2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.home-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.home .scroll-down', { delay: 800, origin: 'top' });

ScrollReveal().reveal('.section-title-01', { delay: 800, origin: 'top' });
ScrollReveal().reveal('.section-title-02', { delay: 500, origin: 'bottom' });

ScrollReveal().reveal('.about .about-img', { delay: 900, origin: 'top' });
ScrollReveal().reveal('.about .description h3, .about .description h4', { delay: 800, origin: 'right' });
ScrollReveal().reveal('.about .description p', { delay: 800, origin: 'left' });
ScrollReveal().reveal('.about .list-item h3', { delay: 700, origin: 'top' });
ScrollReveal().reveal('.about .list-item span', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.about .btn', { delay: 900, origin: 'bottom' });

ScrollReveal().reveal('.skills .skills-description h3', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.skills .skills-description p', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.skills .education', { delay: 900, origin: 'bottom' });
ScrollReveal().reveal('.skills .skills-info', { delay: 900, origin: 'bottom' });

ScrollReveal().reveal('.services .services-description', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.services .services-list', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.services .services-list h3', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.services .services-list .learn-more-btn', { delay: 700, origin: 'right' });

ScrollReveal().reveal('.portfolio .portfolio-list', { delay: 700, origin: 'bottom' });

ScrollReveal().reveal('.get-in-touch .title h4', { delay: 1200, origin: 'left' });
ScrollReveal().reveal('.get-in-touch .title h3', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.get-in-touch .title h2', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.get-in-touch .contact-btn', { delay: 700, origin: 'bottom' });

ScrollReveal().reveal('.contact .contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.contact .contact-list h3, .contact .contact-list span', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.contact .contact-right p', { delay: 900, origin: 'left' });
ScrollReveal().reveal('.contact .first-row', { delay: 500, origin: '' });
ScrollReveal().reveal('.contact .second-row', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.contact .btn', { delay: 900, origin: 'bottom' });

ScrollReveal().reveal('.footer-container h2', { delay: 900, origin: 'top' });
ScrollReveal().reveal('.footer-container p', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.footer-container a', { delay: 1000, origin: 'left' });
ScrollReveal().reveal('.footer-container h3', { delay: 700, origin: 'top' });