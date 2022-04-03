

let backgrounds = ["Assets/autumnCoffee.jpg", "Assets/autumncreek.jpg", "Assets/smokeyautumn.jpeg"]; 
let i = 0; 

function rotateImage(){
    document.querySelector("img").setAttribute("src", backgrounds[i]);
    i++; 
    if (i >= backgrounds.length){
        i = 0; 
    }
}

setInterval(rotateImage, 3000); 