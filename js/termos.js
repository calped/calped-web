function acceptTerms() {
    const user = firebase.auth().currentUser;

    if (user) {
        db.collection('users').doc(user.uid).set({
            acceptedTerms: true,
            acceptedTermsDate: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true })
        .then(() => {
            alert('Termos aceitos com sucesso!');
            window.location.href = 'index.html'; // Redireciona para a página principal após a aceitação
        })
        .catch((error) => {
            console.error('Erro ao aceitar os termos: ', error);
        });
    } else {
        alert('Você precisa estar logado para aceitar os termos.');
    }
}

// Verifica se o usuário está logado
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = 'login.html'; // Redireciona para a página de login se não estiver logado
    }
});
