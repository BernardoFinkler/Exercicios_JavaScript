var peso = 70
var altura = 180
var imc = (peso / ((altura / 100)**2))
console.log(`Seu IMC é: ${imc.toFixed(2)}`)
if (imc >= 30){
    console.log('Obesidade')
}else if (imc >= 25){
    console.log('Sobrepeso')
}else if (imc >= 18){
    console.log('Peso Normal')
} else if(imc < 18.5){
    console.log('Abaixo do peso')
}