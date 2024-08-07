var tareas = [ { tarea: "Pintar la fachada de la casa" }, { tarea: "Comprar comida para el perro" },  { tarea: "Pagar la tarjeta de crédito" } ];
 
  function showForm() {
    this.hideMessage();
    const status = document.getElementById("formulario").style;
    status.display = status.display === "none" || status.display === '' ? "block" : "none";
  }
  
  function validateTask() {
    var task = document.getElementById("nuevaTarea").value;
    task.length <= 3 ? this.showMessage() : this.addTask(task);
  }
  
  function showMessage() {
    document.getElementById("validation").style.display = "block";
  }
  
  function hideMessage() {
    document.getElementById("validation").style.display = "none";
  }
  
  function addTask(task) {
    document.getElementById("nuevaTarea").value = "";
    document.getElementById("formulario").style.display = "none";
    this.tareas.push({ tarea: task });
    this.showTask();
  }
  
  function deleteTask(indexToDelete) {
    this.tareas = this.tareas.filter((item, index) => index !== indexToDelete);
    this.showTask();
  }
  
  function showTask() {
    this.hideMessage();
    document.getElementById("cuerpo-tabla").innerHTML = tareas
      .map(
        (task, index) =>
          `<tr><td>${task.tarea}</td><td><button type="button" class="btn btn-danger" onclick="deleteTask(${index})">Finalizar</button></td></tr>`
      )
      .join("");
  }
  
  this.showTask();  