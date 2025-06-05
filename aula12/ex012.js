var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora < 12 && hora >= 6) {
    console.log('Bom dia!')
} else if(hora < 6){
    console.log('Boa Madrugada!')
}else if(hora >= 12 && hora <= 18){
    console.log('Boa tarde!')
} else if (hora >=18 && hora <= 23){
    console.log('Boa Noite!')
} else {
    console.log('Hora Invalida!')
}