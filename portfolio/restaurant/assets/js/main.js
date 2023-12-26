// Activate the Carousel
var myCarousel = document.querySelector('#fullWidthCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000, 
    pause: 'hover',
    wrap: true
});


// navbar color
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');
    var navlink = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-solid');

            navlink.forEach(function(link) {
                link.classList.remove('lightNavlink');
            });
        } else {
            navbar.classList.remove('navbar-solid');
            navbar.classList.add('navbar-transparent');


            navlink.forEach(function(link) {
                link.classList.add('lightNavlink');
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var navItems = document.querySelectorAll('.navbar-nav .nav-item a');
    var button = document.querySelector('.btn');
    var menuBar = document.querySelector('.fa-bars');

    var originalButtonColor = getComputedStyle(button).backgroundColor;

    window.addEventListener('scroll', function () {
        if (window.innerWidth < 969) {
            navbar.style.backgroundColor = 'white'; 
        } else {
            navbar.style.backgroundColor = '';
        }

        if (window.scrollY > 80) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-scrolled');
            navItems.forEach(function (item) {
                item.style.color = 'black';
            });
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
            button.classList.remove('btn-outline-dark');
            button.classList.add('btn-outline-light');
            menuBar.style.color = 'black';
        } else {
            navbar.classList.remove('navbar-scrolled');
            navItems.forEach(function (item) {
                item.style.color = 'white';
            });
            button.style.backgroundColor = 'white';
            button.style.color = 'white';
            button.style.backgroundColor = originalButtonColor;
            menuBar.style.color = 'white';
        }
    });
});





