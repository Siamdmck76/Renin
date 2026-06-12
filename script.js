// Sticky Header Glassmorphism Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    // পেজ যখন 50px এর বেশি নিচে স্ক্রল হবে
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Mobile Hamburger Menu Logic
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');
const menuIcon = mobileMenu.querySelector('i');

mobileMenu.addEventListener('click', () => {
    // মেন্যু ওপেন বা ক্লোজ করা
    navLinks.classList.toggle('active');
    
    // আইকন পরিবর্তন করা (৩ দাগ থেকে 'X' এ)
    if(navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

// মেন্যুর কোনো লিংকে ক্লিক করলে যেন মেন্যু অটোমেটিক বন্ধ হয়ে যায়
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});