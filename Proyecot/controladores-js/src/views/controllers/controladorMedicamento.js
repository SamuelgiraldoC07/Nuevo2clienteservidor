//OBJETIVO:capturar los datos de un formulario
 

// por cada input,select,textarea del formulario 
// se crea una variables

//2 por cada varibles utilizar el DOM para 
//asociarle el html con js

let nombreMedicamento=document.getElementById("nombreMedicamento")
let presentacioMedicamento =document.getElementById("presentacionMedicamento")
let dosisMedicamento=document.getElementById("dosisMedicamento")
let laboratorioMedicamento=document.getElementById("laboratorioMedicamento")
let fechadecaducidaMedicamento=document.getElementById("FechacaducidadMedicamento")
let contraindicacionesMedicamento=document.getElementById("contraindicacionesMedicamento")
let registroMedicamento=document.getElementById("registroMedicamento")
let grupoingresoMedicamento=document.getElementById("disponibleMedicamento")

//crear variable y enlazar el boton

let bontomedicamento =document.getElementById("botonregistroMedicamento")

//detectar acciones o eventos 

bontomedicamento.addEventListener("click",function(evento){
    evento.preventDefault()

     // se crea un JSON 
//que capture todos los datos
//del formulario

let formularioMedicamento={
    nombre:nombreMedicamento.value,
    presentacion:presentacioMedicamento.value,
    dosis:dosisMedicamento.value,
    laboratorio:laboratorioMedicamento.value,
    fechaCaducidad:fechadecaducidaMedicamento.value,
    contraIndicaciones:contraindicacionesMedicamento.value,
    registroInvima:registroMedicamento.value,
    copago:grupoingresoMedicamento.value,
}

//se  envian al back

console.log(formularioMedicamento)

Swal.fire({
    title: "Registro Exitoso",
    text: "medicamento sura!",
    icon: "success"
  });


})