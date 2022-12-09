$(document).ready(function () {
  $("body").css({
    overflow: "auto",
  });
  $(".preloader").fadeOut(1000);

  wow = new WOW({
    animateClass: "animate__animated",
  });
  wow.init();

  if ($('.transaction-4').length > 0){
    setInterval(function () {
      location.reload();
    }, 5000);
  }

  $(".transaction__block-input-copy").click(function () {
    let val = $(this).parent().children("input").data("value");
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val(val).select();
    document.execCommand("copy");
    $tmp.remove();
  });
  
});
