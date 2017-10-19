/// <reference path="jquery-1.10.2.min.js" />
$(document).ready(function () {
    $('#btnAddQuestbookInfo').click(function () {
        var guestbook = {};
        guestbook.Name = $('#txtName').val();
        guestbook.Url = $('#txtUrl').val();
        guestbook.Category = $('#txtCategory').val();

        $.ajax({
            url: 'api/questbook',
            method: 'post',
            data: JSON.stringify(guestbook),
            contentType: "application/json; charset=utf-8",
            success: function () {
                alert("Data is successfully saved!");
            },
            error: function (err) {
                alert(err);
            }
        });
    });
});