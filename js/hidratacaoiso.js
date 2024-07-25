
        function atualizarOpcoes() {
            const solucao = document.getElementById('solucao').value;
            const glicose50Select = document.getElementById('glicose50');
            const nacl20Select = document.getElementById('nacl20');

            if (solucao === "Soro Fisiológico") {
                glicose50Select.disabled = false;
                nacl20Select.disabled = true;
                nacl20Select.value = "0";
            } else {
                glicose50Select.disabled = true;
                glicose50Select.value = "0";
                nacl20Select.disabled = false;
            }
        }

        function calcularHidratacao() {
            const peso = parseFloat(document.getElementById('peso').value);
            const solucao = document.getElementById('solucao').value;
            const glicose50 = parseInt(document.getElementById('glicose50').value, 10);
            const nacl20 = parseInt(document.getElementById('nacl20').value, 10);
            const kcl = parseInt(document.getElementById('kcl').value, 10);
            let volumeTotal = 0;

            if (peso <= 10) {
                volumeTotal = 100 * peso;
            } else if (peso <= 20) {
                volumeTotal = 1000 + 50 * (peso - 10);
            } else {
                volumeTotal = 1500 + 20 * (peso - 20);
            }

            let volumeSoroFisiologico = volumeTotal;
            let volumeGlicose5ou10 = volumeTotal;
            let volumeGlicose50 = 0;
            let volumeNaCl20 = 0;
            let volumeKCl = 0;

            if (solucao === "Soro Fisiológico" && glicose50 > 0) {
                volumeGlicose50 = (volumeTotal / 500) * glicose50;
                volumeSoroFisiologico = volumeTotal - volumeGlicose50;
            }

            if ((solucao === "Glicose 5%" || solucao === "Glicose 10%") && nacl20 > 0) {
                volumeNaCl20 = (volumeTotal / 500) * nacl20;
                volumeTotal += volumeNaCl20;
            }

            if (kcl > 0) {
                volumeKCl = (volumeTotal / 500) * kcl;
            }

            const etapas = Math.ceil(volumeTotal / 500);
            const mlPorHora = (volumeTotal / 24).toFixed(2);
            const gotasPorMinuto = Math.ceil(mlPorHora / 3);

            const osmolaridadeSoroFisiologico = 308;
            const osmolaridadeGlicose5 = 252;
            const osmolaridadeGlicose10 = 505;
            const osmolaridadeGlicose50 = 2526;
            const osmolaridadeNaCl20 = 6817;
            const osmolaridadeKCl10 = 2000;

            let osmolaridadeTotal = 0;
            let volumeTotalLitros = volumeTotal / 1000; // Convertendo para litros

            if (solucao === "Soro Fisiológico") {
                osmolaridadeTotal += (volumeSoroFisiologico * osmolaridadeSoroFisiologico);
            } else if (solucao === "Glicose 5%") {
                osmolaridadeTotal += (volumeGlicose5ou10 * osmolaridadeGlicose5);
            } else if (solucao === "Glicose 10%") {
                osmolaridadeTotal += (volumeGlicose5ou10 * osmolaridadeGlicose10);
            }

            if (volumeGlicose50 > 0) {
                osmolaridadeTotal += (volumeGlicose50 * osmolaridadeGlicose50);
            }

            if (volumeNaCl20 > 0) {
                osmolaridadeTotal += (volumeNaCl20 * osmolaridadeNaCl20);
            }

            if (volumeKCl > 0) {
                osmolaridadeTotal += (volumeKCl * osmolaridadeKCl10);
            }

            const osmolaridadeFinal = osmolaridadeTotal / (volumeTotalLitros * 1000); // Conversão final correta

            let resultado = `
                <p>Solução: ${solucao}</p>
                <p>Volume Total: ${volumeTotal.toFixed(1)} ml/dia</p>
                <p>Passar em ${etapas} etapa${etapas > 1 ? 's' : ''}</p>
                ${solucao === "Soro Fisiológico" && volumeSoroFisiologico > 0 ? `<p>Soro Fisiológico 0,9%: ${(volumeSoroFisiologico / etapas).toFixed(1)} ml por etapa</p>` : ''}
                ${solucao !== "Soro Fisiológico" ? `<p>Glicose ${solucao === 'Glicose 5%' ? '5%' : '10%'}: ${(volumeGlicose5ou10 / etapas).toFixed(1)} ml por etapa</p>` : ''}
                ${volumeGlicose50 > 0 ? `<p>Glicose 50%: ${(volumeGlicose50 / etapas).toFixed(1)} ml por etapa</p>` : ''}
                ${volumeNaCl20 > 0 ? `<p>NaCl 20%: ${(volumeNaCl20 / etapas).toFixed(1)} ml por etapa</p>` : ''}
                ${volumeKCl > 0 ? `<p>KCl 10%: ${(volumeKCl / etapas).toFixed(1)} ml por etapa</p>` : ''}
                
                 <p>Osmolaridade: <span style="color: ${osmolaridadeFinal < 275 || osmolaridadeFinal > 320 ? 'red' : 'black'};">${osmolaridadeFinal.toFixed(1)} mOsm/L</span></p>
                 <p>Taxa de Infusão: ${mlPorHora} ml/h</p>
                <p>Gotas por Minuto: ${gotasPorMinuto} gotas/min</p>
            `;

            document.getElementById('resultado').innerHTML = resultado;
        }

        function visualizarImpressao() {
            const peso = document.getElementById('peso').value;
            const solucao = document.getElementById('solucao').value;
            const resultado = document.getElementById('resultado').innerHTML;

            const date = new Date().toLocaleDateString();

            const printContent = `
                <div>
                    <img src="img/logocalped.png" alt="Logo" style="display: block; margin: 0 auto; width: 100px; height: auto;">
                    <h2 style="text-align: center; font-weight: bold;">calped.com.br</h2>
                    <h3 style="text-align: center; font-weight: bold;">Prescrição de Hidratação Venosa</h3>
                    <p style="font-weight: bold;">Hospital:__________________________________________________________</p>
                    <p style="font-weight: bold;">Unidade de internação:_______________________________________________</p>
                    <p style="font-weight: bold;">Registro:___________</p>
                    <p style="font-weight: bold;">Leito:_____________</p>
                    <p style="font-weight: bold;">Nome do paciente: ___________________________________________________</p>
                    <p>Data: ${date}</p>
                    <p>Peso: ${peso} kg</p>
                   
                    ${resultado}
                    <button onclick="window.print()">Imprimir</button>
                </div>
            `;

            const printWindow = window.open('', '', 'width=800,height=600');
            printWindow.document.write(printContent);
            printWindow.document.close();
            printWindow.focus();
        }

        document.addEventListener('DOMContentLoaded', (event) => {
            atualizarOpcoes();
        });

        document.getElementById('copyright-year').textContent = new Date().getFullYear();
   