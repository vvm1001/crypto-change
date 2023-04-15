$(document).ready(function () {
    $.ajax({
        url: URL + "/getTelegramSupport",
        method: "get",
        dataType: "json",
        success: function (data) {
            console.log(data)
            document.querySelectorAll('.support-link').forEach(link => link.href = 'https://t.me/' + data); 
        },
    });
});
