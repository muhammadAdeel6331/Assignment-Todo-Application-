var list = document.getElementById("list")

function addTodo(){
    var input_item = document.getElementById("input-item")
    var li = document.createElement('li')
    var liText= document.createTextNode(input_item.value)
    li.appendChild(liText)
    li.setAttribute("class","li ")

    var editbtn =document.createElement("button") 
    var editTxt = document.createTextNode("Edit")
    editbtn.appendChild(editTxt)
    li.appendChild(editbtn)
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.setAttribute("class","btn")

    var dltbtn =document.createElement("button") 
    var dltTxt = document.createTextNode("Delete")
    dltbtn.appendChild(dltTxt)
    li.appendChild(dltbtn)
    dltbtn.setAttribute("onclick","deleteItem(this)")
    dltbtn.setAttribute("class","btn")

    list.appendChild(li)
    input_item.value= ""
}

function deleteItem(e){
    e.parentNode.remove()   
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editval = prompt("Enter edit value" ,val)
    e.parentNode.firstChild.nodeValue = editval
    console.log()
}
function dltAll(){
     list.innerHTML=""
}