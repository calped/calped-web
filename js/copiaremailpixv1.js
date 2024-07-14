// Função para copiar o email do PIX
function copyPixEmail() {
    const pixEmail = document.getElementById('pix-email').innerText;
    navigator.clipboard.writeText(pixEmail).then(function() {
        alert('Email do PIX copiado para a área de transferência.');
    }, function(err) {
        alert('Erro ao copiar o email do PIX.');
    });
}