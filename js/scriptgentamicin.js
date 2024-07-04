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
    const idadeGestacional = parseInt(document.getElementById('idadeGestacional').value);
    const idadePosNatal = parseInt(document.getElementById('idadePosNatal').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const apresentacao = document.getElementById('apresentacao').value;
    const condicao = document.getElementById('condicao').value;

    let dosagem = 0;
    let intervalo = '';
    let doseMg = 0;

    if (condicao === 'extended_interval') {
        dosagem = 5;
        intervalo = 'a cada 36 horas';
    } else if (condicao === 'standard_dosing') {
        if (idadeGestacional <= 29) {
            if (idadePosNatal <= 7) {
                dosagem = 5;
                intervalo = 'a cada 48 horas';
            } else if (idadePosNatal <= 28) {
                dosagem = 4;
                intervalo = 'a cada 36 horas';
            } else {
                dosagem = 4;
                intervalo = 'a cada 24 horas';
            }
        } else if (idadeGestacional <= 34) {
            if (idadePosNatal <= 7) {
                dosagem = 4.5;
                intervalo = 'a cada 36 horas';
            } else {
                dosagem = 4;
                intervalo = 'a cada 24 horas';
            }
        } else {
            dosagem = 4;
            intervalo = 'a cada 24 horas';
        }
    }

    doseMg = peso * dosagem;
    let volumeMl;

    switch (apresentacao) {
        case '20mg/ml':
            volumeMl = doseMg / 20;
            break;
        case '40mg/ml':
            volumeMl = doseMg / 40;
            break;
        case '80mg/2ml':
            volumeMl = doseMg / 40;
            break;
        default:
            volumeMl = 0;
    }

    document.getElementById('resultado').innerHTML = `
        <div class="result-box">
            <p><strong>Dosagem:</strong> ${dosagem} mg/kg/dose</p>
            <p><strong>Intervalo:</strong> ${intervalo}</p>
            <p><strong>Unidades Totais:</strong> ${doseMg.toFixed(2)} mg</p>
            <p><strong>Volume a Administrar:</strong> ${volumeMl.toFixed(2)} mL</p>
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
