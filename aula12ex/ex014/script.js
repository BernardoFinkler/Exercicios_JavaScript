function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora sao ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //bomdia
        img.src ='foto_manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'foto_tarde.png'
        document.body.style.background = "#b9846f"
    } else {
        //boa noite
        img.src = 'foto_noite.png'
        document.body.style.background = '#515154'
    }
}
