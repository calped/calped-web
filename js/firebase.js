document.addEventListener('DOMContentLoaded', function() {
    const auth = firebase.auth();
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                loginMessage.style.color = 'green';
                loginMessage.textContent = 'Login bem-sucedido!';
                setTimeout(() => {
                    window.location.href = 'calculadora.html';
                }, 1000);
            })
            .catch((error) => {
                loginMessage.style.color = 'red';
                switch (error.code) {
                    case 'auth/invalid-email':
                        loginMessage.textContent = 'Email inválido.';
                        break;
                    case 'auth/user-disabled':
                        loginMessage.textContent = 'Usuário desativado.';
                        break;
                    case 'auth/user-not-found':
                        loginMessage.textContent = 'Usuário não encontrado.';
                        break;
                    case 'auth/wrong-password':
                        loginMessage.textContent = 'Senha incorreta.';
                        break;
                    default:
                        loginMessage.textContent = 'Erro ao fazer login.';
                        break;
                }
            });
    });

    auth.onAuthStateChanged((user) => {
        if (user) {
            if (window.location.pathname.endsWith('login.html')) {
                window.location.href = 'calculadora.html';
            }
        } else {
            if (window.location.pathname.endsWith('calculadora.html')) {
                window.location.href = 'login.html';
            }
        }
    });
});
