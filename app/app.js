let formulario1 = document.getElementById("formulario__registro");
let formulario2 = document.getElementById("formulario__registro-2");
let campo1 = document.getElementById("campo__email")
let campo2 = document.getElementById("campo__email-2")
const expresion = {correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,};

const validarCampo = (e) => {
  e.preventDefault();
  if (e.target.type == "submit") {
    if (expresion.correo.test(campo1.value) || expresion.correo.test(campo2.value)) {
      e.target.parentNode.classList.remove("campo-incorrecto");
      e.target.parentNode.reset();
    } else {
      e.target.parentNode.classList.add("campo-incorrecto");
    }
  }
};

formulario2.addEventListener("click", validarCampo);
formulario1.addEventListener("click", validarCampo);
