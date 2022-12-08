$(document).ready(function () {
    $(".wallets__add-worker").click(function () {
      $(".modal, modal-add-worker").fadeIn();
    });
    $(".modal__cross").click(function () {
      $(".modal, modal-add-worker, modal-edit-worker").fadeOut();
    });
    document.getElementById("loginForm").addEventListener('submit', function () {
      $.ajax({
        method: "POST",
        url: URL + "/login",
        data: $(this).serialize(),
      });
      location.reload();
    });
  });
  