function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resposta = document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Falta dados!')
    } else {
        resposta.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                resposta.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem decrespostacente
            for (let c = i; c >= f; c -= p) {
                resposta.innerHTML += ` ${c} \u{1F449}`
            }
        }
    }
}