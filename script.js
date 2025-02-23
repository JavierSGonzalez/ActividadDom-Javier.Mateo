const contenido = document.getElementById("contenido");

const creation = document.createElement("h1");
creation.innerHTML = "Manual de práctica";
document.body.appendChild(creation);

const des = document.createElement("h2");
des.innerHTML = "Conceptos básicos de programación";
document.body.appendChild(des);

const read = document.createElement("button");
read.innerHTML = "HTML";
read.addEventListener("click", ht);
document.body.appendChild(read);

function ht() {
    contenido.innerHTML = "HTML es un lenguaje usado para crear y estructurar páginas web. Utiliza etiquetas para definir cosas como títulos, párrafos, imágenes y enlaces dentro de una página. Es la base para mostrar contenido en Internet.";
}

const cs = document.createElement("button");
cs.innerHTML = "CSS";
cs.addEventListener("click", deco);
document.body.appendChild(cs);

function deco() {
    contenido.innerHTML = "CSS (Cascading Style Sheets) es un lenguaje de estilos utilizado para definir la apariencia y el diseño de páginas web. Permite controlar aspectos como colores, fuentes, márgenes, posiciones y animaciones, separando la estructura del contenido (HTML) del diseño visual.";
}

const jj = document.createElement("button");
jj.innerHTML = "JS";
jj.addEventListener("click", Ss);
document.body.appendChild(jj);

function Ss() {
    contenido.innerHTML = "JavaScript es un lenguaje de programación interpretado, orientado a objetos y basado en eventos, utilizado principalmente para crear interactividad en páginas web. Funciona en el navegador y en servidores (con Node.js) y permite manipular el DOM, gestionar eventos y realizar peticiones a servidores.";
}

const hide = document.createElement("button");
hide.innerHTML = "Saber menos";
hide.addEventListener("click", eliminar);
document.body.appendChild(hide);

function eliminar() {
    contenido.innerHTML = "";
}

// Cambiar el color de fondo del contenedor
contenido.style.backgroundColor = "#43d6f0";

// Lista de consejos
const consejos = [
    "💻 Practica todos los días, aunque sea un poco.",
    "📚 Aprende a leer documentación técnica.",
    "📝 Toma notas mientras estudias y haz resúmenes.",
    "❓ No tengas miedo de preguntar dudas en clase o en foros.",
    "⚡ Usa atajos de teclado para aumentar tu velocidad.",
    "🚀 Realiza proyectos pequeños para aplicar lo aprendido.",
    "🧩 Divide problemas grandes en partes más pequeñas.",
    "🤝 Colabora con compañeros y participa en comunidades.",
    "🔄 Repasa constantemente lo aprendido para afianzarlo.",
    "🛠️ Usa herramientas como VS Code y Git para mejorar tu flujo de trabajo."
];

// Crear lista en el DOM antes de usarla
const lista = document.createElement("ul");
contenido.appendChild(lista); // Ahora la lista está en el HTML

// Botón para mostrar consejos
const conse = document.createElement("button");
conse.innerHTML = "Consejos";
conse.addEventListener("click", tips);
document.body.appendChild(conse);

// Función para mostrar la lista de consejos
function tips() {
    lista.innerHTML = ""; // Limpiar lista antes de agregar los consejos
    consejos.forEach(texto => {
        let item = document.createElement("li");
        item.textContent = texto;
        lista.appendChild(item);
    });
}

// Botón para agregar un nuevo consejo dinámicamente
const boton = document.createElement("button");
boton.textContent = "Agregar un nuevo consejo";
document.body.appendChild(boton);

// Evento para agregar un nuevo consejo ingresado por el usuario
boton.addEventListener("click", () => {
    let nuevoConsejo = prompt("Escribe un nuevo consejo:");
    if (nuevoConsejo) {
        let nuevoItem = document.createElement("li");
        nuevoItem.textContent = `✨ ${nuevoConsejo}`;
        lista.appendChild(nuevoItem);
    }
});
