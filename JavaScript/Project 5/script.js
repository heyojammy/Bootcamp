
let desserts = [
    "Assets/strawbeary.png",
    "Assets/rilakkupan.jpg",
    "Assets/croitotoro.jpg"
]; 

let i = 0; //Tracking picture index position in array. 

    document.getElementById("nextImage").addEventListener("click", () => {
        i++; 
        if (i >= desserts.length){
            i = 0;
        }
        document.querySelector("img").src = desserts[i]; 
    });

    document.getElementById("previousImage").addEventListener("click", () => {
        i--; 
        if (i < 0){
            i = desserts.length-1; 
        }
        document.querySelector("img").src = desserts[i]; 
    });