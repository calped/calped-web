function checkTerms() {
    const user = firebase.auth().currentUser;
    
    if (user) {
        db.collection('users').doc(user.uid).get().then((doc) => {
            if (doc.exists && doc.data().acceptedTerms) {
                window.location.href = 'index.html'; // Redireciona para a página principal se os termos já foram aceitos
            } else {
                window.location.href = 'termos.html'; // Redireciona para a página de termos se ainda não foram aceitos
            }
        }).catch((error) => {
            console.error('Erro ao verificar os termos: ', error);
        });
    }
}

// Verifica se o usuário está logado e chama checkTerms
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        checkTerms();
    }
});
