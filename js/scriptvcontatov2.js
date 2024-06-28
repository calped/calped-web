document.addEventListener('DOMContentLoaded', function() {
    // Função para envio do formulário de contato
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (form) { // Verifica se o formulário existe na página
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    formMessage.textContent = 'Obrigado por entrar em contato. Responderemos em breve!';
                    formMessage.style.color = 'green';
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwnProperty.call(data, 'errors')) {
                            formMessage.textContent = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            formMessage.textContent = 'Ops! Ocorreu um erro ao enviar sua mensagem.';
                        }
                        formMessage.style.color = 'red';
                    })
                }
            }).catch(error => {
                formMessage.textContent = 'Ops! Ocorreu um erro ao enviar sua mensagem.';
                formMessage.style.color = 'red';
            });
        });
    }

    // Função para o menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.main-nav ul');

    if (menuToggle && menu) { // Verifica se o menuToggle e o menu existem na página
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menu.classList.toggle('show');
        });
    }
});

// Função para copiar o email do PIX
function copyPixEmail() {
    const pixEmail = document.getElementById('pix-email').textContent;
    navigator.clipboard.writeText(pixEmail).then(() => {
        alert('Email do PIX copiado para a área de transferência');
    }).catch(err => {
        alert('Erro ao copiar o email do PIX: ', err);
    });
}
