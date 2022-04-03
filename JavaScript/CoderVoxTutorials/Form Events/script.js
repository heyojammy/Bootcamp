
let email = document.getElementById("email"); 
let warning = document.getElementById("message"); 

email.addEventListener("focus", function (){
    warning.textContent = "Please enter a valid email";
});

email.addEventListener("blur", function(){
    if (email.value === "") {
        alert("Email can't be blank"); 
    } else {
        warning.textContent = ""; 
    }
});