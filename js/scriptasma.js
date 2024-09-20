function classifyAndTreat() {
    const age = parseInt(document.getElementById('age').value);
    const symptoms = parseInt(document.getElementById('symptoms').value);
    const nocturnal = parseInt(document.getElementById('nocturnal').value);
    const rescue = parseInt(document.getElementById('rescue').value);
    const limitation = parseInt(document.getElementById('limitation').value);
    let result = document.getElementById('result');
    let conduta = '';
    
    // Verificação de dados básicos
    if (!age || isNaN(symptoms) || isNaN(nocturnal) || isNaN(rescue)) {
        result.innerHTML = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    // Cálculo do escore de controle
    const escore = (symptoms > 2 ? 1 : 0) + (nocturnal >= 1 ? 1 : 0) + (rescue > 2 ? 1 : 0) + limitation;

    // Classificação do controle
    let controle = '';
    if (escore === 0) {
        controle = 'Asma Controlada';
    } else if (escore === 1 || escore === 2) {
        controle = 'Asma Parcialmente Controlada';
    } else {
        controle = 'Asma Não Controlada';
    }

    // Seleção do degrau de tratamento e doses conforme o GINA 2024
    if (controle === 'Asma Controlada') {
        conduta = `
            <h2>Asma Controlada</h2>
            <p>Manter tratamento atual, monitoramento contínuo.</p>
            <ul>
                <li><strong>Resgate:</strong> SABA sob demanda (ex: Salbutamol 100-200 µg).</li>
            </ul>`;
    } else if (controle === 'Asma Parcialmente Controlada') {
        if (age < 5) {
            conduta = `
                <h2>Degrau 2 - Asma Leve Persistente (Parcialmente Controlada)</h2>
                <ul>
                    <li><strong>Manutenção:</strong> Corticosteroide inalatório de baixa dose (ex: Budesonida 100-200 µg/dia ou Beclometasona 50-100 µg/dia).</li>
                    <li><strong>Resgate:</strong> SABA sob demanda (ex: Salbutamol 100-200 µg).</li>
                </ul>`;
        } else if (age >= 5 && age < 12) {
            conduta = `
                <h2>Degrau 3 - Asma Moderada Persistente (Parcialmente Controlada)</h2>
                <ul>
                    <li><strong>Manutenção:</strong> Corticosteroide inalatório em dose média (ex: Budesonida 200-400 µg/dia).</li>
                    <li><strong>Adicionar LABA:</strong> Formoterol 6-12 µg duas vezes ao dia.</li>
                    <li><strong>Resgate:</strong> ICS-SABA sob demanda (ex: Budesonida + Formoterol 80/4.5 µg).</li>
                </ul>`;
        } else {
            conduta = `
                <h2>Degrau 4 - Asma Grave Persistente (Parcialmente Controlada)</h2>
                <ul>
                    <li><strong>Manutenção:</strong> Corticosteroide inalatório de alta dose (ex: Budesonida 400-800 µg/dia ou Fluticasona 250-500 µg/dia).</li>
                    <li><strong>Adicionar LABA:</strong> Formoterol 12 µg duas vezes ao dia.</li>
                    <li><strong>Adicionar LTRA:</strong> Montelucaste 5-10 mg/dia.</li>
                </ul>`;
        }
    } else if (controle === 'Asma Não Controlada') {
        if (age < 5) {
            conduta = `
                <h2>Degrau 3 - Asma Moderada Persistente (Não Controlada)</h2>
                <ul>
                    <li><strong>Manutenção:</strong> Corticosteroide inalatório de dose média (ex: Budesonida 200-400 µg/dia ou Beclometasona 100-200 µg/dia).</li>
                    <li><strong>Adicionar LABA:</strong> Formoterol 6-12 µg duas vezes ao dia.</li>
                </ul>`;
        } else if (age >= 5 && age < 12) {
            conduta = `
                <h2>Degrau 4 - Asma Grave Persistente (Não Controlada)</h2>
                <ul>
                    <li><strong>Manutenção:</strong> Corticosteroide inalatório de alta dose (ex: Budesonida 400-800 µg/dia ou Fluticasona 250-500 µg/dia).</li>
                    <li><strong>Adicionar LABA:</strong> Formoterol 12 µg duas vezes ao dia.</li>
                    <li><strong>Adicionar LTRA:</strong> Montelucaste 5-10 mg/dia.</li>
                </ul>`;
        } else {
            conduta = `
                <h2>Degrau 5 - Asma Muito Grave (Não Controlada)</h2>
                <ul>
                    <li><strong>Corticosteroides de alta dose:</strong> Fluticasona 500-1000 µg/dia ou Budesonida 800-1600 µg/dia.</li>
                    <li><strong>Adicionar Biológicos:</strong> Omalizumabe para pacientes com asma alérgica, ou considerar outros biológicos (ex: Mepolizumabe, Dupilumabe).</li>
                </ul>`;
        }
    }

    result.innerHTML = conduta;
}
