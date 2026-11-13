// ----------------------------------
// FUNCIÓN: MOSTRAR Y OCULTAR INFO
// ----------------------------------

function mostrarInfo(id) {

    const elemento = document.getElementById(id);

    if (elemento.style.display === "block") {

        elemento.style.display = "none";

    } else {

        elemento.style.display = "block";

    }
}


// ----------------------------------
// MODO OSCURO
// ----------------------------------

const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", function () {

    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {

        modoBtn.textContent = "☀️ Modo claro";

    } else {

        modoBtn.textContent = "🌙 Modo oscuro";

    }

});


// ----------------------------------
// RECOMENDADOR DE LIBROS
// ----------------------------------

const recomendarBtn =
    document.getElementById("recomendarBtn");

const resultado =
    document.getElementById("resultado");


const libros = [

    "📖 Te recomendamos: Hasta que nos quedemos sin estrellas",

    "💌 Te recomendamos: El arte de ser nosotros",

    "🌙 Te recomendamos: Todos los lugares que mantuvimos en secreto",

    "🌎 Te recomendamos: Nuestro lugar en el mundo"

];


recomendarBtn.addEventListener("click", function () {

    const numero =
        Math.floor(Math.random() * libros.length);

    resultado.textContent = libros[numero];

});


const formulario = document.getElementById("chat-form");
const entrada = document.getElementById("mensaje-usuario");
const mensajes = document.getElementById("chat-mensajes");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const texto = entrada.value.trim();

  if (texto === "") return;

  // Mostrar mensaje del usuario
  const mensajeUsuario = document.createElement("div");
  mensajeUsuario.className = "mensaje usuario";
  mensajeUsuario.textContent = texto;

  mensajes.appendChild(mensajeUsuario);

  entrada.value = "";

  // Respuesta demostrativa
  const respuestaIA = document.createElement("div");
  respuestaIA.className = "mensaje ia";
  respuestaIA.textContent =
    "¡Gracias por tu consulta! 💗 Esta es una versión de demostración. Próximamente podrás conversar con nuestra inteligencia artificial.";

  mensajes.appendChild(respuestaIA);

  mensajes.scrollTop = mensajes.scrollHeight;
});
