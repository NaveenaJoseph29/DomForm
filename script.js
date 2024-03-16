const form = document.querySelector(".Domform")
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let Gender = document.getElementById("Gender").value;

    let table = document.getElementById("table")
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerText = FirstName;
    cell2.innerText = LastName;
    cell3.innerText = Gender;
    form.reset();
});