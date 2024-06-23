document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.main-nav ul');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    const form = document.getElementById('calculatorForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const birthDateTime = new Date(document.getElementById('birthDateTime').value);
        const now = new Date();

        const diffMs = now - birthDateTime;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffMonths = Math.floor(diffDays / 30.4375);
        const diffYears = Math.floor(diffMonths / 12);
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const remainingMonths = diffMonths % 12;
        const remainingDays = diffDays % 30.4375;
        const remainingHours = diffHours % 24;

        resultDiv.innerHTML = `
            <p><strong>Idade em horas:</strong> ${diffHours}</p>
            <p><strong>Idade em dias:</strong> ${diffDays}</p>
            <p><strong>Idade em meses:</strong> ${diffMonths}</p>
            <p><strong>Idade em anos:</strong> ${diffYears}</p>
            <p><strong>Idade completa:</strong> ${diffYears} anos, ${remainingMonths} meses, ${remainingDays.toFixed(0)} dias, ${remainingHours} horas</p>
        `;
    });
});
