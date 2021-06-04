$(document).ready(function(){

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if (scroll > 150) {
            $(".navbar").css({
                'background': '#E8676B',
                'z-index': '10',
                'box-shadow': '0 10px 30px rgba(0, 0, 0, 0.19)',
                'transition': 'all 0.7s'
            });
            $(".nav-link").css({
                'color':'#fff'
            });
        }

        else{
            $(".navbar").css({
                'background': 'none',
                'box-shadow': 'none'
            });
            $(".nav-link").css({
                'color':'white'
            });
        }
    });



    // =======testimonial slide==========

    $('.slider').slick({
        dots: true,
        infinite:true,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });



    // ============my client slide==========


    $('.client-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000
    });


    // ============reference slide==========

    $('.reference-slider').slick({
        infinite:true,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });


    $('.instagram-slider').slick({
        dots: true,
        infinite:true,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //==========interest===============

    $('[data-toggle="tooltip"]').tooltip();


    //==============tab section========

    $(".nav-tabs .nav-link").click(function(){
        $(this).tab('show');
    });
  });