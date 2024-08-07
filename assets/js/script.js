var tareas = [ { tarea: "Pintar la fachada de la casa" }, { tarea: "Comprar comida para el perro" },  { tarea: "Pagar la tarjeta de crédito" } ];
 
document.querySelector("#cuerpo-tabla").removeChild(document.querySelector("#tr-cuerpo-tabla"));
this.showTask();

function showForm(){
    this.hideMessage();
    document.getElementById('formulario').style.display === "none" ? document.getElementById('formulario').style.display = "block" : document.getElementById('formulario').style.display = "none";
}

function validateTask(){
    var task = document.getElementById('nuevaTarea').value;
    task.length <= 3 ? this.showMessage() : this.addTask(task) ;
}

function showMessage(){
    document.getElementById('validation').style.display = "block";
}

function hideMessage(){
    document.getElementById('validation').style.display = "none";
}

function addTask(task){    
    document.getElementById('nuevaTarea').value = " ";
    document.getElementById('formulario').style.display = "none";
    this.tareas.push({tarea: task});
    this.showTask();
}

function deleteTask(item) {   
    let  id = Number(item.parentElement.parentElement.rowIndex);
    this.tareas.splice(id-1,1);
    // console.log("item "+JSON.stringify(tareas));
    this.showTask();
}

function showTask(){
    this.hideMessage();
    document.querySelector("#tabla-tareas tbody").innerHTML = tareas.map(task => `<tr><td>${task.tarea}</td><td><button type="button" class="btn btn-danger" onclick="deleteTask(this)">Finalizar</button></td></tr>`).join('');
}