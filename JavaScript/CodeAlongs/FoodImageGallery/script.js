

let soups = [
    "Assets/chickensoup.jpg",
    "Assets/cheesesoup.jpg",
    "Assets/macaroni.jpg"
]; 

let i = 1; //starts the loop at cheesesoup so chickensoup doesn't display twice. 


    document.querySelector("button").addEventListener("click", () => {
        document.querySelector("img").src = soups[i]; 
        i++; 
        if (i >= soups.length){
            i = 0;
        }
    });




