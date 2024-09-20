document.addEventListener('DOMContentLoaded', function() {
    const semanasGestacionaisInput = document.getElementById('semanasGestacionais');
    const diasGestacionaisInput = document.getElementById('diasGestacionais');
    const birthDateTimeInput = document.getElementById('birthDateTime');
    const resultContainer = document.getElementById('result');
    const btnCalcular = document.getElementById('btnCalcular');
    const btnLimpar = document.getElementById('btnLimpar');

    // Função para definir a data atual no campo de nascimento (ajustada para o fuso local)
    function definirDataAtual() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        // Formato adequado para datetime-local (YYYY-MM-DDTHH:MM)
        const localDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
        birthDateTimeInput.value = localDateTime;
    }

    // Função para calcular a idade gestacional corrigida
    function calcularIdadeGestacionalCorrigida() {
        const semanasGestacionais = parseInt(semanasGestacionaisInput.value, 10);
        const diasGestacionais = parseInt(diasGestacionaisInput.value, 10);
        const birthDateTime = new Date(birthDateTimeInput.value);
        const now = new Date();

        const diffInMilliseconds = now - birthDateTime;
        const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

        const semanasPosNascimento = Math.floor(diffInDays / 7);
        const diasPosNascimento = diffInDays % 7;

        const semanasCorrigidas = semanasGestacionais + semanasPosNascimento;
        const diasCorrigidos = diasGestacionais + diasPosNascimento;

        let semanasFinais = semanasCorrigidas;
        let diasFinais = diasCorrigidos;

        // Ajustar se os dias corrigidos ultrapassarem 7
        if (diasFinais >= 7) {
            semanasFinais += 1;
            diasFinais -= 7;
        }

        // Exibir o resultado com singular/plural para "dia" e "semana"
        const pluralSemanas = semanasFinais === 1 ? 'semana' : 'semanas';
        const pluralDias = diasFinais === 1 ? 'dia' : 'dias';

        resultContainer.innerHTML = `
            <p>Idade Gestacional Corrigida: ${semanasFinais} ${pluralSemanas} e ${diasFinais} ${pluralDias}.</p>
        `;
    }

    // Função para limpar os campos
    function limparCampos() {
        semanasGestacionaisInput.value = '';
        diasGestacionaisInput.value = '';
        definirDataAtual();  // Define novamente a data atual no campo de nascimento
        resultContainer.innerHTML = '';
    }

    // Definir a data atual no campo de nascimento ao carregar a página
    definirDataAtual();

    // Event listeners
    btnCalcular.addEventListener('click', calcularIdadeGestacionalCorrigida);
    btnLimpar.addEventListener('click', limparCampos);
});
