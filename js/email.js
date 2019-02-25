$(document).on('click', '#modal_btn', function() {
    var name_modal = $('#modal_name').val();
    var modal_phone = $('#phone_modal').val();
    var modal_comment = $('#comment_modal').val();

    var str = `
        Name User:   ${name_modal}, \n
        Phone User:    ${modal_phone}, \n     
        Comment User:    ${modal_comment}.`;

    var data = { "Message": str }

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/35.158.90.255:9080/process-form",
        headers: { 'Access-Control-Allow-Origin': 'http://35.158.90.255' },
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            window.location.hash = "Lid";
            $('#exampleModalCenter').modal('hide');
            $('#successModal').modal('show');
            $('#modal_name').val('');
            $('#phone_modal').val('');
            $('#comment_modal').val('');
        },
        error: function() {
            $('#exampleModalCenter').modal('hide');
            $('#errorModal').modal('show');
            $('#modal_name').val('');
            $('#phone_modal').val('');
            $('#comment_modal').val('');
        },
    })
});

$(document).on('click', '#call_me_now_btn', function() {
    var name_modal = $('#name').val();
    var modal_phone = $('#phone_number').val();

    var str = `
        First Name: ${name_modal}
        Phone: ${modal_phone}
           `;

    var data = { "Message": str }

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/35.158.90.255:9080/process-form",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            window.location.hash = "Lid";
            $('#exampleModalCenter').modal('hide');
            $('#successModal').modal('show');
            $('#name').val('');
            $('#phone_number').val('');
        },
        error: function() {
            $('#exampleModalCenter').modal('hide');
            $('#errorModal').modal('show');
            $('#name').val('');
            $('#phone_number').val('');
        }
    })
});

function remove_hash_from_url() {
    var uri = window.location.toString();
    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("#"));
        window.history.replaceState({}, document.title, clean_uri);
    }
}

$(document).on('click', '#send_sale_btn', function() {
    var name_modal = $('#name_sale').val();
    var modal_phone = $('#phone_number_sale').val();
    var modal_comment = $('#comments_modal').val();


    var str = `
        this is block SALE; First Name:${name_modal}
        Phone: ${modal_phone}
        Comments: ${modal_comment} 
           `;

    var data = { "Message": str }

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/35.158.90.255:9080/process-form",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            window.location.hash = "Lid";
            $('#sale_modal').modal('hide');
            $('#successModal').modal('show');
            $('#name_sale').val('');
            $('#phone_number_sale').val('');
            $('#comments_modal').val('');
        },
        error: function() {
            $('#sale_modal').modal('hide');
            $('#errorModal').modal('show');
            $('#name_sale').val('');
            $('#phone_number_sale').val('');
            $('#comments_modal').val('');
        }
    })
});

$(document).on('click', '#call_right_now_btns', function() {
    var name_modal = $('#name_right_now').val();
    var modal_phone = $('#phone_right_now').val();

    var str = `
        First Name:${name_modal}
        Phone: ${modal_phone}
        `;

    var data = { "Message": str }

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/35.158.90.255:9080/process-form",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            window.location.hash = "Lid";
            $('#exampleModalCenter').modal('hide');
            $('#successModal').modal('show');
            $('#name_right_now').val('');
            $('#phone_right_now').val('');
        },
        error: function() {
            $('#exampleModalCenter').modal('hide');
            $('#errorModal').modal('show');
            $('#name_right_now').val('');
            $('#phone_right_now').val('');
        }
    })
});



$(document).on('click', '#modal_btn_comments', function() {
    var name_modal = $('#modal_comments_name').val();
    var modal_comments = $('#comment_modal_comments').val();

    var str = `
        First Name:${name_modal}
        Comments: ${modal_comments} 
        `;

    var data = { "Message": str }

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/35.158.90.255:9080/process-form",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(data) {
            $('#comments').modal('hide');
            $('#successModal_comment').modal('show');
            $('#modal_comments_name').val('');
            $('#comment_modal_comments').val('');
        },
        error: function() {
            $('#exampleModalCenter').modal('hide');
            $('#errorModal').modal('show');
            $('#modal_comments_name').val('');
            $('#comment_modal_comments').val('');
        }
    })
});