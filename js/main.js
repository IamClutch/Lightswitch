

$(document).ready(function(){
  $("button").click(function() {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on").addClass("off");
      $('body').removeClass('light').addClass("dark");
      $('body h1').text('Hey, who turn off the lights?');

  } else {
      $(this).removeClass("off").addClass("on");
      $('body').removeClass('dark').addClass("light");
      $('body h1').text("It's so bright in here!")

    }
  });
});
