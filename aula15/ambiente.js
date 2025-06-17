let num = [5, 8, 2, 9, 3]

num[5] = 8

num.push(7)

console.log(`nosso vetor é o  ${num}`)//mostra os valores dos vetore
console.log(`o primeiro valor do meu vetor é ${num[0]}`)
console.log(num.length)//mostra o tamanho do array
//console.log(num.sort())//mostra o array em ordem crescente 


/*for(let pos = 0; pos < num.length; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}*/

/*for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}*/

let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valo não foi encontrado!')
}else{
    console.log(`o valor está na posição ${pos}`)
}