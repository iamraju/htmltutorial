let table           = document.querySelector("#mytable");
let btnAdd          = document.querySelector("#btnAdd");
let btnSave         = document.querySelector("#btnSave");
let removeAllButton = document.querySelector("#btnRemoveAll");

let form            = document.myForm;

var serialNumber    = 1;

// hide save button
btnSave.style.display = 'none';

function Employee(){
    this.id = null;
    this.name = null;
    this.email = null;
    this.address = null;

    this.addNew = function(){
        let tr          = document.createElement("TR");
        let th          = document.createElement("TH");
        th.innerText    = serialNumber;

        let tdName      = document.createElement("TD");
        tdName.innerText = this.name;
        tdName.id       = 'name' + serialNumber;

        let tdEmail         = document.createElement("TD");
        tdEmail.innerText = this.email;
        tdEmail.id = 'email' + serialNumber;

        let tdAddress         = document.createElement("TD");
        tdAddress.innerText = this.address;
        tdAddress.id = 'address' + serialNumber;

        let tdAction         = document.createElement("TD");
        tdAction.innerHTML   = '<a href="javascript:;" class="edit" id="edit-' + serialNumber + '">Edit</a> | <a href="javascript:;" class="delete" id="delete-' + serialNumber + '">Delete</a>';

        tr.appendChild(th);
        tr.appendChild(tdName);tdEmail
        tr.appendChild(tdEmail);
        tr.appendChild(tdAddress);
        tr.appendChild(tdAction);

        table.appendChild(tr); 

        serialNumber++;
        this.clearForm();
    }

    this.clearForm = function(){
        form.reset();
    }

    this.deleteRow = function(element){
        if(confirm("Are you sure to delete ?\n\nPress OK to confirm, or Cancel.")){
            var tr = element.parentElement.parentElement;
            tr.remove();

            // tr.parentElement.removeChild(tr);
        }

        return false;
    }

    this.editRow = function(element){
        // edit-2
        var id = element.id.substring(5);
        form.editID.value = id;

        var name = document.querySelector("#name" + id).textContent;
        var email = document.querySelector("#email" + id).textContent;
        var address = document.querySelector("#address" + id).textContent;

        form.name.value = name;
        form.email.value = email;
        form.address.value = address;

        btnSave.style.display = '';
        btnAdd.style.display = 'none';
    }

    this.editSave = function(){
        // save data to the table
        let id = form.editID.value;
        
        document.querySelector("#name" + id).textContent = form.name.value;
        document.querySelector("#email" + id).textContent = form.email.value;
        document.querySelector("#address" + id).textContent = form.address.value;

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

    if(element.className == 'removeItem'){
        removeLi(element);
    }
});

// Remove All
removeAllButton.onclick = function(){
    employee.removeAll();
}

btnSave.onclick = function(){
    employee.editSave();
}

// Add new employee
btnAdd.onclick = function(){ // anonymous function

    if(form.name.value == ""){
        form.name.style.border = '1px solid red';
        let nameError = document.querySelector('#name-error');
        nameError.style.color = 'red';
        nameError.innerText = "Please enter some value";
        return false;
    }

    employee.name = form.name.value;
    employee.email = form.email.value;
    employee.address = form.address.value;

    employee.addNew();
}

function removeLi(element){
    element.parentElement.remove();
}

var lnkAddItem = document.querySelector('#addItem');
var ulContainer = document.querySelector('#myList')
lnkAddItem.onclick = function(){
    document.querySelector('LI').remove();

    // let newLi = document.createElement('LI');
    // newLi.innerHTML = 'New List <a href="#" class="removeItem"> x </a>';
    // ulContainer.appendChild(newLi);

    return false;
}


function MyClass(){
    this.name = "Swastik College";

    this.getName = function(){
        return this.name;
    }
}

form.name.onkeypress = function(){
    console.log(this.value);
}

var obj = new MyClass();

MyClass.prototype.email = "ram@gmail.com";
MyClass.prototype.getEmail = function(){
    return this.email;
}
