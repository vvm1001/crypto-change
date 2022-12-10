$(document).ready(function () {
  $("body").css({
    overflow: "auto",
  });
  $(".preloader").fadeOut(1000);

  wow = new WOW({
    animateClass: "animate__animated",
  });
  wow.init();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  $.ajax({
    url:  URL + "/getOrder?id=" + urlParams.get('id'),
    method: 'GET',
    dataType: "json",
    success: function (data) {
      setInterval(function () {
        // location.reload();
        console.log(data)
      }, 5000);
    }
  });

  $(".transaction__block-input-copy").click(function () {
    let val = $(this).parent().children("input").data("value");
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val(val).select();
    document.execCommand("copy");
    $tmp.remove();
  });
  
});



const htmlToRender = `
    <section class="transaction">
    <div class="container transaction__container wow animate__fadeInUp">
        <h1 class="transaction__title">
            Обмен <br>
            Ethereum (ETH) on Dogecoin (DOGE)                    </h1>
        <div class="transaction__order">
            Номер заявки <span>63910cb54805b</span>
        </div>
                                                                                            <div class="transaction-4">
                <div class="transaction__status transaction__status_blue">
                    ЖДЕМ ПОДТВЕРЖДЕНИЙ
                </div>
                <div class="transaction__status-text">
                    Ждем хотя бы одно подтверждение!
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