
document.getElementById("userText").addEventListener("keyup", function(){
    let textLength = document.getElementById("userText").value.length; 
    let notice = document.getElementById("warning"); 
    let counter = (10 - (textLength)); 
    notice.textContent = counter + " characters left"; 

    if (counter <= 3) { 
        notice.style.color = "red"; 
    } else {
        notice.style.color = "black"; 
    }
});