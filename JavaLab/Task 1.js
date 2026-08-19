 
 company = {
    name : "Engineering",
    employees : [
        {Name: "Ahmed" , Role : "Civil"},
        {Name : "Yousef" , Role : "Electrical"},
        {Name: "Salma" , Role : "Computer"},
        {Name: "Nada" , Role : "Architecutal"}
    ]
 };
function showInfo(){
    alert("Company name: " + company.name);
    company.employees.forEach(function(employees){
     console.log("Name: " + employees.Name + ", Role: " + employees.Role);
})
}
