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
    const volumeDieta = parseFloat(document.getElementById('volumeDieta').value); // Novo campo

    let primeiraSolucao = document.getElementById('primeiraSolucao').value;
    const segundaSolucao = document.getElementById('segundaSolucao').value;

    // Calcular o volume da dieta dividido pelo peso
    const volumeDietaPorPeso = volumeDieta / peso;

    // Subtrair esse valor da taxa hídrica
    const taxaHidricaAjustada = taxaHidrica - volumeDietaPorPeso;

    // Calculando o aporte hídrico total usando a taxa hídrica ajustada
    const aporteHidricoTotal = peso * taxaHidricaAjustada;

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

    // Transformando mgTotalCa em mEq de cálcio
    const meqPorMlCalcio = 0.465; // 1 ml de cálcio equivale a 0.465 mEq
    const mEqTotalCa = (mgTotalCa * meqPorMlCalcio) / 100;

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

    // Condicional para habilitar a primeira solução como AD se a concentração de glicose for menor que 5%
    if (concentracaoGlicose < 5 && primeiraSolucao !== 'AD') {
        primeiraSolucao = 'AD';
        document.getElementById('primeiraSolucao').value = 'AD';
        atualizarSegundaSolucao(); // Atualiza a segunda solução conforme a nova configuração da primeira solução
        calcularAporte(); // Recalcula o aporte após a atualização da primeira solução
        return;
    }

    // Calculando os valores x e y para as soluções
    let x = primeiraSolucao === 'AD' ? 0 : 5;
    let y;
    switch (segundaSolucao) {
        case 'GLICOSE 5%':
            y = 5;
            break;
        case 'GLICOSE 10%':
            y = 10;
            break;
        case 'GLICOSE 25%':
            y = 25;
            break;
        case 'GLICOSE 50%':
            y = 50;
            break;
    }

    x = Math.abs(concentracaoGlicose - x);
    y = Math.abs(y - concentracaoGlicose);

    // Calculando os volumes W e Z
    const Z = (volumeRestante * x) / (x + y);
    const W = (volumeRestante * y) / (x + y);

    // Calculando a velocidade de infusão
    const velocidadeInfusao = aporteHidricoTotal / 24;

    // Calculando as calorias totais
    const caloriasTotais = ((vigTotalDia / 1000) * 3.4) / peso;

    const concentracaoreal = (vig * 144) / taxaHidricaAjustada;

    const gGlicose = vigTotalDia / 1000;

    // Calculando a osmolaridade
    const osmolaridade = (((gGlicose * 5.5) + (mEqTotalNa + mEqTotalK + mEqTotalCa + mEqTotalMg)) / aporteHidricoTotal) * 1000;

/// Exibindo os resultados
let resultadoEletrólitos = '';

// Adicionando os eletrólitos se forem prescritos
if (necessidadeSodio > 0) {
    resultadoEletrólitos += `<hr> Na⁺: ${necessidadeSodio.toFixed(1)} mEq/kg/dia; `;
}
if (necessidadePotassio > 0) {
    resultadoEletrólitos += `K⁺: ${necessidadePotassio.toFixed(1)} mEq/kg/dia; `;
}
if (necessidadeCalcio > 0) {
    resultadoEletrólitos += `Ca²⁺: ${necessidadeCalcio.toFixed(1)} mg/kg/dia; `;
}
if (necessidadeMagnesio > 0) {
    resultadoEletrólitos += `Mg²⁺: ${necessidadeMagnesio.toFixed(1)} mEq/kg/dia; `;
}

// Remover o último '; ' e fechar a tag <p> se houver algum eletrólito
if (resultadoEletrólitos.length > 0) {
    resultadoEletrólitos = `<p>${resultadoEletrólitos.slice(0, -2)}</p>`;  // Remove o último '; '
}

let resultado = '';
if (resultadoEletrólitos) {
    resultado += resultadoEletrólitos;
}

