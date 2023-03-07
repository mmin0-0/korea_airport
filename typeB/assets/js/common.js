$(document).ready(function() {

    /* gnb 햄버거 버튼 클릭 시 색상 변경*/
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

    /* gnb 햄버거 버튼 클릭 시 메뉴 숨김-보임 */
    $(document).on('click', '.nav-left .depth01-list .depth01' , function() {
        const lists = $('.nav-right .depth02-list')
        lists.addClass('hide')
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).index() == 0) {
            $(lists.eq(0)).removeClass('hide').siblings().addClass('hide');
        } else if ($(this).index() == 1) {
            $(lists.eq(1)).removeClass('hide').siblings().addClass('hide');
        } else if ($(this).index() == 2) {
            $(lists.eq(2)).removeClass('hide').siblings().addClass('hide');
        } else if ($(this).index() == 3) {
            $(lists.eq(3)).removeClass('hide').siblings().addClass('hide');
        } else if ($(this).index() == 4) {
            $(lists.eq(4)).removeClass('hide').siblings().addClass('hide');
        } else if ($(this).index() == 5) {
            $(lists.eq(5)).removeClass('hide').siblings().addClass('hide');
        }
    });

    /* hero-wrap scroll trigger */
    gsap.registerPlugin(ScrollTrigger);

    function heroWrap() {
        const hero = $('#hero');
        
        gsap.to(hero, {
            scrollTrigger: {
                trigger: "#hero",
                start: "top 24.8%", 
                end: "bottom 80%",
                pin: ".content",
                markers: true
            }
        });
    }
    heroWrap();

});