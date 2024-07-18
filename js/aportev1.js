function calcularAporte() {
    const peso = parseFloat(document.getElementById('peso').value);
    const taxaHidrica = parseFloat(document.getElementById('taxaHidrica').value);
    const vig = parseFloat(document.getElementById('vig').value);
    const necessidadeSodio = parseFloat(document.getElementById('necessidadeSodio').value);
    const concentracaoNaCl = parseFloat(document.getElementById('concentracaoNaCl').value);
    const necessidadePotassio = parseFloat(document.getElementById('necessidadePotassio').value);
    const concentracaoKCl = parseFloat(document.getElementById('concentracaoKCl').value);
    const necessidadeCalcio = parseFloat(document.getElementById('necessidadeCalcio').value);
    const concentracaoCalcio = parseFloat(document.getElementById('concentracaoCalcio').value);
    const necessidadeMagnesio = parseFloat(document.getElementById('necessidadeMagnesio').value);
    const concentracaoMgSO4 = parseFloat(document.getElementById('concentracaoMgSO4').value);
    const primeiraSolucao = document.getElementById('primeiraSolucao').value;
    const segundaSolucao = document.getElementById('segundaSolucao').value;

    // Calculando o aporte hídrico total
    const aporteHidricoTotal = peso * taxaHidrica;

    // Calculando a VIG total ao dia
    const vigTotalDia = peso * vig * 1440;

    // Calculando o volume de NaCl necessário
    const mEqTotalNa = peso * necessidadeSodio;
    const volumeNaCl = necessidadeSodio ? (mEqTotalNa / concentracaoNaCl) : 0;

    // Obter a descrição da concentração de NaCl selecionada
    const concentracaoNaClText = document.getElementById('concentracaoNaCl').options[document.getElementById('concentracaoNaCl').selectedIndex].text;

    // Calculando o volume de KCl necessário
    const mEqTotalK = peso * necessidadePotassio;
    const volumeKCl = necessidadePotassio ? (mEqTotalK / concentracaoKCl) : 0;

    // Obter a descrição da concentração de KCl selecionada
    const concentracaoKClText = document.getElementById('concentracaoKCl').options[document.getElementById('concentracaoKCl').selectedIndex].text;

    // Calculando o volume de cálcio necessário
    const mgTotalCa = peso * necessidadeCalcio;
    const volumeCalcio = necessidadeCalcio ? (mgTotalCa / concentracaoCalcio) : 0;

    // Obter a descrição da concentração de cálcio selecionada
    const concentracaoCalcioText = document.getElementById('concentracaoCalcio').options[document.getElementById('concentracaoCalcio').selectedIndex].text;

    // Calculando o volume de MgSO4 necessário
    const mEqTotalMg = peso * necessidadeMagnesio;
    const volumeMgSO4 = necessidadeMagnesio ? (mEqTotalMg / concentracaoMgSO4) : 0;

    // Obter a descrição da concentração de MgSO4 selecionada
    const concentracaoMgSO4Text = document.getElementById('concentracaoMgSO4').options[document.getElementById('concentracaoMgSO4').selectedIndex].text;

    // Calculando o volume restante após medicamentos
    const volumeRestante = aporteHidricoTotal - (volumeNaCl + volumeKCl + volumeCalcio + volumeMgSO4);

    // Calculando a concentração de glicose
    const concentracaoGlicose = (vig * peso * 144) / volumeRestante;

    // Calculando os valores x e y para as soluções
    let x = primeiraSolucao === 'AD' ? 0 : 5;
    let y;
    switch (segundaSolucao) {
        case 'AD':
            y = 0;
            break;
        case 'Glicose 5%':
            y = 5;
            break;
        case 'Glicose 10%':
            y = 10;
            break;
        case 'Glicose 25%':
            y = 25;
            break;
        case 'Glicose 50%':
            y = 50;
            break;
    }

    x = Math.abs(concentracaoGlicose - x);
    y = Math.abs(concentracaoGlicose - y);

    // Calculando os volumes W e Z
    const W = (volumeRestante * x) / (x + y);
    const Z = (volumeRestante * y) / (x + y);

    // Calculando a velocidade de infusão
    const velocidadeInfusao = aporteHidricoTotal / 24;

    // Calculando a osmolaridade
    const osmolaridade = ((((vigTotalDia / 1000) * 5.5) + mEqTotalNa + mEqTotalK + (mgTotalCa / 20) + mEqTotalMg) / aporteHidricoTotal) * 1000;

    // Calculando as calorias totais
    const caloriasTotais = ((vigTotalDia / 1000) * 3.4) / peso;

    // Exibindo os resultados
    let resultado = `
        <p>Primeira solução (${primeiraSolucao}): ${W.toFixed(2)} ml</p>
        <p>Segunda solução (${segundaSolucao}): ${Z.toFixed(2)} ml</p>
        <p>Concentração de glicose: ${concentracaoGlicose.toFixed(2)}%</p> 
        <p>mg glicose total ao dia: ${vigTotalDia.toFixed(2)} mg/dia</p>      
    `;
    
    if (necessidadeSodio) {
        resultado += `<p>Volume de NaCl: ${volumeNaCl.toFixed(2)} ml/dia (${concentracaoNaClText})</p>`;
    }
    if (necessidadePotassio) {
        resultado += `<p>Volume de KCl: ${volumeKCl.toFixed(2)} ml/dia (${concentracaoKClText})</p>`;
    }
    if (necessidadeCalcio) {
        resultado += `<p>Volume de cálcio: ${volumeCalcio.toFixed(2)} ml/dia (${concentracaoCalcioText})</p>`;
    }
    if (necessidadeMagnesio) {
        resultado += `<p>Volume de MgSO4: ${volumeMgSO4.toFixed(2)} ml/dia (${concentracaoMgSO4Text})</p>`;
    }
   
    resultado += `
        <p>Volume restante: ${volumeRestante.toFixed(2)} ml</p>
        <p>Calorias totais: ${caloriasTotais.toFixed(2)} kcal/kg/dia</p>
         <p>Osmolaridade: ${osmolaridade.toFixed(2)} mOsm/L</p>
        <p>Aporte hídrico total: ${aporteHidricoTotal.toFixed(2)} ml/dia</p>
        <p>Velocidade de infusão: ${velocidadeInfusao.toFixed(2)} ml/h</p>
       
        
    `;

    document.getElementById('resultado').innerHTML = resultado;
}

