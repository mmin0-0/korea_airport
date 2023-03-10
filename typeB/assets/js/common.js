$(document).ready(function() {

    /* gnb 햄버거 버튼 클릭 시 색상 변경*/
    $(document).on('click', '.ham-btn-wrap', function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('body').addClass('fixed');
            $('#hero').addClass('fixed');
            $(this).closest('.header-inner').find('.nav-wrap').addClass('active');
            $(this).children('span').html('CLOSE');
            $(this).siblings('.language').addClass('active');
        } else {
            $('body').removeClass('fixed')
            $('#hero').removeClass('fixed');
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

    $('.contact .hire').hover(function() {
      $(this).children('.txt-hide').show
    });


    /* hero-wrap scroll trigger */
    gsap.registerPlugin(ScrollTrigger);

    // function slide01() {

    //   const scroll01 = $('.slide.slide01')

    //   var tl01 = gsap.timeline({

    //     scrollTrigger: {
    //       trigger: ".slide.slide01",
    //       scrumb: 1,
    //       start: "top 45%",
    //       end: "bottom bottom",
    //       markers: true,
    //     }

    //   });
      
    //   tl01.to()

    // }
    // horizonScroll();

    const pageContainer = document.querySelector(".container");
    
    /* SMOOTH SCROLL */
    // const scroller = new LocomotiveScroll({
    //   el: pageContainer,
    //   smooth: true
    // });
    
    // scroller.on("scroll", ScrollTrigger.update);
    
    // ScrollTrigger.scrollerProxy(pageContainer, {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? scroller.scrollTo(value, 0, 0)
    //       : scroller.scroll.instance.scroll.y;
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       left: 0,
    //       top: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight
    //     };
    //   },
    //   pinType: pageContainer.style.transform ? "transform" : "fixed"
    // });
    
    ////////////////////////////////////
    ////////////////////////////////////
    window.addEventListener("load", function () {
      let pinBoxes = document.querySelectorAll(".pin-wrap > *");
      let pinWrap = document.querySelector(".pin-wrap");
      let pinWrapWidth = pinWrap.offsetWidth;
      let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    
      // Pinning and horizontal scrolling
    
      // gsap.to(".pin-wrap", {
      //   scrollTrigger: {
      //     scroller: pageContainer, //locomotive-scroll
      //     scrub: 0.3,
      //     trigger: "#sectionPin",
      //     pin: true,
      //     // anticipatePin: 1,
      //     start: "top top",
      //     end: pinWrapWidth
      //   },
      //   x: -horizontalScrollLength,
      //   ease: "none"
      // });

      gsap.to(".pin-wrap", {
        scrollTrigger: {
          trigger: "#sectionPin",
          start: "top top",
          pin: true,
          // end: pinWrapWidth,
          end: "+=500%",
          scrub: 0.3,
        },
        x: -horizontalScrollLength,
        ease: "none"
      });

      // var t1 = gsap.timeline({
      //     scrollTrigger: {
      //     trigger: "#footer",
      //     // pin: true,
      //     // scrub: 0.5,
      //     start: "top top",
      //     end: "bottom",
      //     markers: true,
      //   }
      // })
      // .fromTo('#footer',{width: '90%', duration: 1},{width: '100%', duration: 1});

      // let t2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '#footer',
      //     start: "top top",
      //     end: "top -100%",
      //     scrub: true
      //   },
      //   // onReverseComplete: () => removeProps()
      // })

      // .fromTo('.footer-inner',{width: "90%", duration: 1},{width: "100%", duration: 1});

      ScrollTrigger.create({
        trigger: "#footer",
        start: "top 80%",
        end: "bottom",
        toggleClass: {targets: '#footer', className: 'on'}
      });
    
      // ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
    
      ScrollTrigger.refresh();
    });

    
});