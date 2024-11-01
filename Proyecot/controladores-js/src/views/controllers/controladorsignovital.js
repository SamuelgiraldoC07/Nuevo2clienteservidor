let nombresignovital =document.getElementById("nombresignovital")
let valorsignovital = document.getElementById("valorsignovital")
let fechamedidasignovital=document.getElementById("fechasignovital")
let sintomasignovital =document.getElementById("valorsignovital")

let botonsignovital = document.getElementById("botonsignovital")

botonsignovital.addEventListener("click",function(evento){
    evento.preventDefault()

    let registrosignovital ={
        nombre:nombresignovital.value,
        valor: valorsignovital.value,
        fechaMedida:fechamedidasignovital.value,
        sintoma:sintomasignovital.value,
    }
    console.log(registrosignovital)

    Swal.fire({
        title: "Registro Exitoso",
        text: " medico sura registro exitoso!",
        icon: "success"
      });
})