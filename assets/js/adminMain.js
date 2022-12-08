$(document).ready(function () {
    document.cookie = "token=testToken; max-age=3600";
    if (getCookie('token')) {
        $.ajax({
            url: URL + "/isTokenValid?token=" + 'testToken',
            method: "get",
            dataType: "json",
            success: function (data) {
                if (!data) {
                    location = '/admin.html'
                } else {
                    $.ajax({
                        method: "GET",
                        url: URL + "/getParams?token=" + 'testToken',
                        data: $(this).serialize(),
                        success: function (currentParams) {
                            console.log(currentParams)
                            document.querySelector('#paramsForm').innerHTML = `
                            <p class="wallets__text">Пароль</p>
                            <input type="text" class="form-control hero__input" name="password" placeholder="Пароль" value="${currentParams.password}" required>
                            <p class="wallets__text">Саппорт</p>
                            <input type="text" class="form-control hero__input" name="tg_support" placeholder="Саппорт" value="${currentParams.tg_support}" required>
                            <p class="wallets__text">Токен</p>
                            <input type="text" class="form-control hero__input" name="bot_token" placeholder="Токен" value="${currentParams.bot_token}" required>
                            <p class="wallets__text">Айди чата</p>
                            <input type="text" class="form-control hero__input" name="chat_id" placeholder="Айди чата" value="${currentParams.chat_id}" required>
                            <button type="submit" class="btn btn-dark hero__btn">
                                Сохранить
                            </button>
                            `;
                            document.querySelector('#paramsForm').addEventListener('submit', function (e) {
                                e.preventDefault();
                                $.ajax({
                                    method: "POST",
                                    url: URL + "/changeParams",
                                    data: $(this).serialize(),
                                    success: function (requestMessage) {
                                        console.log(requestMessage)
                                        alert(requestMessage);
                                    },
                                });
                            }) ;
                        },
                    });
                   
                }
            },
        });
    }
    if (!getCookie('token')) {
        location = '/admin.html'
    }
});
       
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}