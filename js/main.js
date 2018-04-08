$(function() {
    //caches a jQuery object containing the header element
    var header = $(".container-fluid");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.addClass("non-transparent-navbar");
        } else {
            header.removeClass("non-transparent-navbar");
        }
    });
});
