$(document).ready(function () {
    $(".wallets__add-worker").click(function () {
      $(".modal, modal-add-worker").fadeIn();
    });
    $(".modal__cross").click(function () {
      $(".modal, modal-add-worker, modal-edit-worker").fadeOut();
    });
    document.getElementById("loginForm").addEventListener('submit', function (e) {
      e.preventDefault();
      $.ajax({
        method: "POST",
        url: URL + "/login",
        data: $(this).serialize(),
        success: function (token) {
          console.log('after token get')
          console.log(token)
          document.cookie = `token=${token};`;
          location = './adminMain.html'
      },
      });
      location.reload();
    });
  });
  