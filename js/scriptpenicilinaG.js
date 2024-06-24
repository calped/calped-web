
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

        function calcularDosagem() {
            const idadeGestacional = document.getElementById('idadeGestacional').value;
            const idadePosNatal = document.getElementById('idadePosNatal').value;
            const peso = document.getElementById('peso').value;
            const condicao = document.getElementById('condicao').value;
            const diluente = document.getElementById('diluente').value;

            let dosagem = 0;
            let intervalo = '';
            let duracao = '';
            let unidadesTotais = 0;

            switch(condicao) {
                case 'antraz':
                    if (idadeGestacional <= 34) {
                        if (idadePosNatal <= 7) {
                            dosagem = 100000;
                            intervalo = 'a cada 12 horas';
                        } else {
                            dosagem = 100000;
                            intervalo = 'a cada 8 horas';
                        }
                    } else {
                        if (idadePosNatal <= 7) {
                            dosagem = 100000;
                            intervalo = 'a cada 8 horas';
                        } else {
                            dosagem = 100000;
                            intervalo = 'a cada 6 horas';
                        }
                    }
                    duracao = '2 a 3 semanas ou até estabilização';
                    break;
                case 'sifilis':
                    dosagem = 50000;
                    intervalo = 'a cada 12 horas (primeiros 7 dias) / a cada 8 horas (após 7 dias)';
                    duracao = '10 dias';
                    break;
                case 'streptococcus_bacteremia':
                    if (idadePosNatal <= 7) {
                        dosagem = 50000;
                        intervalo = 'a cada 12 horas';
                    } else {
                        dosagem = 50000;
                        intervalo = 'a cada 8 horas';
                    }
                    duracao = '10 dias';
                    break;
                case 'streptococcus_meningitis':
                    if (idadePosNatal <= 7) {
                        dosagem = 150000;
                        intervalo = 'a cada 8 horas';
                        duracao = '14 dias';
                    } else {
                        dosagem = 125000;
                        intervalo = 'a cada 6 horas';
                        duracao = '14 dias';
                    }
                    break;
                case 'bacteremia':
                    dosagem = 50000;
                    intervalo = 'a cada 12 horas';
                    break;
                case 'meningitis':
                    dosagem = 100000;
                    intervalo = 'a cada 8 horas';
                    break;
                default:
                    dosagem = 0;
                    intervalo = '';
                    duracao = '';
            }

            unidadesTotais = peso * dosagem;
            const volumeMl = (unidadesTotais / 5000000) * diluente;

            document.getElementById('resultado').innerHTML = `
                <div class="result-box">
                    <p><strong>Dosagem:</strong> ${dosagem} unidades/kg/dose</p>
                    <p><strong>Intervalo:</strong> ${intervalo}</p>
                    <p><strong>Duração:</strong> ${duracao}</p>
                    <p><strong>Unidades Totais:</strong> ${unidadesTotais} unidades</p>
                    <p><strong>Volume a Administrar:</strong> ${volumeMl.toFixed(2)} ml</p>
                </div>
            `;
        }

        // Função para o menu responsivo
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const menu = document.querySelector('.main-nav ul');

            if (menuToggle && menu) {
                menuToggle.addEventListener('click', function() {
                    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                    menuToggle.setAttribute('aria-expanded', !isExpanded);
                    menu.classList.toggle('show');
                });
            }
        });
    