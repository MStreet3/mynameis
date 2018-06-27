// JavaScript source code

$('#input-form').on('submit',
    function (e) {

        e.preventDefault();
        
        $(this).css('display', 'none');
        var $formVariables = $(this).serializeArray();
        var $fname = $formVariables[0].value;
        var $lname = $formVariables[1].value;
        $('#overwriteable').html("Hi, my name is " + $fname + " " + $lname + ".");

    }
);

