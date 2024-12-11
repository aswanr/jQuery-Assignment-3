$(document).ready(function () {
    $('#name').blur(function (e) {
        e.preventDefault();
        if ($(this).val().length <= 3) {
            $('#nameerror').html(" * more charater is need");
        }
        else {
            $('#nameerror').html("");
        }
    })
    $('#feedback').blur(function (e) {
        e.preventDefault();
        if ($(this).val().length <= 10) {
            $('#feedbackerror').html(" * more charater is need");
        }
        else {
            $('#feedbackerror').html("");
        }
    })
    $('form').submit(function (e) {
        e.preventDefault();
        let x = $('#name').val();
        let y = $('#feedback').val();
        let z = $('#email').val();
        if (x.length <= 3) {
            return;
        }
        else if (y.length < 10) {
            return;
        }
        else {

            let totaData = {
                "name": x,
                "feedback": y,
                "email": z
            }

            $.ajax({
                url: "https://jsonplaceholder.typicode.com/posts",
                method: "POST",
                data: JSON.stringify(totaData),
                contentType: "application/json; charset=utf-8",
                success: function (response) {
                    console.log("form data added");
                    $('p,h3').remove();
                    $('form').append('<h3>Form submitted successfully!</h3>');
                    for (const key in response){
                        $('form').append(`<p> ${key}: ${response[key]} </p>`);
                    }
                    console.log(response);
                    $('#name').val("");
                    $('#feedback').val("");
                    $('#email').val("");
                },
                error: function (error) {
                    console.log(error);
                }
            })
        }
    });
})