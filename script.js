$(document).ready(function () {
    $('button').click(function () { 
        if($(this).text() != '='){
            if($(this).text() != 'Clear'){
                let va = $(this).text();   
                $('#ekran').val( $('#ekran').val() + va);
            }
        }
    });

    $('#enter').click(function(){
        $('#ekran').val( eval( $('#ekran').val() ));
    });

    $('#clear').click(function(){
        $('#ekran').val('');
    })

});