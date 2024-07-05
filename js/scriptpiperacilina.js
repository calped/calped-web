function calcularDosagem() {
    const idadeGestacional = parseInt(document.getElementById('idadeGestacional').value);
    const idadePosNatal = parseInt(document.getElementById('idadePosNatal').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const dose = parseInt(document.getElementById('dose').value);
    const apresentacao = document.getElementById('apresentacao').value;

    let intervalo = '';
    let concentracao = 0;

    // Determina o intervalo de dosagem com base na idade gestacional e idade pós-natal
    if (idadeGestacional <= 29) {
        intervalo = idadePosNatal <= 28 ? 'a cada 12 horas' : 'a cada 8 horas';
    } else if (idadeGestacional <= 36) {
        intervalo = idadePosNatal <= 14 ? 'a cada 12 horas' : 'a cada 8 horas';
    } else if (idadeGestacional <= 44) {
        intervalo = idadePosNatal <= 7 ? 'a cada 12 horas' : 'a cada 8 horas';
    } else {
        intervalo = 'a cada 6 horas';
    }

    if (apresentacao === '2_25g_10ml') {
        concentracao = 2.25 / 11.5; // 2,25g/11.5ml
    } else if (apresentacao === '4_5g_20ml') {
        concentracao = 4.5 / 23; // 4,5g/23ml
    }

    const doseMg = peso * dose;
    const volumeMl = doseMg / (concentracao * 1000);

    document.getElementById('resultado').innerHTML = `
        <div class="result-box">
            <p><strong>Dosagem:</strong> ${dose} mg/kg/dose</p>
            <p><strong>Intervalo:</strong> ${intervalo}</p>
            <p><strong>Unidades Totais:</strong> ${doseMg.toFixed(2)} mg</p>
            <p><strong>Volume a Administrar:</strong> ${volumeMl.toFixed(2)} mL</p>
        </div>
    `;
}
