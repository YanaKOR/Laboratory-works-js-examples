$(window).on("load", function () {
  window.setTimeout(function () {
    $(".preloader").fadeOut().end().delay(100).fadeOut("slow");
  }, //1000
  );
});
