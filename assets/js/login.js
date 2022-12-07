$(document).ready(function () {
    $(".wallets__add-worker").click(function () {
      $(".modal, modal-add-worker").fadeIn();
    });
    $(".modal__cross").click(function () {
      $(".modal, modal-add-worker, modal-edit-worker").fadeOut();
    });
    $(".modal-add-worker__form").submit(function () {
      $.ajax({
        method: "POST",
        url: "php/addWorker.php",
        data: $(this).serialize(),
      });
      location.reload();
    });
    $(".workers__btn-trash").click(function () {
      $.ajax({
        method: "POST",
        url: "php/removeWorker.php",
        data: { id: $(this).data("id") },
      });
      location.reload();
    });
  });
  