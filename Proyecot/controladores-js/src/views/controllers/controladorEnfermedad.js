let nombreenfermedad=document.getElementById("nombreenfermedad")
let sintomasenfermedad=document.getElementById("sintomasenfermedad")
let clasificacionenfermedad=document.getElementById("clasificacionenfermedad")
let probabilidaddevidadenfermedad=document.getElementById("probabiliadvidaenfermedad")
let gradoenfermedad=document.getElementById("gradoenfermedad")

let botonEnfermedad=document.getElementById("botoregistroenfermedad")

botonEnfermedad.addEventListener("click",function(evento){
    evento.preventDefault()

    let formularioEnfermedad={
        nombre: nombreenfermedad.value,
        sintomas:sintomasenfermedad.value,
        clasificacion:clasificacionenfermedad.value,
        grado:gradoenfermedad.value,
        probabilidadVida:probabilidaddevidadenfermedad.value,

    }

    console.log(formularioEnfermedad)

    Swal.fire({
        title: "Registro Exitoso",
        text: " enfermedad registrada!",
        icon: "success"
      });
})