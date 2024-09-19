document.addEventListener('DOMContentLoaded', function() {
    const auth = firebase.auth();

    // Verifica se o usuário está autenticado
    auth.onAuthStateChanged(function(user) {
        if (!user) {
            // Redireciona para a página de login se não estiver logado
            window.location.href = 'login.html';
        }
    });
});
