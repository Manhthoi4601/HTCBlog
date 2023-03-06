// scroll
var offset = 350;
    var duration = 350;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.scroll-to-top').fadeIn(400);
        } else {
            $('.scroll-to-top').fadeOut(400);
        }
    });
    $('.scroll-to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 350);
        return false;
    });