function logout() {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Erro ao deslogar:', error);
    });
}

// Expor a função globalmente
window.logout = logout;
