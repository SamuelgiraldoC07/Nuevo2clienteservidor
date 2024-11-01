//OBJETIVO:capturar los datos de un formulario


// por cada input,select,textarea del formulario 
// se crea una variables

//2 por cada varibles utilizar el DOM para 
//asociarle el html con js

let nombreMedico=document.getElementById("nombremedico")
let matriculaMedico=document.getElementById("Matricualamedico")
let especialidadMedico=document.getElementById("especialidadmedico")
let salarioMedico=document.getElementById("salariomedico")
let ipsMedico=document.getElementById("ipsmedico")
let correoMedico=document.getElementById("correomedico")
let telefonoMedico=document.getElementById("telefonomedico")
let direccionMedico=document.getElementById("direccionmedico")
let disponiblefindesemanaMedico=document.getElementById("diponiblemedico")
//variable enlazada con el boton

let botonmedico = document.getElementById("botonmedico")

//detectar acciones o eventos
botonmedico.addEventListener("click",function(evento){
    evento.preventDefault()
// se crea un JSON 
//que capture todos los datos
//del formulario

let datosFormulariomedico={

    nombre:nombreMedico.value,
    matriculaProfesional:matriculaMedico.value,
    especialidad:especialidadMedico.value,
    salario:salarioMedico.value,
    ips:ipsMedico.value,
    correo:correoMedico.value,
    telefono:telefonoMedico.value,
    direccionConsultorio:direccionMedico.value,
    finDeSemanaDisponible:disponiblefindesemanaMedico.value,

}

//se envia los datos al back
console.log(datosFormulariomedico)

Swal.fire({
    title: "Registro Exitoso",
    text: " medico sura registro exitoso!",
    icon: "success"
  });

})