$(document).ready(function () {

    if (($('html').scrollTop() >= 40)) {
        $('#header').addClass('fixed');
    } else {
        $('#header').removeClass('fixed');
    }

    $(window).on('scroll', function () {
        if (($('html').scrollTop() >= 40)) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    $('nav a').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

});
