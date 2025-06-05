function tabuada(){
    var num = document.getElementById('num')
    var tabu = document.getElementById('tabela')

    if(num.value >= 0){
        var n = Number(num.value)

        c = 1
        tabu.innerHTML = ''

            while( c <= 10){
                var resul = n * c
                var item = document.createElement('option')
                item.text = `${n} X ${c} = ${resul}`
                tabu.appendChild(item) // pega o elemento criado item, e adicoona como filho dentro da tabela
                c++
            } 
        } else {
            tabu.innerHTML = '';
            alert('Por favor, insira um numero maior que zero')
    }
}