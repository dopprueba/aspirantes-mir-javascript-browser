let idCheck = 0;

const btnAgregar = document.getElementById("btn-agregar");
btnAgregar.addEventListener("click", agregarTarea);

const btnBorrarHechas = document.getElementById("btn-borrar-hechas");
btnBorrarHechas.addEventListener('click', borrarHechas)


function agregarTarea(event){
    console.log("Agregar tarea.");
    const txt = document.getElementById("txt-agregar");
    idCheck += 1;

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "checkboxDinam-" + idCheck;

    check.addEventListener('click', chequearTarea);
    
    const label = document.createElement("label");
    label.id = "labelDinam-" + idCheck;
    label.htmlFor = check.id;
    label.appendChild(document.createTextNode(txt.value));
    
    const li = document.createElement("li");
    li.id = "liDinam-" + idCheck; 
    li.appendChild(check);
    li.appendChild(label); 
    const ul = document.querySelector("ul");
    ul.appendChild(li);
}


function chequearTarea(event){
    console.log("Chequear tarea.");
    const id = event.srcElement.id; 
    const checkTemp = document.getElementById(id);
    const aux = id.replace("checkboxDinam-", "");
    const labelTemp = document.getElementById("labelDinam-" + aux);

    if (checkTemp.checked) {
        labelTemp.classList.add("tachado")
    }else{
        labelTemp.classList.remove("tachado");
    }
}


function borrarHechas(event){
    console.log("Borrar todas las tareas chequeadas.");
    let checkList = document.querySelectorAll('input[type="checkbox"');
    
    for (const check of checkList) {
        if (check.checked) {
           const li = check.parentNode;
           li.parentNode.removeChild(li);
        }
    }
}


