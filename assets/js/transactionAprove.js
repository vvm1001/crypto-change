$(document).ready(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

      $.ajax({
        url: URL + "/getTransactionData?id=" + urlParams.get('id'),
        method: "get",
        dataType: "json",
        success: function (data) {
            if (data.status === 'CREATED'){
                renderWithData(data)
            } else {
                location =  document.querySelector('.main').innerHTML = document.documentElement.lang === 'ru' ? './waitru.html' : './waiten.html';
            }
        },
      });
  });


function renderWithData (data) {
    const domRu = `
            <section class="transaction">
            <div class="container transaction__container wow animate__fadeInUp">
                <h1 class="transaction__title">
                    Обмен <br>
                    ${data.exchange} </h1>
                <div class="transaction__order">
                    Номер заявки <span>${data.id}</span>
                </div>
                                        <div class="transaction-1">
                        <div class="transaction__block">
                            <div class="transaction__block-title">
                                Оплатите на данный кошелек
                            </div>
                            <div class="transaction__block-wrapper">
                                <div class="transaction__block-text">
                                    Вы отправляете: <br>${data.fromCoinVal} ${data.fromCoin}       </div>
                                <div class="transaction__block-text">
                                    Вы получаете: ${data.toCoinVal} ${data.toCoin}              </div>
                            </div>
                            <div class="transaction__block-input-wrapper">
                                <div class="transaction__block-input-img">
                                    <img src="./assets/img/transaction/coin.svg" alt="coin">
                                </div>
                                <input class="transaction__block-input" type="text" value="${data.fromCoinVal} ${data.fromCoin}" data-value="${data.fromCoinVal}" readonly>
                                <div class="transaction__block-input-copy transaction__block-input-copy-val">
                                    Копировать
                                </div>
                            </div>
                            <div class="transaction__block-input-wrapper">
                                <div class="transaction__block-input-img">
                                    <img src="./assets/img/transaction/wallet.svg" alt="wallet">
                                </div>
                                <input class="transaction__block-input" type="text" value="${data.wallet.slice(0,5)}.." data-value="${data.wallet}" readonly>
                                <div class="transaction__block-input-copy transaction__block-input-copy-wallet">
                                    Копировать
                                </div>
                            </div>
                            <a class="transaction__block-btn" href="#">Подтвердить</a>
                        </div>
                        <div class="transaction__block">
                            <div class="transaction__block-title">
                                Оплатите, отсканировав QR-код!
                            </div>
                            <div class="transaction__block-qr">
                                <img src="https://chart.googleapis.com/chart?chs=177x177&amp;cht=qr&amp;chl=${data.wallet}&amp;choe=UTF-8" alt="QR code">
                            </div>
                        </div>
                    </div>
                                                                                                <div class="transaction__btns">
                    <a class="transaction__btn" href="./index.html">
                        <img src="./assets/img/transaction/home.svg" alt="home">
                        Вернуться
                    </a>
                                        </div>
            </div>
        </section>
    `
    const domEn = `<section class="transaction">
    <div class="container transaction__container wow animate__fadeInUp">
        <h1 class="transaction__title">
            Exchange <br>
            ${data.exchange}</h1>
        <div class="transaction__order">
            Order ID <span>${data.id}</span>
        </div>
                                <div class="transaction-1">
                <div class="transaction__block">
                    <div class="transaction__block-title">
                        Pay directly to the wallet
                    </div>
                    <div class="transaction__block-wrapper">
                        <div class="transaction__block-text">
                            You send: ${data.fromCoinVal} ${data.fromCoin}                                    </div>
                        <div class="transaction__block-text">
                            You receive: ${data.toCoinVal} ${data.toCoin}                                   </div>
                    </div>
                    <div class="transaction__block-input-wrapper">
                        <div class="transaction__block-input-img">
                            <img src="./assets/img/transaction/coin.svg" alt="coin">
                        </div>
                        <input class="transaction__block-input" type="text" value="${data.fromCoinVal} ${data.fromCoin}" data-value="${data.fromCoinVal}" readonly>
                    </div>
                    <div class="transaction__block-input-wrapper">
                        <div class="transaction__block-input-img">
                            <img src="./assets/img/transaction/wallet.svg" alt="wallet">
                        </div>
                        <input class="transaction__block-input" type="text" value="${data.wallet}" data-value="${data.wallet}" readonly>
                    </div>
                    <a class="transaction__block-btn" href="#">Confirm</a>
                </div>
                <div class="transaction__block">
                    <div class="transaction__block-title">
                        Pay by scanning the QR code!
                    </div>
                    <div class="transaction__block-qr">
                        <img src="https://chart.googleapis.com/chart?chs=177x177&amp;cht=qr&amp;chl=${data.wallet}&amp;choe=UTF-8" alt="QR code">
                    </div>
                </div>
            </div>
                                                                                        <div class="transaction__btns">
            <a class="transaction__btn" href="./eng.html">
                <img src="./assets/img/transaction/home.svg" alt="home">
                Get back
            </a>
                                </div>
    </div>
    </section>`
    document.querySelector('.main').innerHTML = document.documentElement.lang === 'ru' ? domRu : domEn;
    document.querySelector('.wrapper').addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target === document.querySelector('.transaction__block-btn'))
        {
            $.ajax({
                method: "POST",
                url: URL + "/setOrderStatus",
                data: {id: data.id},
                success: function (requestMessage) {
                    location =     document.querySelector('.main').innerHTML = 
                    document.documentElement.lang === 'ru' ? `./waitru.html?id=${urlParams.get('id')}` : `./waitru.html?id=${urlParams.get('id')}`;
                },
            });
        }
       
    }) ;
}
