let email = document.querySelectorAll(".email");
let btnEnviar = document.querySelectorAll(".btn");
let formulario_1 = document.querySelector(".email_1")
let formulario_2 = document.querySelector(".email_2")

const expresion = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}


const validarCampo = (e) => {
    e.preventDefault();

    let inputName = e.target.name;
    let inputValue = e.target.value;

    if(inputName == "email_1"){
        validarFormulario(inputName, inputValue)
    }
    if(inputName == "email_2"){
        validarFormulario(inputName, inputValue)
    }

}


const validarFormulario = (name, value) => {

    let expresionEmail = expresion.correo.test(value);

    if(expresionEmail){
        document.querySelector(`.${name}`).classList.remove("error")
    }else{
        document.querySelector(`.${name}`).classList.add("error")

    }
    
    formulario_1.addEventListener("submit", (e) => {
        e.preventDefault();

        if(expresionEmail){
            formulario_1.reset();
        }
    })
    formulario_2.addEventListener("submit", (e) => {
        e.preventDefault();

        if(expresionEmail){
            formulario_2.reset();
        }
    })
    

}


email.forEach(input => {
    input.addEventListener("click", validarCampo)
    input.addEventListener("keyup", validarCampo)
})


