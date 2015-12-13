$(document).ready( () => {

  // script-for-menu
  $("span.menu").on("click", function () {
    $(".top-menu ul").slideToggle("slow", () => {
    });
  });
});

function switchTab(num) {
  $('.top-menu > ul > li > a').removeClass('.active');
  $('.top-menu > ul > li:nth-child(' + num + ') > a').addClass('active');
}