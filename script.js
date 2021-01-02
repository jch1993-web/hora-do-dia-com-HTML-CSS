function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var hora = new Date()
    var hora = hora.getHours()
    var minuto = new Date()
    minuto = minuto.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`


    if (hora >= 0 && hora <= 12) {
        foto.src = './imagens/manhã.jpg'

    } else if (hora > 12 && hora <= 18) {
        foto.src = './imagens/tarde.jpg'
        document.body.style.background = 'yellow'

    } else {
        foto.src = './imagens/noite.jpg'
        document.body.style.background = 'black'
    }
}