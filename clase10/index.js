//Eventos

let boton = document.getElementById("boton");

const saludar = (nombre) => {

  console.log(`Hola ${nombre}`);

};
let nombre = prompt("ingrese el nombre");

boton.addEventListener("click", () => saludar("andres"));