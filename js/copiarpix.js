function copyPixEmail() {
    // Seleciona o texto do PIX
    var pixEmail = document.getElementById("pix-email").innerText;

    // Cria um elemento de texto temporário
    var tempInput = document.createElement("input");
    tempInput.value = pixEmail;
    document.body.appendChild(tempInput);

    // Seleciona e copia o texto para a área de transferência
    tempInput.select();
    document.execCommand("copy");

    // Remove o elemento temporário
    document.body.removeChild(tempInput);

    // Alerta ao usuário que o PIX foi copiado
    alert("PIX copiado para a área de transferência!");
}
