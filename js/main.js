

    var name = document.getElementById("Name").value;
    var title = document.getElementById("Title").value;
    var HourRate = parseFloat(document.getElementById("HourRate").value);
    var Hour = parseFloat(document.getElementById("Hour").value);
    var salary = HourRate * Hour + ".LE";
function onFormSubmit() {
//culclate salary and added and decleration data
    var name = document.getElementById("Name").value;
    var title = document.getElementById("Title").value;
    var HourRate = parseFloat(document.getElementById("HourRate").value);
    var Hour = parseFloat(document.getElementById("Hour").value);

    if (name === "" || title === "") {
        alert("Please fill all data correctly.");
        return false;}
    else if(isNaN(HourRate) || isNaN(Hour)){
        alert("Input must be a number");
        return false;
    }

    var salary = HourRate * Hour + ".LE";
    if (Hour>24){
        alert ("You have exceeded the number of hours in a day");
        return;
    }
    var formData = readFormData();
    formData.salary = salary;
    addDataToTable(formData);
    
}


//put data in array opject to select it and take a valueto read it 
    function readFormData() {
        var formData = {};
        formData["Name"] = document.getElementById("Name").value;
        formData["Title"] = document.getElementById("Title").value;
        return formData;
    }
    

function addDataToTable(person) {
    var table = document.getElementById("postting").getElementsByTagName('tbody')[0];
    var row = table.insertRow(-1);//to add a new row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
//data in table 
    cell1.innerHTML = person.Name;
    cell2.innerHTML = person.salary;
    cell3.innerHTML = person.Title;
    cell4.innerHTML = " <button class='btn btn-outline-danger' onclick='deleteRow(this)'id='Delete' >Delete</button>";
    cell4.innerHTML += "<button class='btn btn-outline-info ml-1' onclick='editRow(this)'  id='edit' >Edit</button>";

}

function editRow(button) {
    var row = button.parentNode.parentNode;
    var salaryCell = row.cells[1];
    // update salary
    var newSalary = prompt("Enter the new salary:");

    //to get new value of newsalary
    if (newSalary !== null) {
        salaryCell.innerHTML = newSalary+".LE";
    }
}
// delete row
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
