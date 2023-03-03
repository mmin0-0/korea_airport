$(document).ready(function() {

    /* gnb 메뉴 클릭 시 */
    $(document).on('click', '.ham-btn-wrap', function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).closest('.header-inner').find('.nav-wrap').addClass('active');
            $(this).children('span').html('CLOSE');
            $(this).siblings('.language').addClass('active');
        } else {
            $(this).closest('.header-inner').find('.nav-wrap').removeClass('active');
            $(this).children('span').html('MENU');
            $(this).siblings('.language').removeClass('active');
        }
    });

    $(document).on('click', '.nav-left .depth01-list .depth01' , function() {
        const lists = $('.nav-right .depth02-list')
        lists.hide()
        if ($(this).index() == 0) {
            console.log('1');
            $(lists.index()).show()
        } else if ($(this).index() == 1) {
            console.log('2');
            $(lists.index(2)).show()
        } else if ($(this).index() == 2) {
            console.log('3');
            $(lists.index(3)).show()
        } else if ($(this).index() == 3) {
            console.log('4');
            $(lists.index(4)).show()
        } else if ($(this).index() == 4) {
            console.log('5')
            $(lists.index(5)).show()
        } else if ($(this).index() == 5) {
            console.log('6')
            $(lists.index(6)).show()
        }
    });

});