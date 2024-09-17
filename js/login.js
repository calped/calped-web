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
            // Exibir mensagem de erro
            loginMessage.textContent = error.message;
        });
});
