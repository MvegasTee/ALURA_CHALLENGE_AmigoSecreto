// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarLista();
}

function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li>El amigo secreto es: ${amigos[indiceAleatorio]}</li>`;
}
