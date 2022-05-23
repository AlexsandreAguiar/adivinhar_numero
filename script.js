function sortear() {
    var numini = 1
    var numfim = 100
    resultado =  Number.parseInt(Math.random() * (numfim - numini) + numini) 
}

function verificar() {
    var numdigi = window.prompt('Qual é o seu palpite?')

    if (numdigi < resultado){
        div1.innerHTML += (`<p>Você informou o número ${numdigi}. Meu número é <strong>MAIOR!</strong></p>`)
    } else if (numdigi > resultado) {
        div1.innerHTML += (`<p>Você informou o número ${numdigi}. Meu número é <strong>MENOR!</strong></p>`)
    } else {
        div1.innerHTML += (`<p>PARABÉNS! O número ${numdigi} é o correto!  <input type="button" class="resetar" id="resetar" value="Resetar" onclick="resetar()"></p>`)
    }
}

function resetar() {
    div1.innerHTML = ('Já pensei em um valor entre 1 e 100...')
}