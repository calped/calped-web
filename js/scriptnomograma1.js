document.getElementById('atualizar').addEventListener('click', function () {
    const solucaoX = parseFloat(document.getElementById('solucaoX').value) || 0;
    const volumeX = parseFloat(document.getElementById('volumeX').value) || 0;

    const solucaoY = parseFloat(document.getElementById('solucaoY').value) || 0;
    const volumeY = parseFloat(document.getElementById('volumeY').value) || 0;

    const volumeZ = parseFloat(document.getElementById('volumeZ').value) || 0;
    const peso = parseFloat(document.getElementById('peso').value) || 1;

    // Calcular a quantidade de glicose em mg para cada solução
    const quantidadeGlicoseX = solucaoX * volumeX * 10;  // Convertendo g/100ml para mg/ml
    const quantidadeGlicoseY = solucaoY * volumeY * 10;  // Convertendo g/100ml para mg/ml
    const quantidadeTotalGlicose = quantidadeGlicoseX + quantidadeGlicoseY;

    // Calcular o volume total da solução misturada
    const volumeTotal = volumeX + volumeY + volumeZ;

    // Calcular a concentração final da solução em %
    const concentracaoFinal = quantidadeTotalGlicose / volumeTotal / 10;

    // Calcular a VIG final em mg/kg/min
    const VIG = quantidadeTotalGlicose / (peso * 1440);

    // Atualizar o gráfico com os novos valores
    updateChart(volumeX, volumeY, concentracaoFinal, VIG);
});

document.getElementById('limpar').addEventListener('click', function () {
    document.getElementById('solucaoX').value = 5; // Reset para Glicose 5%
    document.getElementById('volumeX').value = 0;
    document.getElementById('solucaoY').value = 50; // Reset para Glicose 50%
    document.getElementById('volumeY').value = 0;
    document.getElementById('volumeZ').value = 0;
    document.getElementById('peso').value = 1;
    clearChart();
    updateLabels(); // Atualiza os labels de acordo com a seleção padrão
});

document.getElementById('solucaoX').addEventListener('change', updateLabels);
document.getElementById('solucaoY').addEventListener('change', updateLabels);

function updateLabels() {
    const solucaoXLabel = document.querySelector("label[for='volumeX']");
    const solucaoYLabel = document.querySelector("label[for='volumeY']");

    const solucaoXText = document.getElementById('solucaoX').options[document.getElementById('solucaoX').selectedIndex].text;
    const solucaoYText = document.getElementById('solucaoY').options[document.getElementById('solucaoY').selectedIndex].text;

    solucaoXLabel.textContent = `Volume ${solucaoXText} (ml):`;
    solucaoYLabel.textContent = `Volume ${solucaoYText} (ml):`;

    updateChartLabels(solucaoXText, solucaoYText);
}

function updateChartLabels(labelX, labelY) {
    if (chart) {
        chart.options.scales.x.title.text = `Volume ${labelX} (ml)`;
        chart.options.scales.y.title.text = `Volume ${labelY} (ml)`;
        chart.update();
    }
}

let chart;

function updateChart(volumeX, volumeY, concentracaoFinal, VIG) {
    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Soluções X e Y',
                data: [{
                    x: volumeX,
                    y: volumeY,
                    r: 10  // Radius of the point for better visibility
                }],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                pointRadius: 5
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Volume Solução X (ml)'  // Este rótulo será atualizado dinamicamente
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Volume Solução Y (ml)'  // Este rótulo será atualizado dinamicamente
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const conc = `Concentração: ${concentracaoFinal.toFixed(2)}%`;
                            const vig = `VIG: ${VIG.toFixed(2)} mg/kg/min`;
                            return [`${conc}`, `${vig}`];
                        }
                    }
                }
            }
        }
    });

    updateLabels();  // Atualizar labels no gráfico após criação
}

function clearChart() {
    if (chart) {
        chart.destroy();
    }
}
