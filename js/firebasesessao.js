// firebasesessao.js

// Não declare 'auth' novamente aqui

// Verificar o estado de autenticação
auth.onAuthStateChanged((user) => {
    if (!user) {
        // Redirecionar para a página de login se não estiver autenticado
        window.location.href = 'login.html';
    }
});

function logout() {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Erro ao deslogar:', error);
    });
}

// Expor a função 'logout' no escopo global, se necessário
window.logout = logout;
