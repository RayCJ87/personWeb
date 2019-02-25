jQuery(function ($) {
    "use strict";


    /*=======================================================
            // FullScreen Background Slider
    ======================================================*/

    $('.bg-slider').vegas({
        slides: [{
            src: 'assets/img/bg-slider/bg-slide1.jpg'
            }, {
                src: 'assets/img/bg-slider/bg-slide2.jpg'
            }, {
                src: 'assets/img/bg-slider/bg-slide3.jpeg'
        }]
    });

    setInterval(function () {
        var fullScreenBg = $(window).height();
        $(".bg-slider").css({
            height: fullScreenBg + 'px'
        });
    });


});