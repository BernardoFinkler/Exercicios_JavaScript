var idade = 46
console.log(`Voce tem ${idade} anos`)
if (idade < 16){
    console.log(`Nao vota`)
} else  if (idade < 18 || idade > 65 ){
        console.log('voto opcional')
    } else if (idade >= 18){
        console.log('Voto origatorio')
    }
