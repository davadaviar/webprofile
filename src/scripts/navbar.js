const menuBtn = document.querySelector('.menu-btn');
const navActive = document.querySelector('nav ul');

menuBtn.addEventListener('click', function() {
    navActive.classList.toggle('active');
})