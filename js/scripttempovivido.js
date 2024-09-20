document.addEventListener('DOMContentLoaded', function() {
    const birthDateTimeInput = document.getElementById('birthDateTime');
    const resultContainer = document.getElementById('result');
    const btnCalcular = document.getElementById('btnCalcular');
    const btnLimpar = document.getElementById('btnLimpar');

    // Função para determinar singular ou plural
    function formatUnit(value, singular, plural) {
        return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
    }

    // Função para calcular o tempo vivido e idade completa
    function calcularTempoVivido() {
        const birthDateTimeValue = birthDateTimeInput.value;
        if (!birthDateTimeValue) return;

        const birthDate = new Date(birthDateTimeValue);
        const now = new Date();

        let diffInMilliseconds = now - birthDate;
        let diffInSeconds = diffInMilliseconds / 1000;
        let diffInMinutes = diffInSeconds / 60;
        let diffInHours = diffInMinutes / 60;
        let diffInDays = diffInHours / 24;

        let totalDays = Math.floor(diffInDays);
        let totalWeeks = Math.floor(totalDays / 7);
        let remainingDays = totalDays % 7; // Dias restantes que não completam uma semana

        let remainingHours = Math.floor(diffInHours % 24); // Horas que não completam um dia

        // Cálculo detalhado de anos, meses, dias
        let years = now.getFullYear() - birthDate.getFullYear();
        let months = now.getMonth() - birthDate.getMonth();
        if (months < 0) {
            years--;
            months += 12;
        }

        let days = now.getDate() - birthDate.getDate();
        if (days < 0) {
            months--;
            if (months < 0) {
                years--;
                months = 11;
            }
            const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += lastMonth.getDate();
        }

        // Exibir o resultado
        resultContainer.innerHTML = `
            <p><strong>Total de Anos:</strong> ${formatUnit(years, 'ano', 'anos')} de vida</p>
            <p><strong>Total de Meses:</strong> ${formatUnit((years * 12) + months, 'mês', 'meses')} de vida</p>
            <p><strong>Total de Semanas:</strong> ${formatUnit(totalWeeks, 'semana', 'semanas')} de vida</p>
            <p><strong>Total de Dias:</strong> ${formatUnit(totalDays, 'dia', 'dias')} de vida</p>
            <p><strong>Total de Horas:</strong> ${formatUnit(Math.floor(diffInHours), 'hora', 'horas')} de vida</p>
            <p><strong>Idade Completa:</strong> ${formatUnit(years, 'ano', 'anos')}, ${formatUnit(months, 'mês', 'meses')}, ${formatUnit(totalWeeks, 'semana', 'semanas')}, ${formatUnit(remainingDays, 'dia', 'dias')}, ${formatUnit(remainingHours, 'hora', 'horas')}</p>
            <hr>
        `;
    }

    // Calcular automaticamente ao clicar em qualquer data e horário
    birthDateTimeInput.addEventListener('change', calcularTempoVivido);

    // Botão de calcular manual
    btnCalcular.addEventListener('click', calcularTempoVivido);

    // Limpar a data e os resultados, mantendo a data atual
    btnLimpar.addEventListener('click', function() {
        resultContainer.innerHTML = '';
        setDefaultDateTime(); // Mantém a data atual no campo
    });

    // Definir a data e hora atual no campo de input
    function setDefaultDateTime() {
        const now = new Date();
        const nowString = now.toISOString().slice(0, 16); // Formato adequado para datetime-local
        birthDateTimeInput.value = nowString;
    }

    setDefaultDateTime(); // Define a data atual ao carregar a página
});
