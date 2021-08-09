
//$('#addtodo').val('empty')
//("#addtodo".val.length < 1 )

$('#addbtn').on('click', function() {
    if ($('#addtodo').val().length == 0) {
        console.log("I just don't know how to solve this problem in a different way:)")
    } else {
             $('#todolist').append("<li>"+$('#addtodo').val()+"</li>")};
                $('li').on('click', function () {
                    $(this).css('textDecoration', 'line-through')
        });
    });

$('li').on('click', function () {
    $(this).css('textDecoration', 'line-through')
});