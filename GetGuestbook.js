/// <reference path="jquery-1.10.2.min.js" />
$(document).ready(function () {
    var ulGuestbook = $('#guestbook');
    $('#btn').click(function () {
        $.ajax({
            type: 'GET',
            url: "api/questbook/",
            dataType: 'json',
            success: function (data) {
                $.each(data, function (index, val) {
                    var fullName = val.Name + ' ' + val.Url;
                    ulGuestbook.append('<li>' + fullName + '</li>');
                });
            }
        });
    });
});