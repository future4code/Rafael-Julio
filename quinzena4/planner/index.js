const inputTarefa = document.getElementById("tarefa");
const diasDaSemana = document.getElementById("dias-semana");



function adicionarItemNaLista() {
  
  let minhasTarefas = "";
  const tarefa = inputTarefa.value;

  if (tarefa == "") {

    alert("Você não adicionou nenhuma tarefa!!!");

  } else if (diasDaSemana.value === "domingo") {
      minhasTarefas = document.getElementById("tarefas-domingo");
      minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
      inputTarefa.value = "";
    
    } else if (diasDaSemana.value === "segunda") {
        minhasTarefas = document.getElementById("tarefas-segunda");
        minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
        inputTarefa.value = "";   
      
        } else if (diasDaSemana.value === "terca") {
          minhasTarefas = document.getElementById("tarefas-terca");
          minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
          inputTarefa.value = "";
          
            } else if (diasDaSemana.value === "quarta") {
              minhasTarefas = document.getElementById("tarefas-quarta");
              minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
              inputTarefa.value = "";
                
                } else if (diasDaSemana.value === "quinta") {
                  minhasTarefas = document.getElementById("tarefas-quinta");
                  minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
                  inputTarefa.value = "";
                
                    } else if (diasDaSemana.value === "sexta") {
                      minhasTarefas = document.getElementById("tarefas-sexta");
                      minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
                      inputTarefa.value = "";
                    
                        } else if (diasDaSemana.value === "sabado") {
                          minhasTarefas = document.getElementById("tarefas-sabado");
                          minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
                          inputTarefa.value = "";
                          
                          }
  
}

function apagarTudo() {
  
  let lista1 = document.getElementById("tarefas-domingo");
    
  while (lista1.hasChildNodes()) {  
  lista1.removeChild(lista1.firstChild);
  }

  let lista2 = document.getElementById("tarefas-segunda");
    
  while (lista2.hasChildNodes()) {  
  lista2.removeChild(lista2.firstChild);
  }

  let lista3 = document.getElementById("tarefas-terca");
    
  while (lista3.hasChildNodes()) {  
  lista3.removeChild(lista3.firstChild);
  }

  let lista4 = document.getElementById("tarefas-quarta");
    
  while (lista4.hasChildNodes()) {  
  lista4.removeChild(lista4.firstChild);
  }

  let lista5 = document.getElementById("tarefas-quinta");
    
  while (lista5.hasChildNodes()) {  
  lista5.removeChild(lista5.firstChild);
  }

  let lista6 = document.getElementById("tarefas-sexta");
    
  while (lista6.hasChildNodes()) {  
  lista6.removeChild(lista6.firstChild);
  }

  let lista7 = document.getElementById("tarefas-sabado");
    
  while (lista7.hasChildNodes()) {  
  lista7.removeChild(lista7.firstChild);
  }
}

