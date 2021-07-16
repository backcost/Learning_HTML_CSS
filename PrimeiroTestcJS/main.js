function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
/*     alert('Obrigado por clicar') */
}

function redirecionar(){
    window.open("https://rumble.com/c/c-308005") //nova aba
    window.location.href = "https://rumble.com/c/c-308005" //mesma aba
}

function trocar(elemento){
    /* document.getElementById("mousemove").innerHTML = "Obrigado por passar mouse" */
    /* alert("trocar texto") */
    elemento.innerHTML = "Obrigado por passar mouse"
}

function voltar(elemento){
    /* document.getElementById("mousemove").innerHTML ="Passe o mouse aqui" */
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}