

$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed'); 
})

$('ul').on('click', 'span', function(){
    $(this).parent().remove(); 
})

$('input.todoInput').keypress(function(event){

    if(event.which === 13 && $(this).val() !== ""){
        let todoItem = $(this).val()
        $('ul').append(`
        <li>
        ${todoItem}
        <span><i class="fas fa-trash"></i></span>
        </li>
        `)
        $('input.todoInput').val("");
    }
})
