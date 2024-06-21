document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

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

    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.main-nav ul');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
