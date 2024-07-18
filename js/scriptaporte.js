function calcularAporte() {
    const peso = parseFloat(document.getElementById('peso').value);
    const taxaHidrica = parseFloat(document.getElementById('taxaHidrica').value);
    const necessidadeSodio = parseFloat(document.getElementById('necessidadeSodio').value);
    const concentracaoNaCl = parseFloat(document.getElementById('concentracaoNaCl').value);

    // Calculando o aporte hídrico total
    const aporteHidricoTotal = peso * taxaHidrica;

    // Calculando o volume de NaCl necessário
    const mEqTotalNa = peso * necessidadeSodio;
    const volumeNaCl = mEqTotalNa / concentracaoNaCl;

    // Exibindo os resultados
    document.getElementById('resultado').innerHTML = `
        <p>Aporte hídrico total: ${aporteHidricoTotal.toFixed(2)} ml/dia</p>
        <p>Volume de NaCl necessário: ${volumeNaCl.toFixed(2)} ml/dia</p>
    `;
}
