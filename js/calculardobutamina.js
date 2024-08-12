function calcularDobutamina() {
    const peso = parseFloat(document.getElementById('peso').value);
    const dose = parseFloat(document.getElementById('dose').value);
    const solucao = document.getElementById('solucao').value;
    const volumeDiluir = parseFloat(document.getElementById('volumeDiluir').value);
    const volumeEquipo = parseFloat(document.getElementById('volumeEquipo').value);

    if (isNaN(peso) || isNaN(dose) || isNaN(volumeDiluir) || isNaN(volumeEquipo)) {
        document.getElementById('resultado').innerHTML = '<p>Por favor, preencha todos os campos corretamente.</p>';
        return;
    }

    const doseCalculada = (peso * dose * 1440) / 12500;
    const doseDiluente = volumeDiluir - doseCalculada;

    // Calcular o fator de correção
    const fatorCorrecao = (volumeEquipo / (doseCalculada + doseDiluente)) + 1;

    // Calcular as doses finais com o fator de correção
    const doseFinalDobutamina = doseCalculada * fatorCorrecao;
    const doseFinalDiluente = doseDiluente * fatorCorrecao;
    const velocidade = volumeDiluir/24;

    let resultado = `
        <p>Peso: ${peso} kg</p>
        <p>Dose: ${dose} mcg/kg/min</p>
        <p>Solução para Diluição: ${solucao}</p>
        <p>Volume para Diluir: ${volumeDiluir} ml</p>
        <p>Volume do Equipo: ${volumeEquipo} ml</p>
        <p>Fator de Correção: ${fatorCorrecao.toFixed(2)}</p>
        <p>Dobutamina: ${doseFinalDobutamina.toFixed(2)} ml</p>
        <p>${solucao}: ${doseFinalDiluente.toFixed(2)} ml</p>
        <p>Velocidade de infusão: ${velocidade.toFixed(1)} ml/h</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}

function visualizarImpressao() {
    const peso = document.getElementById('peso').value;
    const dose = document.getElementById('dose').value;
    const solucao = document.getElementById('solucao').value;
    const volumeDiluir = document.getElementById('volumeDiluir').value;
    const volumeEquipo = document.getElementById('volumeEquipo').value;
    const resultado = document.getElementById('resultado').innerHTML;

    const date = new Date().toLocaleDateString();

    const printContent = `
        <div>
            <img src="img/logocalped.png" alt="Logo" style="display: block; margin: 0 auto; width: 100px; height: auto;">
            <h2 style="text-align: center; font-weight: bold;">calped.com.br</h2>
            <h3 style="text-align: center; font-weight: bold;">Prescrição de Dobutamina</h3>
            <p style="font-weight: bold;">Hospital:__________________________________________________________</p>
            <p style="font-weight: bold;">Unidade de internação:_______________________________________________</p>
            <p style="font-weight: bold;">Registro:___________</p>
            <p style="font-weight: bold;">Leito:_____________</p>
            <p style="font-weight: bold;">Nome do paciente: ___________________________________________________</p>
            <p>Data: ${date}</p>
            ${resultado}
        </div>
    `;

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();

    // Adicionando um botão para impressão na janela de visualização
    const printButton = printWindow.document.createElement('button');
    printButton.innerText = 'Imprimir';
    printButton.onclick = function() {
        printButton.style.display = 'none'; // Ocultar o botão antes de imprimir
        printWindow.print();
        printButton.style.display = 'block'; // Mostrar o botão novamente após a impressão
    };
    printWindow.document.body.appendChild(printButton);
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('peso').addEventListener('input', calcularDobutamina);
    document.getElementById('dose').addEventListener('input', calcularDobutamina);
    document.getElementById('solucao').addEventListener('change', calcularDobutamina);
    document.getElementById('volumeDiluir').addEventListener('change', calcularDobutamina);
    document.getElementById('volumeEquipo').addEventListener('input', calcularDobutamina);
    calcularDobutamina();
});

document.getElementById('copyright-year').textContent = new Date().getFullYear();
