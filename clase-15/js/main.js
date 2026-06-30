// Selecciona elemento

// Seleccionar un elemenbto del HTML por su ID
console.log(document.getElementById("titulo"))
console.log(document.getElementById("subtitulo"))

// Mostrar todas las propiedas de un objeto
console.dir(document.getElementById("titulo"))
console.dir(document.getElementById("subtitulo"))

// devuelve solo el texto con inner text
console.dir(document.getElementById("titulo").innerText)
console.dir(document.getElementById("subtitulo").innerText)

let titulo = document.getElementById("titulo").innerText
console.log(titulo)

// Selecciono un elemento por ID 
let texto = document.getElementsByClassName('parrafo')[0 ].innerText
console.log(texto)