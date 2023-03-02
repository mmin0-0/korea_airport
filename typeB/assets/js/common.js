$(document).ready(function() {

    $('.ham-btn-wrap').on('click', function() {
        console.log('123');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).parents('nav').addClass('active');
        } else {
            $(this).parents('nav').removeClass('active');
        }
    });
});