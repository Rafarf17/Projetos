function reload() {
    var agora = new Date();
    var hora = 1
    var minutos = agora.getMinutes();
    var horaFormatada = `${hora}:${minutos.toString().padStart(2, '0')}`;

    var mensagem = document.getElementById("horas"); 
    var imagem = document.getElementById("img");
    var corpo = document.body

    if (hora >= 6 && hora < 12) {
        mensagem.innerHTML = `<p>Bom dia! Agora são ${horaFormatada}</p>`;
        imagem.src = "Manha.jpg"; 
        corpo.style.backgroundColor = "#FAD438"
    } else if (hora >= 12 && hora < 18) {
        mensagem.innerHTML = `<p>Boa tarde! Agora são ${horaFormatada}</p>`;
        imagem.src = "Tarde.jpg";
        corpo.style.backgroundColor = "#F95A2E"
    } else if (hora >= 18 && hora <= 23) {
        mensagem.innerHTML = `<p>Boa noite! Agora são ${horaFormatada}</p>`;
        imagem.src = "Noite.jpg";
        corpo.style.backgroundColor = "#2558c7"
    } else {
        mensagem.innerHTML = `<p>Boa madrugada! Agora são ${horaFormatada}</p>`;
        imagem.src = "madrugada.jpg";
        corpo.style.backgroundColor = "#4a47c7"
    }
}
reload();
