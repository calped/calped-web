// Script para o Menu Responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.classList.toggle('active');

    // Atualiza o valor de aria-expanded
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
});

// Script para o Accordion
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Fecha outros accordions abertos
        accordionButtons.forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('active');
                btn.nextElementSibling.style.display = 'none';
            }
        });

        const accordionContent = button.nextElementSibling;

        // Toggle o display do conteúdo
        if (accordionContent.style.display === 'block') {
            accordionContent.style.display = 'none';
            button.classList.remove('active');
        } else {
            accordionContent.style.display = 'block';
            button.classList.add('active');
        }
    });
});

// Script para a Barra de Pesquisa
const searchBar = document.getElementById('search-bar');
const calculatorLinks = document.querySelectorAll('.accordion-content li');

searchBar.addEventListener('keyup', () => {
    const query = searchBar.value.toLowerCase();

    calculatorLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(query)) {
            link.style.display = 'list-item';
        } else {
            link.style.display = 'none';
        }
    });

    // Mostrar ou esconder os accordion items com base nos resultados da pesquisa
    accordionButtons.forEach(button => {
        const accordionContent = button.nextElementSibling;
        const visibleLinks = accordionContent.querySelectorAll('li[style="display: list-item;"]');

        if (visibleLinks.length > 0) {
            accordionContent.style.display = 'block';
            button.classList.add('active');
        } else {
            accordionContent.style.display = 'none';
            button.classList.remove('active');
        }
    });
});
