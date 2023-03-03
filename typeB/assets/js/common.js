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
        lists.addClass('hide')
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).index() == 0) {
            console.log('1');
            $(lists.eq(0)).removeClass('hide').siblings().addClass('hide');
        } else if ($(this).index() == 1) {
            console.log('2');
            $(lists.eq(1)).removeClass('hide').siblings().addClass('hide');
        } else if ($(this).index() == 2) {
            console.log('3');
            $(lists.eq(2)).removeClass('hide').siblings().addClass('hide');
        } else if ($(this).index() == 3) {
            console.log('4');
            $(lists.eq(3)).removeClass('hide').siblings().addClass('hide');
        } else if ($(this).index() == 4) {
            console.log('5')
            $(lists.eq(4)).removeClass('hide').siblings().addClass('hide');
        } else if ($(this).index() == 5) {
            console.log('6')
            $(lists.eq(5)).removeClass('hide').siblings().addClass('hide');
        }
    });

});