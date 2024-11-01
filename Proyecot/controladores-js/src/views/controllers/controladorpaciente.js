//OBJETIVO:capturar los datos de un formulario
 

// por cada input,select,textarea del formulario 
// se crea una variables

//2 por cada varibles utilizar el DOM para 
//asociarle el html con js
/*
let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let telefonoPaciento=document.getElementById("telefonopaciente")
let FechaNacimientoPaciente=document.getElementById("nacimientopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")
let polizaPaciente=document.getElementById("polizapaciente")
let ipsPaciente=document.getElementById("ipspaciente")
let grupoingresopaciente=document.getElementById("grupoingrso")
let fechaafiliacionpaciente=document.getElementById("afiliacionpaciente")

//3 crear una variable para asociarla con el boton html
let botonRegistroPaciente =document.getElementById("botoregistropaciente")

//4 detectamos acciones o eventos en el boton 
botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault()

    // se crea un JSON 
//que capture todos los datos
//del formulario

let datosFormularioPacienten={
    nombres:nombrePaciente.value,
    anioNacimiento:fechaafiliacionpaciente.value,
    ciudad:ciudadPaciente.value,
    Correo:correoPaciente.value,
    telefono: telefonoPaciento.evalue,
    ips:ipsPaciente.value,
    grupoIngresos:grupoingresopaciente.value,
    poliza:polizaPaciente.value,
    fechaAfiliacion:fechaafiliacionpaciente.value,
    
    }

// 6 se envian los datos al back

console.log(datosFormularioPacienten)


    
    Swal.fire({
        title: "Registro Exitoso",
        text: "Ya eres parte de nuestra familia sura!",
        icon: "success"
      });
})

*/
//OBJETIVO: Recibir datos del BACK y hacerle render (render = Pintarlos)
//1. Quemar O simular los datos 

let pacientes = [
    {
        id:890,
        nombres: "Samuel",
        anioNacimiento: "1989-06-23",
        ciudad: "medellin",
        Correo: "samuel@gmail.com",
        telefono: "3112345678",
        ips: "Mayorca",
        grupoIngresos: "C",
        poliza: "true",
        fechaAfiliacion: "2022-05-15",

        
    },
    {
        "id": 891,
        "nombres": "Laura",
        "anioNacimiento": "1990-04-15",
        "ciudad": "Bogotá",
        "Correo": "laura@gmail.com",
        "telefono": "3109876543",
        "ips": "Sanitas",
        "grupoIngresos": "B",
        "poliza": "true",
        "fechaAfiliacion": "2021-03-10"
    },
    {
        "id": 892,
        "nombres": "Jorge",
        "anioNacimiento": "1985-12-30",
        "ciudad": "Cali",
        "Correo": "jorge@gmail.com",
        "telefono": "3123456789",
        "ips": "Cafesalud",
        "grupoIngresos": "A",
        "poliza": "false",
        "fechaAfiliacion": "2020-07-20"
    },
    {
        "id": 893,
        "nombres": "Ana",
        "anioNacimiento": "1995-11-05",
        "ciudad": "Barranquilla",
        "Correo": "ana@gmail.com",
        "telefono": "3156781234",
        "ips": "Coomeva",
        "grupoIngresos": "C",
        "poliza": "true",
        "fechaAfiliacion": "2023-01-15"
    }
]


//2. Crear una referencia a una etiqueta para html donde vamos a renderizar 

let fila = document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada 
pacientes.forEach(function(paciente){
    console.log(pacientes)
    
    //4. Se crean columnas
    let columna=document.createElement("div")
    columna.classList.add(col)

    //5. Se crean tarjetas
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100", "shadow")

    //6. Se crea una etiqueta para poner el nombre del paciente
    let nombre = document.createElement("h2")
    nombre.textContent=paciente.nombres

    //paso final (Ordenando las cartas)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})