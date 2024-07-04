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
    const condicao = document.getElementById('condicao').value;
    const apresentacao = document.getElementById('apresentacao').value;

    let dosagem = 0;
    let intervalo = '';
    let doseMg = 0;
    let concentracao = 0;

    if (condicao === 'termo_maior_28_dias') {
        dosagem = 50;
        intervalo = 'a cada 12 horas';
    } else if (condicao === 'termo_menor_28_dias') {
        dosagem = 30;
        intervalo = 'a cada 12 horas';
    } else if (condicao === 'meningite_infeccoes_graves') {
        dosagem = 50;
        intervalo = 'a cada 12 horas';
    }

    if (apresentacao === '1g_10ml') {
        concentracao = 100; // 1g/10ml -> 100mg/ml
    } else if (apresentacao === '1g_11.5ml') {
        concentracao = 87; // 1g/11.5ml -> 87mg/ml
    }

    doseMg = peso * dosagem;
    const volumeMl = doseMg / concentracao;

    document.getElementById('resultado').innerHTML = `
        <div class="result-box">
            <p><strong>Dosagem:</strong> ${dosagem} mg/kg/dose</p>
            <p><strong>Intervalo:</strong> ${intervalo}</p>
            <p><strong>Unidades Totais:</strong> ${doseMg.toFixed(2)} mg</p>
            <p><strong>Volume a Administrar:</strong> ${volumeMl.toFixed(2)} mL</p>
        </div>
    `;
}
