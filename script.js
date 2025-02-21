const creation = document.createElement("h1");
creation.innerHTML = "Manual de practica";
document.body.appendChild(creation);

const des = document.createElement("h2");
des.innerHTML = "Conceptos básicos de programación";
document.body.appendChild(des);

const read = document.createElement("button");
read.innerHTML = "HTML";
read.addEventListener("click", ht);
document.body.appendChild(read);

function ht(){
    document.getElementById("contenido").innerHTML = "HTML es un lenguaje usado para crear y estructurar páginas web. Utiliza etiquetas para definir cosas como títulos, párrafos, imágenes y enlaces dentro de una página. Es la base para mostrar contenido en Internet." 
}

const cs = document.createElement("button");
cs.innerHTML = "CSS";
cs.addEventListener("click", deco);
document.body.appendChild(cs);


function deco(){
    document.getElementById("contenido").innerHTML = "CSS (Cascading Style Sheets) es un lenguaje de estilos utilizado para definir la apariencia y el diseño de páginas web. Permite controlar aspectos como colores, fuentes, márgenes, posiciones y animaciones, separando la estructura del contenido (HTML) del diseño visual." 
}

const jj = document.createElement("button");
jj.innerHTML = "JS";
jj.addEventListener("click", Ss);
document.body.appendChild(jj);

function Ss(){
    document.getElementById("contenido").innerHTML = "JavaScript es un lenguaje de programación interpretado, orientado a objetos y basado en eventos, utilizado principalmente para crear interactividad en páginas web. Funciona en el navegador y en servidores (con Node.js) y permite manipular el DOM, gestionar eventos y realizar peticiones a servidores"
}

const hide = document.createElement("button");
hide.innerHTML = "Saber menos";
hide.addEventListener("click", eliminar);
document.body.appendChild(hide);


function eliminar(){
    document.getElementById("contenido").innerHTML = "" 
}

document.getElementById("contenido").style.backgroundColor = "green";