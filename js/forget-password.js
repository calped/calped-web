document.addEventListener('DOMContentLoaded', function() {
    const auth = firebase.auth();
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const resetMessage = document.getElementById('resetMessage');

    resetPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;

        auth.sendPasswordResetEmail(email)
            .then(() => {
                resetMessage.style.color = 'green';
                resetMessage.textContent = 'E-mail de redefinição de senha enviado!';
            })
            .catch((error) => {
                resetMessage.style.color = 'red';
                switch (error.code) {
                    case 'auth/invalid-email':
                        resetMessage.textContent = 'O formato do e-mail fornecido é inválido.';
                        break;
                    case 'auth/user-not-found':
                        resetMessage.textContent = 'Usuário não encontrado. Verifique o e-mail.';
                        break;
                    default:
                        resetMessage.textContent = 'Erro ao enviar o e-mail de redefinição.';
                        break;
                }
            });
    });
});
