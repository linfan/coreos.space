$(document).ready( () => {

// script-for-menu
  $("span.menu").on("click", function () {
    $(".top-menu ul").slideToggle("slow", () => {
    });
  });
});