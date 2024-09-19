// Script para o Login com Firebase
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Redirecionar para a página principal ou calculadoras após o login bem-sucedido
            window.location.href = 'calculadoras.html';
        })
        .catch((error) => {
            // Tratar diferentes tipos de erros
            switch (error.code) {
                case 'auth/invalid-email':
                    loginMessage.textContent = 'O formato do e-mail fornecido é inválido.';
                    break;
                case 'auth/user-disabled':
                    loginMessage.textContent = 'Este usuário foi desativado.';
                    break;
                case 'auth/user-not-found':
                    loginMessage.textContent = 'Usuário não encontrado. Verifique o e-mail digitado.';
                    break;
                case 'auth/wrong-password':
                    loginMessage.textContent = 'Senha incorreta. Por favor, tente novamente.';
                    break;
                default:
                    loginMessage.textContent = 'Erro ao fazer login. Verifique as credenciais.';
            }

            // Adicionar logging para depuração, se necessário
            console.log(`Error [${error.code}]: ${error.message}`);
        });
});
