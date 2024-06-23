
        // Configuração do Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyD1pm1frtaatfCp6zljW4I8JWHvXDu0IBQ",
            authDomain: "calpedv1.firebaseapp.com",
            projectId: "calpedv1",
            storageBucket: "calpedv1.appspot.com",
            messagingSenderId: "555116152565",
            appId: "1:555116152565:web:fefe88fd6bbc007600a7bc",
            measurementId: "G-72H4MPJ1DQ"
        };

        // Inicializar Firebase
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();

        // Verificar o estado de autenticação
        firebase.auth().onAuthStateChanged((user) => {
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
    