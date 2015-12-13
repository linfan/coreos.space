function fixBoxHeight() {
  var left = $(".about_left");
  var right = $(".about_right");
  var container = $(".about_container");

  var about_container_width = container.width();
  var about_right_width = right.width();
  var max_padding = 100;

  if (about_container_width - max_padding > about_right_width) {
    var left_height = left.height();
    var right_padding_top = parseInt(right.css("padding-top"));
    var right_padding_bottom = parseInt(right.css("padding-bottom"));
    var right_height = left_height - right_padding_top - right_padding_bottom;
    right.height(right_height);

    var container_padding_top = parseInt($(".about-section").css("padding-top"));
    var right_text = $(".about_right_text");
    var right_title = $(".about_right_title");
    var right_text_margin_top = parseInt(right_text.css("margin-top"));
    var right_text_margin_bottom = parseInt(right_text.css("margin-bottom"));
    var right_title_height = right_title.height();
    var right_text_height = right_height  + container_padding_top -
      (right_text_margin_top + right_text_margin_bottom + right_title_height + right_padding_top);
    right_text.height(right_text_height);
  }
}

$(document).ready( () => {

  $(window).on('load', () => {
    fixBoxHeight();
  });

  $(window).on('resize', () => {
    fixBoxHeight();
  });

  switchTab(1);
});
