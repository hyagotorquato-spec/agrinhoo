function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML =
    "O futuro do campo depende da união entre inovação, produtividade e preservação ambiental!";
}

function animarNumero(id, valorFinal) {

    let numero = 0;

    const intervalo = setInterval(() => {

        numero++;

        document.getElementById(id).textContent = numero;

        if (numero >= valorFinal) {
            clearInterval(intervalo);
        }

    }, 30);
}

window.onload = function () {

    animarNumero("num1", 70);
    animarNumero("num2", 85);
    animarNumero("num3", 90);

};