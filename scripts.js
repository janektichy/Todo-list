

$('#addbtn').on('click', function() {
    if ($('#addtodo').val() == '') {
        console.log("I just don't know how to solve this problem in a different way:)")
    } else {
            $('#todolist').append("<li>"+$('#addtodo').val()+"</li>");
            $('li').last('li').on('click', function () {
                $(this).css('textDecoration', 'line-through')
            console.log('ahoj')
            })           
    };
});

$('li').on('click', function () {
   $(this).addClass('crosed');   
});