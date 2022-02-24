const formulario = document.getElementById('form_login');
const inputs = document.querySelectorAll('#form_login input');

const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
}

const campos = {
    email: false,
    passwords: false
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;

        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validar_passwords();
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('grupo_formulario-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('grupo_formulario-correcto');
        document.querySelector(`#grupo_${campo} .grupo_formulario-error`).classList.remove('grupo_formulario-error-activo');
        campos[campo] = true;

    }else{
        document.getElementById(`grupo_${campo}`).classList.add('grupo_formulario-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('grupo_formulario-correcto');
        document.querySelector(`#grupo_${campo} .grupo_formulario-error`).classList.add('grupo_formulario-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {

    if(campos.email && campos.password){
        
    }else{
       e.preventDefault(); 
    }
});

