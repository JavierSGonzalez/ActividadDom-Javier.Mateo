const creation = document.createElement("h1");
creation.innerHTML = "Manual de practica";
document.body.appendChild(creation);

const des = document.createElement("h2");
des.innerHTML = "Conceptos básicos de programación";
document.body.appendChild(des);

const ht = document.createElement("p");
ht.innerHTML = "HTML";
document.body.appendChild(ht);

function reemplazar(){
    document.getElementById("contenido").innerHTML = "HTML es un lenguaje usado para crear y estructurar páginas web. Utiliza etiquetas para definir cosas como títulos, párrafos, imágenes y enlaces dentro de una página. Es la base para mostrar contenido en Internet." 
}