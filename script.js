document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu');

    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('nav-active');
    });
});