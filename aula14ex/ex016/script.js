function contagem() {
    var int = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    var inicio = Number(int.value)
    var final = Number(fim.value)
    var p = Number(passo.value)

    if (int.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar! Preencha todos os campos.'
        return
    }

    if (p <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

    res.innerHTML = 'Contando: <br>'

    if (inicio < final) {
        // Contagem crescente
        for (let i = inicio; i <= final; i += p) {
            res.innerHTML += `${i} 👉 `
        }
    } else {
        // Contagem decrescente
        for (let i = inicio; i >= final; i -= p) {
            res.innerHTML += `${i} 👉 `
        }
    }

    res.innerHTML += '🏁'
}
