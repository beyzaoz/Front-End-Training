const input = document.getElementById("task");
const button = document.getElementById("liveToastBtn");
const lists = document.getElementById("list");
const emptyError = document.getElementById("liveToast");
const successAdded = document.getElementById("liveToast1");

  //event listener for remove the list
    lists.addEventListener("click", function(i){
       if(i.target.classList.contains("delete-btn")){
        i.target.parentElement.remove();
       }

       if(i.target.tagName==="LI"){
        i.target.classList.toggle("completed")
       }
    });


function newElement() {

    //create an element means LIST:
    const textValue = input.value.trim();
    if (textValue == "") {
        emptyError.show();
        return;
    }

    const addElement = document.createElement("li")
    addElement.innerHTML = textValue;


    //create a button  means x
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");

    //needs to add it otherwise its will not show it

    addElement.appendChild(deleteBtn);
    lists.appendChild(addElement);

   



    input.value = "";
    bootstrap.Toast.getOrCreateInstance(successAdded).show();



}





