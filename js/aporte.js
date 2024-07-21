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
    let primeiraSolucao = document.getElementById('primeiraSolucao').value;
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
    y = Math.abs(y - concentracaoGlicose);

    // Calculando os volumes W e Z
    const Z = (volumeRestante * x) / (x + y);
    const W = (volumeRestante * y) / (x + y);

    // Calculando a velocidade de infusão
    const velocidadeInfusao = aporteHidricoTotal / 24;

    // Calculando as calorias totais
    const caloriasTotais = ((vigTotalDia / 1000) * 3.4) / peso;

    const concentracaoreal = (vig * 144) / taxaHidrica;

    const gGlicose = vigTotalDia / 1000;

    // Calculando a osmolaridade
    const osmolaridade = (((gGlicose * 5.5) + (mEqTotalNa + mEqTotalK + mEqTotalCa + mEqTotalMg)) / aporteHidricoTotal) * 1000;

/*     <p>mg glicose total ao dia: ${vigTotalDia.toFixed(1)} mg/dia</p>  
    <p>g de glicose: ${gGlicose.toFixed(1)} g</p> 
    <p>mEq Ca: ${mEqTotalCa.toFixed(1)} mEq</p> 
    <p>Concentração de glicose restante: ${concentracaoGlicose.toFixed(1)}%</p>  
     <p>Volume restante: ${volumeRestante.toFixed(1)} ml</p>*/

    // Exibindo os resultados
    let resultado = `
        <p>Sódio: ${necessidadeSodio.toFixed(1)} mEq/kg/dia; Potássio: ${necessidadePotassio.toFixed(1)} mEq/kg/dia; Cálcio: ${necessidadeCalcio.toFixed(1)} mg/kg/dia; Magnésio: ${necessidadeMagnesio.toFixed(1)} mEq/kg/dia</p>
        <p>Aporte em: ${concentracaoreal.toFixed(1)}%</p> 
        <p>${primeiraSolucao}: ${W.toFixed(1)} ml</p>
        <p>${segundaSolucao}: ${Z.toFixed(1)} ml</p>
        
        
    
    `;

    if (necessidadeSodio) {
        resultado += `<p>Sódio (${concentracaoNaClText}):  ${volumeNaCl.toFixed(1)} ml</p>`;
    }
    if (necessidadePotassio) {
        resultado += `<p>Potássio (${concentracaoKClText}): ${volumeKCl.toFixed(1)} ml</p>`;
    }
    if (necessidadeCalcio) {
        resultado += `<p>Cálcio (${concentracaoCalcioText}): ${volumeCalcio.toFixed(1)} ml </p>`;
    }
    if (necessidadeMagnesio) {
        resultado += `<p>Magnésio (${concentracaoMgSO4Text}): ${volumeMgSO4.toFixed(1)} ml </p>`;
    }

    resultado += `
       
        <p>Calorias totais: ${caloriasTotais.toFixed(1)} kcal/kg/dia</p>
        <p>Osmolaridade: ${osmolaridade.toFixed(0)} mOsm/l</p>
        <p>Aporte hídrico total: ${aporteHidricoTotal.toFixed(1)} ml/dia</p>
        <p>Velocidade de infusão: ${velocidadeInfusao.toFixed(1)} ml/h</p>
    `;

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
    } else if (primeiraSolucao === 'Glicose 5%') {
        for (let i = 0; i < segundaSolucao.options.length; i++) {
            if (segundaSolucao.options[i].value === 'Glicose 5%') {
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
        <img src="img/logocalped.png" alt="Logo" style="display: block; margin: 0 auto; width: 100px; height: auto;">
        <h2 style="text-align: center; font-weight: bold;">calped.com.br</h2>
        <h3 style="text-align: center; font-weight: bold;">Aporte Calórico Neonatal</h3>
        <p style="font-weight: bold;">Hospital:__________________________________________________________</p>
        <p style="font-weight: bold;">Unidade de internação:_______________________________________________</p>
        <p style="font-weight: bold;">Registro:___________</p>
        <p style="font-weight: bold;">Leito:_____________</p>
        <p style="font-weight: bold;">Nome do paciente: ___________________________________________________</p>
        <p>Data: ${date}</p>
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