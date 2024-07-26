const agregar = document.getElementById("agregar");
const boton =document.getElementById("boton");
const contenedorTarea= document.getElementById("contenedordetareas");
let tareasInput=document.getElementById("agregareventos");

let tareasVacia=[];
let listaTarea = JSON.parse(localStorage.getItem("tareas")) || [];

 boton.addEventListener ("click",function () {
     let tareaData ={
        tarea:tareasInput.value,
        Selection:tipoSelect.value
     }

listaTarea.push(tareaData)
localStorage.setItem("tareas", JSON.stringify(listaTarea))

    let pagregar = document.createElement("p");
    let bEliminar = document.createElement("button");
    bEliminar.innerHTML="ELIMINAR";

    let vEditar=document.createElement("button")
    vEditar.innerHTML="EDITAR";
    
    let agregarf= agregar.value;
    pagregar.innerHTML=agregarf;
    contenedorTarea.appendChild(pagregar);
    contenedorTarea.appendChild(bEliminar);
    contenedorTarea.appendChild(vEditar)

    bEliminar.addEventListener("click", function () {
        bEliminar.remove(this);
        vEditar.remove(this);
        pagregar.remove(this)
    })
    vEditar.addEventListener("click", function () {
        let nuevoTexto= prompt("Digite el nuevo texto")
        pagregar.innerHTML = nuevoTexto;
        
    })
   })

//--------------------------EVENTOS------------------------------//

const agregareventos = document.getElementById("agregareventos");
const botoneventos =document.getElementById("botoneventos");
const contenedordeeventos= document.getElementById("contenedordeeventos");
const fechaInput= document.getElementById("fechadeevento");

let eventosObj ={
    Titulo:"",
    Fecha:""
}

let eventosVacio=[]; 
let eventosExistentes = JSON.parse(localStorage.getItem("Eventos"));

function reiniciareventos() {
    if (eventosExistentes.length==0 || eventosExistentes==undefined) {
        localStorage.setItem("Eventos", JSON.stringify(eventosVacio));
        console.log("Entre");
    }
}
reiniciareventos();


 botoneventos.addEventListener ("click",function () {
    let pagregar2 = document.createElement("p");
    let fechaCont= document.createElement("p");
    let bEliminar2 = document.createElement("button");
    bEliminar2.innerHTML="ELIMINAR";

    let vEditar2=document.createElement("button")
    vEditar2.innerHTML="EDITAR";
    
    let agregarj= agregareventos.value;
    let fechaE= fechaInput.value;
    pagregar2.innerHTML=agregarj;
    fechaCont.innerHTML=fechaE;
    contenedordeeventos.appendChild(pagregar2);
    contenedordeeventos.appendChild(fechaCont);
    contenedordeeventos.appendChild(bEliminar2);
    contenedordeeventos.appendChild(vEditar2)

    bEliminar2.addEventListener("click", function () {
        bEliminar2.remove(this);
        vEditar2.remove(this);
        pagregar2.remove(this);
        fechaCont.remove(this);
    })

    vEditar2.addEventListener("click", function () {
        let nuevoTexto= prompt("Digite el nuevo texto")
        pagregar2.innerHTML = nuevoTexto;
    }
    )
    eventosObj.Fecha=fechaE;
    eventosObj.Titulo=agregarj;
    eventosExistentes.push(eventosObj);
    localStorage.setItem("Eventos", JSON.stringify(eventosExistentes));
    console.log("Guarde");

   }
)




