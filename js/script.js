const adivinanza = document.getElementById("adivinanza")
const respuesta = document.getElementById("respuesta")
const adivinanza_eleccion = document.getElementById("adivinanza_eleccion")
const respuesta_eleccion = document.getElementById("respuesta_eleccion")
const btn_comprobar = document.getElementById("btn_comprobar")
const btn_jugar = document.getElementById("btn_jugar")

const adivinanzaelegida = document.getElementsByClassName("juego__adivinanza-texto");

for (i = 0; i < adivinanzaelegida.length; i++) {
    adivinanzaelegida[i].addEventListener("click", function (event) {
        const adivinanzaclikeada = event.target;
        adivinanza_eleccion.appendChild(adivinanzaclikeada)
    })


}

const respuestaelegida = document.getElementsByClassName("juego__adivinanza-respuesta");

for (i = 0; i < respuestaelegida.length; i++) {
    respuestaelegida[i].addEventListener("click", function (event) {
        const respuestaclickeada = event.target;
        respuesta_eleccion.appendChild(respuestaclickeada)
    })
}

btn_comprobar.addEventListener("click",function(){
    for (let i = 0; i < adivinanza_eleccion.children.length; i++) {

        let elementoactual = adivinanza_eleccion.children[i];
        let respuetaactual = respuesta_eleccion.children[i];

        if (elementoactual.textContent.includes(respuetaactual.textContent)) {
            elementoactual.classList.add("verde");
            respuetaactual.classList.add("verde");

        } else {
            elementoactual.classList.add("rojo");
            respuetaactual.classList.add("rojo");
        }
    }
})

