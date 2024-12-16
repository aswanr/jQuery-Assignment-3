$(document).ready(function () {
    $('#name').blur(function (e) {
        e.preventDefault();
        if ($(this).val().length <= 3) {
            $('#nameerror').html("* Name must have a minimum of 3 characters");
        } else {
            $('#nameerror').html("");
        }
    });

    $('#feedback').blur(function (e) {
        e.preventDefault();
        if ($(this).val().length <= 10) {
            $('#feedbackerror').html("* Feedback must have a minimum of 10 characters");
        } else {
            $('#feedbackerror').html("");
        }
    });

    $('form').submit(function (e) {
        e.preventDefault();
        let x = $('#name').val();
        let y = $('#feedback').val();
        let z = $('#email').val();

        if (x.length <= 3) {
            $('#nameerror').html("* Name must have a minimum of 3 characters");
            return;
        } else {
            $('#nameerror').html("");
        }

        if (y.length <= 10) {
            $('#feedbackerror').html("* Feedback must have a minimum of 10 characters");
            return;
        } else {
            $('#feedbackerror').html("");
        }

        let totaData = {
            "name": x,
            "feedback": y,
            "email": z
        };

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: JSON.stringify(totaData),
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                console.log("Form data added");
                $('p,h3').remove();
                $('form').append('<h3>Form submitted successfully!</h3>');
                for (const key in response) {
                    $('form').append(`<p>${key}: ${response[key]}</p>`);
                }
                console.log(response);
                $('#name').val("");
                $('#feedback').val("");
                $('#email').val("");
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});
