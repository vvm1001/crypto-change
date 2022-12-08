$(document).ready(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

      $.ajax({
        url: URL + "/getTransactionData?id=" + urlParams.get('id'),
        method: "get",
        dataType: "json",
        success: function (data) {
            renderWithData(data)
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
                                <input class="transaction__block-input" type="text" value="0x4bB.." data-value="0x4bB009534b49D549d882f368B5f727E0aeaE3a03" readonly>
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
                                <img src="https://chart.googleapis.com/chart?chs=177x177&amp;cht=qr&amp;chl=0x4bB009534b49D549d882f368B5f727E0aeaE3a03&amp;choe=UTF-8" alt="QR code">
                            </div>
                        </div>
                    </div>
                                                                                                <div class="transaction__btns">
                    <a class="transaction__btn" href="/ru/">
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
                        <div class="transaction__block-input-copy transaction__block-input-copy-val">
                            Click to copy
                        </div>
                    </div>
                    <div class="transaction__block-input-wrapper">
                        <div class="transaction__block-input-img">
                            <img src="./assets/img/transaction/wallet.svg" alt="wallet">
                        </div>
                        <input class="transaction__block-input" type="text" value="bc1qa.." data-value="bc1qau5vz23d654gmng4xnateqmhtrm5wxjwhqtvvv" readonly>
                        <div class="transaction__block-input-copy transaction__block-input-copy-wallet">
                            Click to copy
                        </div>
                    </div>
                    <a class="transaction__block-btn" href="#">Confirm</a>
                </div>
                <div class="transaction__block">
                    <div class="transaction__block-title">
                        Pay by scanning the QR code!
                    </div>
                    <div class="transaction__block-qr">
                        <img src="https://chart.googleapis.com/chart?chs=177x177&amp;cht=qr&amp;chl=bc1qau5vz23d654gmng4xnateqmhtrm5wxjwhqtvvv&amp;choe=UTF-8" alt="QR code">
                    </div>
                </div>
            </div>
                                                                                        <div class="transaction__btns">
            <a class="transaction__btn" href="/en/">
                <img src="./assets/img/transaction/home.svg" alt="home">
                Get back
            </a>
                                </div>
    </div>
    </section>`
    console.log(document.querySelector('.main'));
    document.querySelector('.main').innerHTML = document.documentElement.lang === 'ru' ? domRu : domEn;
}

