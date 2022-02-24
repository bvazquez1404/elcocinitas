const formulario = document.getElementById('form_registro');
const inputs = document.querySelectorAll('#form_registro input');

const expresiones = {
    nombre_apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
}

const campos = {
    nombre: false,
    apellidos: false,
    email: false,
    passwords: false
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre_apellidos, e.target, 'nombre');
        break;

        case "apellidos":
            validarCampo(expresiones.nombre_apellidos, e.target, 'apellidos');
        break;

        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;

        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validar_passwords();
        break;
        
        case "repeat_password":
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

const validar_passwords = () => {
    const password1 = document.getElementById('password');
    const password2 = document.getElementById('repeat_password');

    if(password1.value !== password2.value){
        document.getElementById('grupo_repeat_password').classList.add('grupo_formulario-incorrecto');
        document.getElementById('grupo_repeat_password').classList.remove('grupo_formulario-correcto');
        document.querySelector('#grupo_repeat_password .grupo_formulario-error').classList.add('grupo_formulario-error-activo');
        campos['passwords'] = false;
    }else{
        document.getElementById('grupo_repeat_password').classList.remove('grupo_formulario-incorrecto');
        document.getElementById('grupo_repeat_password').classList.add('grupo_formulario-correcto');
        document.querySelector('#grupo_repeat_password .grupo_formulario-error').classList.remove('grupo_formulario-error-activo');
        campos['passwords'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {

    if(campos.nombre && campos.apellidos && campos.email && campos.passwords){
    
    }else{
       e.preventDefault(); 
    }
});

