$(document).ready(function () {
  $("a").click(function () {
    const elemActive = $(this);
    const otherElem = $("a");
    otherElem.removeClass("active");
    elemActive.addClass("active");

    const text = $(".text-center");
    const textLink = elemActive.text();
    text.text(textLink.toUpperCase());
  });
});
