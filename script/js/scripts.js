function init() {
    
}

// function doit() {
//     alert(this.parentNode.className);
// }

window.onload = init;

var table = document.querySelector("#mytable");



// function enableEditClick(){
//     var edit = document.querySelector(".edit");
    
// }

var edit = document.querySelector(".edit");
if(edit && edit.length){
    edit.onclick = function(){
        alert("Edit clicked");
    }    
}


// Remove All
var removeAllButton = document.querySelector("#btnRemoveAll");
removeAllButton.onclick = function(){
    table.innerHTML = "";
}

// var table = document.getElementById("mytable");
// var divs = document.getElementsByTagName("div");
// var menu = document.getElementsByClassName("navigation");

var serialNumber = 10;

var data = {};

function setValues(){
    data.name = document.myForm.name.value;
    data.email = document.myForm.email.value;
    data.address = document.myForm.address.value;
}

function clearForm(){
    document.myForm.name.value = "";
    document.myForm.email.value = "";
    document.myForm.address.value = "";
}

var submitButton = document.querySelector("#btnSubmit");

submitButton.onclick = myfunc;

var myfunc = function(){ // anonymous function
    setValues();

    this.value = "Saved";
    this.style.display = "none";

    let existingRows = table.innerHTML;

    let newRow = '<tr>'+
                    '<th>' + serialNumber + '</th>'+
                    '<th id="name' + serialNumber + '">' + data.name + '</th>'+
                    '<th id="email' + serialNumber + '">' + data.email + '</th>'+
                    '<th id="address' + serialNumber + '">' + data.address + '</th>'+
                    '<th><a href="#" class="edit" id="edit-' + serialNumber + '">Edit</a> | <a href="#" id="delete-' + serialNumber + '">Delete</a></th>'+
                '</tr>';
    table.innerHTML = existingRows + newRow;
    serialNumber++;
    // enableEditClick();
    clearForm();
}