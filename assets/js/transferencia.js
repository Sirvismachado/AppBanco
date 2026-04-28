const saldoAtual = 1250.75;

document.getElementById("transferencia-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const destinatario = document.getElementById("destinatário").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const msg = document.getElementById("mensagem")
    

    if(!destinatario || isNaN(valor) || valor <= 0){ 
        msg.innerText = "Preencha todos os campos corretamente.";
        return;

    }
    if(valor > saldoAtual) {
    msg.innerText = "Saldo insuficiente para esta transferencia.";
    msg.style.color = "red"
}
    msg.innerText = `Transferência de R$ ${valor.toFixed(2)} para ${destinatario} realizada com sucesso`;
    msg.style.color = "green"
});