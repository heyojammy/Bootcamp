//write a function that takes a string and return a new string with all vowels removed.

//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

//Note: for this kata y isn't considered a vowel.


//1. turn string into an array
//2. find letters a i u e o -> filter() -> conditional? if letter = vowel, then_____________. 
//3. Remove the letters 
//4. change back to a string

//Each iteration: 
    //returns true or false

    function disemvowel(str) {
        let strarray = str.split("");
        let filter = strarray.filter(letter => {
            if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
                return false;
            } else {
                return true;
            }   
        })
        return filter.join(""); 
    }
    
    disemvowel("I hug cats all day errday"); //output: hg cts ll dy rrdy