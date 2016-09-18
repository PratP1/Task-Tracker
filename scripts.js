$(document).ready(function () {
    $.getJSON("data.json", function (data) {
        $.each(data, function (i, attr) {
            $("#table_data").append("<tr><td>" + attr.name + "</td><td>" + attr.date + "</td><td>" + attr.assigned + "</td></tr>");

        });
    });
    $('form').on('submit', function (e) {
        e.preventDefault();
        var newname = $('form').find('input[id = "tname"]').val();
        var d = $('form').find('input[id = "date"]').val();
        var newassigned = $('form').find('input[id = "assigned"]').val();
        $("#table_data").prepend("<tr><td>" + newname + "</td><td>" + d + "</td><td>" + newassigned + "</td></tr>");

    });
});