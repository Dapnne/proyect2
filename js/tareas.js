//------------------- TAREAS --------------------//
// ---------------campos de entrada-------------///
const agregar = document.getElementById("agregar");
const boton = document.getElementById("boton");
const contenedorTarea = document.getElementById("contenedordetareas");
const tareaInput = document.getElementById("agregareventos");
const tipoSelect = document.getElementById("mySelect"); 
let listaTareas = JSON.parse(localStorage.getItem("tareas")) || [];

function mostrarTareas() { //contenedor que obtiene todo el contenido
    contenedorTarea.innerHTML = ''; 
    listaTareas.forEach((tarea, index) => {
        let pagregar = document.createElement("p");//boton de crear elemento 
        let bEliminar = document.createElement("button");//boton para eliminar
        bEliminar.innerHTML = "ELIMINAR";//se muestre en pantalla de tareas
        let vEditar = document.createElement("button");//boton de editar
        vEditar.innerHTML = "EDITAR";//se muestra en pantalla

        pagregar.innerHTML = `${tarea.tarea} - ${tarea.Selection}`; //se imprime a dentro de la interfaz
        contenedorTarea.appendChild(pagregar); //agrega todo dentro de contenedor
        contenedorTarea.appendChild(bEliminar);//agrega todo dentro de contenedor
        contenedorTarea.appendChild(vEditar);//agrega todo dentro de contenedor

        bEliminar.addEventListener("click", function () { //boton que elimina los elementos que se crearon
            listaTareas.splice(index, 1);
            localStorage.setItem("tareas", JSON.stringify(listaTareas));
            mostrarTareas();
        });

        vEditar.addEventListener("click", function () { //boton de editar, manda un mensaje ariiba de pantalla
            let nuevoTexto = prompt("Digite el nuevo texto", tarea.tarea);
            if (nuevoTexto !== null) {
                listaTareas[index].tarea = nuevoTexto;
                localStorage.setItem("tareas", JSON.stringify(listaTareas));
                mostrarTareas();
            }
        });
    });
}


boton.addEventListener("click", function () { //boton que manda la info al local
    let tareaData = {
        tarea: agregar.value,
        Selection: tipoSelect.value
    };

    listaTareas.push(tareaData);
    localStorage.setItem("tareas", JSON.stringify(listaTareas));
    mostrarTareas();
});

mostrarTareas();

//--------------------------EVENTOS------------------------------//
//------------------campos de entrada----------------//
const agregareventos = document.getElementById("agregareventos");
const botoneventos = document.getElementById("botoneventos");
const contenedordeeventos = document.getElementById("contenedordeeventos");
const fechaInput = document.getElementById("fechaInput"); 

let eventosExistentes = JSON.parse(localStorage.getItem("Eventos")) || [];

function mostrarEventos() { //contenedor que obtiene todo el contenido
    contenedordeeventos.innerHTML = '';
    eventosExistentes.forEach((evento, index) => {
        let pagregar2 = document.createElement("p");//boton de crear elemento 
        let fechaCont = document.createElement("p");//boton de crear elemento 
        let bEliminar2 = document.createElement("button"); //boton que elimina eventos
        bEliminar2.innerHTML = "ELIMINAR"; //se muestra en pantalla el boton
        let vEditar2 = document.createElement("button"); //boton de editar
        vEditar2.innerHTML = "EDITAR";

        pagregar2.innerHTML = evento.Titulo;
        fechaCont.innerHTML = evento.Fecha;
        contenedordeeventos.appendChild(pagregar2);
        contenedordeeventos.appendChild(fechaCont);
        contenedordeeventos.appendChild(bEliminar2);
        contenedordeeventos.appendChild(vEditar2);

        bEliminar2.addEventListener("click", function () {
            eventosExistentes.splice(index, 1);
            localStorage.setItem("Eventos", JSON.stringify(eventosExistentes));
            mostrarEventos();
        });

        vEditar2.addEventListener("click", function () {
            let nuevoTexto = prompt("Digite el nuevo texto", evento.Titulo);
            if (nuevoTexto !== null) {
                eventosExistentes[index].Titulo = nuevoTexto;
                localStorage.setItem("Eventos", JSON.stringify(eventosExistentes));
                mostrarEventos();
            }
        });
    });
}

botoneventos.addEventListener("click", function () {
    let eventoData = {
        Titulo: agregareventos.value,
        Fecha: fechaInput.value
    };

    eventosExistentes.push(eventoData);
    localStorage.setItem("Eventos", JSON.stringify(eventosExistentes));
    mostrarEventos(); 
});

mostrarEventos();
