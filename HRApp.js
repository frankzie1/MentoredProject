var selectedRow=null;

function onFormSubmit() {
    if(validate()) {
    var formData=readFormData();
    if(selectedRow==null)
        insertNewRecord(formData);
        else
        updateRecord(formData);
    resetForm();
    }
}

function readFormData(){
    var formData={};
    formData["ninumber"]=document.getElementById("ninumber").value;
    formData["fullname"]=document.getElementById("fullname").value;
    formData["phone"]=document.getElementById("phone").value;
    formData["address"]=document.getElementById("address").value;
    formData["department"]=document.getElementById("department").value;
    return formData;
}

function insertNewRecord(data) {
    var table=document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.ninumber;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.fullname;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.phone;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.address;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.department;
    cell6=newRow.insertCell(5);
    cell6.innerHTML="<a onclick='onEdit(this)'>Edit</a> <a onclick='onDelete(this)'>Delete</a>";
}

function resetForm(){
    document.getElementById("ninumber").value="";
    document.getElementById("fullname").value="";
    document.getElementById("phone").value="";
    document.getElementById("address").value="";
    document.getElementById("department").value="";
    selectedRow=null;
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("ninumber").value=selectedRow.cells[0].innerHTML;
    document.getElementById("fullname").value=selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value=selectedRow.cells[2].innerHTML;
    document.getElementById("address").value=selectedRow.cells[3].innerHTML;
    document.getElementById("department").value=selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.ninumber;
    selectedRow.cells[1].innerHTML=formData.fullname;
    selectedRow.cells[2].innerHTML=formData.phone;
    selectedRow.cells[3].innerHTML=formData.address;
    selectedRow.cells[4].innerHTML=formData.department;
}

function onDelete(td){
    if (confirm("Are you sure you want to delete this record?"))
    row=td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
}

function validate(){
    isValid=true;
    if(document.getElementById("ninumber").value==""){
        isValid=false;
        document.getElementById("ninumberValidationError").classList.remove("hide");
    }
    else{
        isValid=true;
        if (document.getElementById("ninumberValidationError").classList.contains("hide"))
            document.getElementById("ninumberValidationError").classList.add("hide");
    }
    return isValid;
    }


    