/*
Para este ejercicio he reciclado mi ejercicio de Laboratorio de la segunda fase del programa, 
tengo pendiente volver a realizarlo para encontrar otra manera más limpia.
*/ 

const formulario=document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');

const expresiones={
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/  
}

const grupos={
    grupo_nombre: false,
    grupo_apellido: false,
    grupo_mail:false,
}

const validarFormulario=(n)=>{
    switch(n.target.name){
        case "nombre":
            if(expresiones.nombre.test(n.target.value)){
                document.getElementById('grupo_nombre').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_nombre .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.querySelector('#grupo_nombre .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.getElementById('grupo_nombre').classList.add('formulario_grupo_correcto');
                grupo_nombre=true;
            }else if(n.target.value !=""){
                document.getElementById('grupo_nombre').classList.remove('formulario_grupo_correcto');
                document.querySelector('#grupo_nombre .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.getElementById('grupo_nombre').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_nombre .formulario_input_error').classList.add('formulario_input_error_activo');
                grupo_nombre=false;
            }else{
                document.getElementById('grupo_nombre').classList.remove('formulario_grupo_correcto');
                document.getElementById('grupo_nombre').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_nombre .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.querySelector('#grupo_nombre .formulario_input_vacio').classList.add('formulario_input_vacio_activo');
                grupo_nombre=false;
            }
        break;

        case "apellido":
            if(expresiones.apellido.test(n.target.value)){
                document.getElementById('grupo_apellido').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_apellido .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.querySelector('#grupo_apellido .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.getElementById('grupo_apellido').classList.add('formulario_grupo_correcto');
                grupo_apellido=true;
            }else if(n.target.value !=""){
                document.getElementById('grupo_apellido').classList.remove('formulario_grupo_correcto');
                document.querySelector('#grupo_apellido .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.getElementById('grupo_apellido').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_apellido .formulario_input_error').classList.add('formulario_input_error_activo');
                grupo_apellido=false;
            }else{
                document.getElementById('grupo_apellido').classList.remove('formulario_grupo_correcto');
                document.getElementById('grupo_apellido').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_apellido .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.querySelector('#grupo_apellido .formulario_input_vacio').classList.add('formulario_input_vacio_activo');
                grupo_apellido=false;
            }
        break;

        
        case "email":
            if(expresiones.email.test(n.target.value)){
                document.getElementById('grupo_email').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_email .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.querySelector('#grupo_email .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.getElementById('grupo_email').classList.add('formulario_grupo_correcto');
                grupo_email=true;
            }else if(n.target.value !=""){
                document.getElementById('grupo_email').classList.remove('formulario_grupo_correcto');
                document.querySelector('#grupo_email .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.getElementById('grupo_email').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_email .formulario_input_error').classList.add('formulario_input_error_activo');
                grupo_email=false;
            }else{
                document.getElementById('grupo_email').classList.remove('formulario_grupo_correcto');
                document.getElementById('grupo_email').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_email .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.querySelector('#grupo_email .formulario_input_vacio').classList.add('formulario_input_vacio_activo');
                grupo_email=false;
            }
        break;

    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (grupo_nombre && grupo_apellido && grupo_email) {
      const formData = new FormData(formulario);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', formulario.action, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.onload= function () {
        if (xhr.status === 200) { 
          formulario.reset();
          document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito_activo');
          document.querySelectorAll('.formulario_grupo_correcto').forEach((pic) => {
            pic.classList.remove('formulario_grupo_correcto');
          });
        } else {
          console.error('Error:', xhr.status);
        }
      };

      xhr.send(formData);
    }
  });