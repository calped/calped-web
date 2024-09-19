
document.addEventListener('DOMContentLoaded', function() {
    const auth = firebase.auth();

    // Verifica o estado de autenticação do usuário
    auth.onAuthStateChanged(function(user) {
        if (!user) {
            // Redirecionar para a página de login se não estiver logado
            window.location.href = 'login.html';
        }
    });

    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const resetMessage = document.getElementById('resetMessage');

    // Envio do formulário de redefinição de senha
    resetPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;

        auth.sendPasswordResetEmail(email)
            .then(() => {
                resetMessage.style.color = 'green';
                resetMessage.textContent = 'Email de redefinição de senha enviado!';
            })
            .catch((error) => {
                resetMessage.style.color = 'red';
                switch (error.code) {
                    case 'auth/invalid-email':
                        resetMessage.textContent = 'Email inválido.';
                        break;
                    case 'auth/user-not-found':
                        resetMessage.textContent = 'Usuário não encontrado.';
                        break;
                    default:
                        resetMessage.textContent = 'Erro ao enviar email de redefinição de senha.';
                        break;
                }
            });
    });
});
