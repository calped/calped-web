document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.main-nav ul');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show'); // Ensure the menu shows and hides on mobile
    });
});

