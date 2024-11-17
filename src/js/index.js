import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import '../sass/style.scss'
import '@fortawesome/fontawesome-free/js/all'


$(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
        $("#navbar").addClass("noTransparent");
    }
    else {
        $("#navbar").removeClass("noTransparent");
    }
});


$(document).ready(function() {
  $(".signup, .login").click(function() {
    // Remove the "slide-up" class from the currently active form
    $(".slide-up").removeClass("slide-up");

    // Add the "slide-up" class to the clicked form's sibling
    $(this).siblings().addClass("slide-up");
  });
});


