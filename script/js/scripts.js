let table           = document.querySelector("#mytable");
var btnAdd          = document.querySelector("#btnAdd");
let btnSave         = document.querySelector("#btnSave");
let removeAllButton = document.querySelector("#btnRemoveAll");

let form            = document.myForm;

var serialNumber    = 1;

// hide save button
btnSave.style.display = 'none';

function Employee(){
    this.name = null;
    this.email = null;
    this.address = null;

    this.addNew = function(){
        let tr = document.createElement("TR");
        let newRow = '<th>' + serialNumber + '</th>'+
                        '<td id="name' + serialNumber + '">' + this.name + '</td>'+
                        '<td id="email' + serialNumber + '">' + this.email + '</td>'+
                        '<td id="address' + serialNumber + '">' + this.address + '</td>'+
                        '<td><a href="javascript:;" class="edit" id="edit-' + serialNumber + '">Edit</a> | <a href="javascript:;" class="delete" id="delete-' + serialNumber + '">Delete</a></td>';
        tr.innerHTML = newRow;

        table.appendChild(tr);
        serialNumber++;
        this.clearForm();
    }

    this.clearForm = function(){
        form.reset();
    }

    this.deleteRow = function(element){
        if(confirm("Are you sure to delete ?\nPress OK to confirm, or Cancel.")){
            var tr = element.parentElement.parentElement;
            tr.remove();

            // tr.parentElement.removeChild(tr);
            
            // tr.outerHTML = "";
            // delete tr;
        }

        return false;
    }

    this.editRow = function(element){
        var id = element.id.substring(5);

        var name = document.querySelector("#name" + id).textContent;
        var email = document.querySelector("#email" + id).textContent;
        var address = document.querySelector("#address" + id).textContent;

        document.myForm.name.value = name;
        document.myForm.email.value = email;
        document.myForm.address.value = address;

        btnSave.style.display = '';
        btnAdd.style.display = 'none';
    }

    this.editSave = function(){
        btnSave.style.display = 'none';
        btnAdd.style.display = '';

        this.clearForm();
    }

    this.removeAll = function(){
        table.innerHTML = "";
    }
}

var employee = new Employee();

// add event listener for edit and delete
document.addEventListener('click', function(event){
    if(!event.target) return;

    var element = event.target;

    if(element.className == 'edit'){
        employee.editRow(element);
    }

    if(element.className == "delete"){
        employee.deleteRow(element);
    }
});

// Remove All
removeAllButton.onclick = function(){
    employee.removeAll();
}

// Add new employee
btnAdd.onclick = function(){ // anonymous function
    employee.name = form.name.value;
    employee.email = form.email.value;
    employee.address = form.address.value;

    employee.addNew();
}
