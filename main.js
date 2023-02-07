
$(function()
{
    "use strict";

    $("#register_form").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 3
            },
            lastname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phoneNumber: {
                required: true,
                phoneUS: true
            },
            password: {
                required: true,
                minlength: 8,
                equalTo: "#confirmPassword"
            },
            confirmPassword: {
                required: true,
                minlength: 8,
                equalTo: "#password"
            }
        },
        messages: {
            firstname: {
                required: "Fisrt name field is required!",
                minlength: "First name must contain at-least 3 characters!"
            },
            lastname: {
                required: "Last name field is required!",
                minlength: "Last name must contain at-least 3 characters!"
            },
            email: {
                required: "E-Mail field is required!",
                email: "Please enter a valid email"
            },
            phoneNumber: "Phone number field is required!",
            password: {
                required: "Password field is required!",
                minlength: "Password must consist of at least 8 characters!",
                equalTo: "Passwords do not match!"
            },
            confirmPassword: {
                required: "Confirm password field is required!",
                minlength: "Password must consist of at least 8 characters!",
                equalTo: "Passwords do not match!"
            },
        },

        submitHandler: function(form)
        {
            form.submit();
        }
    });
});