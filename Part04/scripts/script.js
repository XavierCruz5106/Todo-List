let addBtn = document.getElementById("add-task");
let create = document.getElementById("create");
let todo = document.getElementById("todo");
let button = document.getElementById("create-btn");
let closes = document.getElementById("close-btn");
let text = document.getElementById("todo-text");
var prevText = document.getElementById("prev-text");

button.onclick = () => {
  text.value = '';
  prevText.innerHTML = '';
  fadeIn(create);
}

closes.onclick = () => {
  fadeOut(create);
}

addBtn.onclick = () => {
  console.log("Start");
  add();
}




function fadeIn(el){
    el.classList.add('fadeIn');
    el.classList.remove('fadeOut');  
    create.style.visibility = "visible";
    todo.style.filter = "blur(5px)";
  }
  
  function fadeOut(el){
    el.classList.add('fadeOut');
    el.classList.remove('fadeIn');
    create.style.visibility = "hidden";
    todo.style.filter = "none";
  }



  function textBoxChange(){
    prevText.innerHTML = text.value;

  }

  function add() {
    let text = document.getElementById("todo-text");
    if (text.value == ""){
      alert("Please enter a task");
    } else {
      var d = document.createElement( "div" );
      d.id = "task-box";
      d.style.cssText = "padding-top: 4.5%; text-align: center; border-radius: 5px;";


      var textBox = document.createElement( "input" );
      textBox.id = "taskName";
      textBox.value = text.value;
      textBox.readOnly = true;
      
      d.appendChild(textBox);


      var doneEdit = document.createElement( "button" );
      doneEdit.id = "done";
      doneEdit.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';
      doneEdit.style.visibility = 'hidden';

      var cancelEdit = document.createElement( "button" );
      cancelEdit.id = "cancel";
      cancelEdit.innerHTML = '<ion-icon name="close"></ion-icon>';
      cancelEdit.style.visibility = 'hidden';

      d.appendChild(cancelEdit);
      d.appendChild(doneEdit);

      var icons = document.createElement( "div" );
      icons.className = "icons";
      icons.id = "icons"
      
      var deleteBtn = document.createElement( 'button' );
      deleteBtn.id = 'del-btn';
      deleteBtn.innerHTML = '<ion-icon name="trash"></ion-icon>';
      
      var editBtn = document.createElement( 'button' );
      editBtn.id = 'edit-btn';
      editBtn.innerHTML = '<ion-icon name="pencil"></ion-icon>';

      
      d.appendChild(icons);

      icons.append(deleteBtn);
      icons.append(editBtn);


      var i = document.getElementById( "tasks" );
  
      i.appendChild(d);

      deleteBtn.onclick = () => {
        i.removeChild(d);
      }

      editBtn.onclick = () => {
        textBox.readOnly = false;
        textBox.focus();
        doneEdit.style.visibility = "visible";
        cancelEdit.style.visibility = "visible";

        var save = textBox.value;

        doneEdit.onclick = () => {
          doneEdit.style.visibility = "hidden";
          cancelEdit.style.visibility = "hidden";
          textBox.readOnly = true;
        }

        cancelEdit.onclick = () => {
          doneEdit.style.visibility = "hidden";
          cancelEdit.style.visibility = "hidden";
          textBox.value = save;
          textBox.readOnly = true;
        }
      }

      fadeOut(create);
      create.style.visibility = "hidden";
    }
  }

