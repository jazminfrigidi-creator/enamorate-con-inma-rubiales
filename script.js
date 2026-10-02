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
