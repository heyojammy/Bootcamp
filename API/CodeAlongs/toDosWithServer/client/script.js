
const baseURL = "http://students.accsoftwarebootcamp.com:3003" //endpoint that consumes our own API/server

//READ  
$(document).ready(function () { // get all the data from database
    let route = "todos";
    let endpoint = `${baseURL}/${route}`;
    fetch(endpoint)
    .then(function(response){
        if(!response.ok){
            throw Error("Not able to get response from server");
        } else {
            return response.json();
        }
    })
    .then(function(dataArray){
        $("ul").empty() //clears hardcoded data in our HTML UL
        dataArray.forEach(function(todo){ //loops through the to do items
        let completed = todo.isComplete ? "completed" : ""; //if the item has a class called "completed", it will get a red line through it. Otherwise, it will be an empty string, meaning the element will have NO class
       ` <li data-id=${todo.id} class=${completed}>
       ${todo.description}
       <span><i class='far fa-trash-alt'></i></span>`
        $("ul").append( //creates list items
            `<li data-id=${todo.id} class=${completed}>
            ${todo.description}
            <span><i class='far fa-trash-alt'></i></span>
          </li>`
            );
        })
    })
    .catch(function(error){
        console.error(`Issues READING from the database: ${error}`) //console.error() displays the issue as RED to make it stand out
    })
});

//CREATE
$('input').keypress(function(event){
    if(event.which === 13 && $(this).val() !== ""){
        let newToDoItem = {
            description: $(this).val(), //don't need to enter newID and isComplete bc it's hardcoded on backend
        };

        let endpoint = `${baseURL}/todos`;

        fetch(endpoint, {  //get the endpoint
            method: "POST", //post method bc we are sending information to the server
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newToDoItem)
        }) //calls the enpoint and passes an object into it
        .then(function(response){
            if(!response.ok) throw Error("no response creating data");
            else return response.json();
        })
        .then(function(newToDo){ //displays data on webpage. newToDo passed into here is the NEW variable we declared earlier
            $('ul').append(
                `<li data-id="${newToDo.id}>${newToDo.description}<span><i class='far fa-trash-alt'></i></span></li>`);
            $('input').val("");
        })
        .catch(function(error){
            console.error(`Error creating data to server: ${err}`);
        });
    }
})

//UPDATE (Put)
$("ul").on('click', "li", function (){
let thisID = $(this).data("id");  //don't need parent() bc we want to edit the LI, not the UL. 
let endpoint = `${baseURL}/todos/${thisId}`
let self = this;

fetch(endpoint, {method: "PUT"})
.then(function(response){
    if(!response.ok){
        throw Error("Issues getting data from server")
    } else {
        return response.json()
    }
})
.then(function(data){
    $(self).toggleClass('completed');
})
.catch(function(error){
    console.error(`Error updating To Do: ${error}`)
    })
})

//DELETE
$("ul").on('click', "span", function (event){
    event.stopPropagation(); //prevents bubbling 
let thisId = $(this).parent().data("id"); //
let endpoint = `${baseURL}/todos/${thisId}`
let self = this; //refers to the span and assigning it to new variable named 'self' - is now block-scope. 

fetch(endpoint, {method: "DELETE"})
.then(function (response){
    if(!response.ok){
        throw Error('error deleting data')
    } else {
        return response.json()
    }
})
.then(function(data){
    $(self).parent().remove();
})
.catch(function(error){
    console.log(`Error deleting: ${error}`)
    })
})