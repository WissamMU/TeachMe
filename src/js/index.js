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


