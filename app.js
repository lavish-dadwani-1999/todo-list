var todoform = document.querySelector(".todo-form")
var todolist =document.querySelector(".todo-list") 
var todoedit =document.querySelector(".todo-edit")
var todoeditinput =document.querySelector(".todo-edit .editinput")
var tododelet = document.querySelector(".btn-delete")
var todobtnedit = document.querySelector(".btn-edit")
var hiddeninput = document.querySelector(".hiddeninput")
var editconfirm = document.querySelector(".edit-button  .btn-edit")

function dateid (){
    return Date.now().toString()
}

todos=[]


function createtodo(event){
    // prevent the default action
     event.preventDefault()
    // generate a random id
    var id =dateid()
    // get the details from the form
    var todo = event.target.todo.value
    // enclose it in a object
    var todoobject ={
        id:id,
        todo:todo
    }
    todos.push(todoobject)

    // cretaions of the element
//     var todoitem= ` <li class="todo-item">
//     <span>${todo}</span>
//     <div class=" btn todo-buttons">
//         <button class="btn btn-edit">Edit</button>
//         <button class="btn btn-delete">Delete</button>
//     </div>
// </li>`
    var litag = document.createElement("li")
    litag.classList.add("todo-item")
    var span = document.createElement("span")
    span.innerText=todo
    var divtag = document.createElement("div")
    divtag.classList.add("todo-buttons")
    var editbuttontag =document.createElement("button")
    editbuttontag.classList.add("btn","btn-edit")
    editbuttontag.innerText="Edit"
    var deletbuttontag = document.createElement("button")
    deletbuttontag.classList.add("btn","btn-delete")
    deletbuttontag.innerText=("Delete")

    //  add event lisner before the append

    editbuttontag.addEventListener("click",function(){
        console.log("clicked")
        todoedit.style.display = "flex"
        hiddeninput.value = id
        todoeditinput.value = todo
    
        
        

    })

    deletbuttontag.addEventListener("click",function(event){
        var todolistitem =   event.target.parentElement.parentElement
        var todoid = todolistitem.dataset.id
        var todoindex = todos.findIndex(function (todo){ return todo.id === todoid })
        todos.splice(todoindex,1)
        todolistitem.remove()
        alert("delet success")
        
    })
// appending all the tag to the dom
  
    divtag.appendChild(editbuttontag)
    divtag.appendChild(deletbuttontag)
  
    litag.appendChild(span)
    litag.appendChild(divtag)

    litag.dataset.id=id
    
    todolist.appendChild(litag)
    event.target.todo.value=""
     

}

console.log(todos)



todoform.addEventListener("submit", createtodo)
// todo edit
editconfirm.addEventListener("click",function(event){
    console.log("comfirm")
    var parentcontainer = event.target.parentElement.parentElement
    console.log(parentcontainer)
    var todoid = parentcontainer.querySelector(".hiddeninput").value
    console.log(todoid)

    var todoindex = todos.findIndex(function(todo){ return todo.id === todoid })

    todos[todoindex].todo =  todoeditinput.value

    var todolistitem = todolist.querySelector('li[data-id=" ' + todoid +  '"]')
    console.log(todolistitem)

    
})

tododelet.addEventListener("click",function(){
    todoedit.style.display=("none")

})