function atualizarSegundaSolucao() {
    const primeiraSolucao = document.getElementById('primeiraSolucao').value;
    const segundaSolucao = document.getElementById('segundaSolucao');

    for (let i = 0; i < segundaSolucao.options.length; i++) {
        segundaSolucao.options[i].disabled = false;
    }

    if (primeiraSolucao === 'AD') {
        for (let i = 0; i < segundaSolucao.options.length; i++) {
            if (segundaSolucao.options[i].value === 'AD') {
                segundaSolucao.options[i].disabled = true;
            }
        }
    } else if (primeiraSolucao === 'Glicose 5%') {
        for (let i = 0; i < segundaSolucao.options.length; i++) {
            if (segundaSolucao.options[i].value === 'Glicose 5%') {
                segundaSolucao.options[i].disabled = true;
            }
        }
    }
    calcularAporte();
}

function visualizarImpressao() {
    const peso = document.getElementById('peso').value;
    const taxaHidrica = document.getElementById('taxaHidrica').value;
    const vig = document.getElementById('vig').value;
    const resultado = document.getElementById('resultado').innerHTML;

    const date = new Date().toLocaleDateString();

    const printContent = `
    <div>
        <img src="img/logocalped.png" alt="Logo" style="display: block; margin: 0 auto; width: 100px; height: auto;">
        <h2 style="text-align: center; font-weight: bold;">calped.com.br</h2>
        <h3 style="text-align: center; font-weight: bold;">Aporte Calórico Neonatal</h3>
        <p style="font-weight: bold;">Hospital:__________________________________________________________</p>
        <p>Unidade de internação:_______________________________________________</p>
        <p>Registro:___________</p>
        <p>Leito:_____________</p>
        <p>Data: ${date}</p>
        <p>Nome do paciente: ___________________________________________________</p>
        <p>Peso: ${peso} kg</p>
        <p>Taxa hídrica: ${taxaHidrica} ml/kg/dia</p>
        <p>VIG: ${vig} mg/kg/min</p>
        ${resultado}
        <button onclick="window.print()">Imprimir</button>
    </div>
`;

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
}

// Adicionando os eventos de mudança para calcular automaticamente
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('concentracaoNaCl').addEventListener('change', calcularAporte);
    document.getElementById('concentracaoKCl').addEventListener('change', calcularAporte);
    document.getElementById('concentracaoCalcio').addEventListener('change', calcularAporte);
    document.getElementById('concentracaoMgSO4').addEventListener('change', calcularAporte);
    document.getElementById('peso').addEventListener('input', calcularAporte);
    document.getElementById('taxaHidrica').addEventListener('input', calcularAporte);
    document.getElementById('necessidadeSodio').addEventListener('input', calcularAporte);
    document.getElementById('necessidadePotassio').addEventListener('input', calcularAporte);
    document.getElementById('necessidadeCalcio').addEventListener('input', calcularAporte);
    document.getElementById('necessidadeMagnesio').addEventListener('input', calcularAporte);
    document.getElementById('primeiraSolucao').addEventListener('change', atualizarSegundaSolucao);
    document.getElementById('segundaSolucao').addEventListener('change', calcularAporte);
});
