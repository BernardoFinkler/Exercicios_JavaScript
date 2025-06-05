function verificar(){
    var data = new Date() //define que vai ser uma data
    var ano = data.getFullYear() //data pega o ano atual
    var fano = document.getElementById('txtano') //puxa o que foi colocado no txtano la no html
    var res = document.getElementById('res') //puxa a res do HTML e atribui ela a variavel res aqui no js 
    if (fano.value.length == 0 || fano.value > ano) { //verifica se o ano e valido, testando o comprimento, se for igual a 0 dispara erro, e se for maior que o ano atual tambem.
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' // limpa o conteudo da res
        var img = document.createElement('img') // substitui a criação de uma <img id="foto"> no html
        img.setAttribute('id', 'foto') //define o que foi falado acima
        if (fsex[0].checked){ //verifica se é homem
            genero = 'Homem'
            if (idade >= 0 && idade < 10){ //verifica a idade
                //bebe
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }

        } else if (fsex[1].checked){ //se nao verifica se é mulher
            genero = 'Mulher'
             if (idade >= 0 && idade < 10){ // verifica a idade
                //crianca
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulta-f.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center' //centraliza a resposta
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // adicoona o elemento imagem abaixo do texto na res
    }
}