resultado += `
    <p>TAXA HÍDRICA TOTAL: ${taxaHidrica.toFixed(1)} ml/kg/dia - VOLUME DE DIETA/MEDICAÇÕES: ${volumeDietaPorPeso.toFixed(1)} ml/kg/dia = ${taxaHidricaAjustada.toFixed(1)} ml/kg/dia</p>
    <p>VIG: ${vig.toFixed(1)} mg/kg/min - APORTE EM: ${concentracaoreal.toFixed(1)}%</p><hr> 
    <p>${primeiraSolucao}: ${W.toFixed(1)} ml</p>
    <p>${segundaSolucao}: ${Z.toFixed(1)} ml</p>
`;

// Adicionando as concentrações e volumes de cada eletrólito se prescritos
if (necessidadeSodio > 0) {
    resultado += `<p>${concentracaoNaClText}: ${volumeNaCl.toFixed(1)} ml</p>`;
}
if (necessidadePotassio > 0) {
    resultado += `<p>${concentracaoKClText}: ${volumeKCl.toFixed(1)} ml</p>`;
}
if (necessidadeCalcio > 0) {
    resultado += `<p>${concentracaoCalcioText}: ${volumeCalcio.toFixed(1)} ml</p>`;
}
if (necessidadeMagnesio > 0) {
    resultado += `<p>${concentracaoMgSO4Text}: ${volumeMgSO4.toFixed(1)} ml</p><hr> `;
}

resultado += `
    <p>CALORIAS TOTAIS: ${caloriasTotais.toFixed(1)} kcal/kg/dia</p>
    <p>OSMOLARIDADE: ${osmolaridade.toFixed(0)} mOsm/l</p>
    <p>APORTE HÍDRICO TOTAL: ${aporteHidricoTotal.toFixed(1)} ml/dia</p>
    <p>VELOCIDADE DE INFUSÃO: ${velocidadeInfusao.toFixed(1)} ml/h</p><hr> <hr> 
`;



// Atualizando o conteúdo da div com o id 'resultado'
document.getElementById('resultado').innerHTML = resultado;

}
function atualizarSegundaSolucao() {
    const primeiraSolucao = document.getElementById('primeiraSolucao').value;
    const segundaSolucao = document.getElementById('segundaSolucao');

    // Remover a opção 'AD' da segunda solução
    for (let i = 0; i < segundaSolucao.options.length; i++) {
        if (segundaSolucao.options[i].value === 'AD') {
            segundaSolucao.options[i].remove();
        }
    }

    for (let i = 0; i < segundaSolucao.options.length; i++) {
        segundaSolucao.options[i].disabled = false;
    }

    if (primeiraSolucao === 'AD') {
        for (let i = 0; i < segundaSolucao.options.length; i++) {
            if (segundaSolucao.options[i].value === 'AD') {
                segundaSolucao.options[i].disabled = true;
            }
        }
    } else if (primeiraSolucao === 'GLICOSE 5%') {
        for (let i = 0; i < segundaSolucao.options.length; i++) {
            if (segundaSolucao.options[i].value === 'GLICOSE 5%') {
                segundaSolucao.options[i].disabled = true;
            }
        }
    }
}



function visualizarImpressao() {
    const peso = document.getElementById('peso').value;
    const taxaHidrica = document.getElementById('taxaHidrica').value;
    const vig = document.getElementById('vig').value;
    const resultado = document.getElementById('resultado').innerHTML;

    const date = new Date().toLocaleDateString();

    const printContent = `
    <div>
        <style>
            @media print {
                .no-print {
                    display: none;
                }
            }
        </style>
        <img src="img/logocalped.png" alt="Logo" style="display: block; margin: 0 auto; width: 100px; height: auto;">
       
        <h3 style="text-align: center; font-weight: bold;">Aporte Calórico Neonatal</h3>
        <p style="font-weight: bold;">Hospital:__________________________________________________________</p>
        <p style="font-weight: bold;">Unidade de internação:_______________________________________________</p>
        <p style="font-weight: bold;">Registro:___________</p>
        <p style="font-weight: bold;">Leito:_____________</p>
        <p style="font-weight: bold;">Nome do paciente: ___________________________________________________</p>
        <hr> <hr> 
        <p>DATA: ${date}</p>
        <p>PESO: ${peso} kg</p>
        
        ${resultado}
        <button class="no-print" onclick="window.print()">Imprimir</button>
        
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

