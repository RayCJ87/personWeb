jQuery(function($) {
    'use strict';

    $(window).load(function() { // makes sure the whole site is loaded

        "use strict";

        /*
        =======================================================
            // Preloader
        ======================================================
        */
        $('.preloader').delay(4000).fadeOut('slow');



        /*
        =======================================================
            // Onep Page Nav
        ======================================================
        */

        /* Page Scroll to id fn call */
        $("#nav-main ul li a").mPageScroll2id({
            highlightClass: "current-menu-item"
        });

        /*
        =======================================================
            // Navbar Slide
        ======================================================
        */

        /*
        $(window).scroll(function() {
            if ($(window).scrollTop() > $("nav").height()) {
                $("nav.navbar-slide").addClass("show-menu navbar-fixed-top");
            } else {
                $("nav.navbar-slide").removeClass("show-menu navbar-fixed-top");
                $(".navbar-slide #appy-navbar-collapse").collapse({
                    toggle: false
                });
            }
        });
        */


        /*
        =======================================================
            //Wow js initialization
        ======================================================
        */

        var wow = new WOW({
            offset: 100, // distance to the element when triggering the animation (default is 0)
            mobile: false // trigger animations on mobile devices (default is true)
        });
        wow.init();


    });


    $(document).ready(function() {

        /*=======================================================
            // okayNav Initialization
        ======================================================*/
        var navigation = $('#nav-main').okayNav();


        /*=======================================================
            // SmoothScroll Initialization
        ======================================================*/
        // smoothScroll.init({
        //     speed: 1000,
        //     easing: 'easeInOutCubic',
        //     offset: 0,
        //     updateURL: true,
        //     callbackBefore: function(toggle, anchor) {},
        //     callbackAfter: function(toggle, anchor) {}
        // });


        /*=======================================================
            // Vertical Center Welcome
        ======================================================*/
        setInterval(function() {
            var widnowHeight = $(window).height();
            var introHeight = $(".welcome-heading").height();
            var paddingTop = widnowHeight - introHeight;
            $(".welcome-heading").css({
                'padding-top': Math.round(paddingTop / 2) + 'px',
                'padding-bottom': Math.round(paddingTop / 2) + 'px'
            });
        }, 10);


        /*=======================================================
            // Counter Up Initialization
        ======================================================*/
        $('.counting').counterUp({
            delay: 5,
            time: 1000
        });


        /*=======================================================
            Featured Slider
        ======================================================*/
        var owl = $("#featured-carousel");
        owl.owlCarousel({
            items: 4, //3 items above 1199px browser width
            itemsDesktop: [1280, 3], //3 items between 1280px and 991px
            itemsTablet: [991, 2], //2 items between 991 and 600
            itemsMobile: [600, 1], // itemsMobile disabled - inherit from itemsTablet option
            stopOnHover: true,
            autoPlay: 5000,
            pagination: false
        });


        /*=======================================================
            Portfolio Filtering
        ======================================================*/
        /* initialize shuffle plugin */
        var $grid = $('#pfolio-content');

        $grid.shuffle({
            itemSelector: '.item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function(e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName);
        });


        /*=======================================================
            Testimonial Slider
        ======================================================*/
        var owl = $("#owl-tm");
        owl.owlCarousel({
            singleItem: true,
            autoPlay: 5000,
            stopOnHover: true
        });


        /*=======================================================
            Parallax Effects
        ======================================================*/

        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
        $('.parallax').parallax("30%", 0.4);
        $('#testimonial').parallax("30%", 0.4);


        /*=======================================================
            Magnific Pop Up
        ======================================================*/
        // $('.popup-youtube').magnificPopup({
        //     disableOn: 700,
        //     type: 'iframe',
        //     mainClass: 'my-mfp-zoom-in',
        //     removalDelay: 160,
        //     preloader: false,
        //     fixedContentPos: false
        // });

        // Image gallery popup (type image)
        // $('.pfolio-content').magnificPopup({
        //     delegate: '.popup-trigger',
        //     type: 'image',
        //     tLoading: 'Loading image #%curr%...',
        //     mainClass: 'mfp-fadein',
        //     gallery: {
        //         enabled: true, // enable or disable gallery (false/true)
        //         preload: [0, 1], // read about this option in next Lazy-loading section
        //         navigateByImgClick: true,
        //         arrowMarkup: '<button title="%title%" type="button" class="mfp-custom-arrow mfp-custom-arrow-%dir%"></button>', // markup of an arrow button
        //         tPrev: 'Previous (Left arrow key)', // title for left button
        //         tNext: 'Next (Right arrow key)', // title for right button
        //         tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        //     },
        //     image: {
        //         titleSrc: 'data-title', // Attribute of the target element that contains caption for the slide.
        //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.' // Error message
        //     }
        // });

        // Portfolio Item Inline popup (type inline)
        $('.inline-popup-trigger').magnificPopup({
            type: 'inline',
            modal: false,
            alignTop: true,
            fixedContentPos: true,
            fixedBgPos: false,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'mfp-fade-zoom',
            gallery: {
                enabled: true, // enable or disable gallery (false/true)
                arrowMarkup: '<button title="%title%" type="button" class="mfp-custom-arrow mfp-custom-arrow-%dir%"></button>', // markup of an arrow button
                tPrev: 'Previous (Left arrow key)', // title for left button
                tNext: 'Next (Right arrow key)' // title for right button
            }
        });

        $(document).on('click', '.inline-popup-close', function(e) {
            e.preventDefault();
            $.magnificPopup.close();
        });

        // Featured Item Inline popup (type inline)
        $('.featured-project-trigger').magnificPopup({
            type: 'inline',
            modal: false,
            alignTop: true,
            fixedContentPos: true,
            fixedBgPos: false,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'mfp-fade-zoom',
            gallery: {
                enabled: true, // enable or disable gallery (false/true)
                arrowMarkup: '<button title="%title%" type="button" class="mfp-custom-arrow mfp-custom-arrow-%dir%"></button>', // markup of an arrow button
                tPrev: 'Previous (Left arrow key)', // title for left button
                tNext: 'Next (Right arrow key)' // title for right button
            }
        });

        $(document).on('click', '.inline-popup-close', function(e) {
            e.preventDefault();
            $.magnificPopup.close();
        });


        if (navigator.userAgent.match(/Trident\/7\./)) {
            $('body').on("mousewheel", function() {
                event.preventDefault();
                var wd = event.wheelDelta;
                var csp = window.pageYOffset;
                window.scrollTo(0, csp - wd);
            });
        }


        /*=======================================================
            Mailchimp
        ======================================================*/
        $('#mc-form').ajaxChimp({
            url: 'http://codextree.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb'
                /* Replace Your AjaxChimp Subscription Link */
        });


    });


    (function() {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 80) {
                $(".okayNav li a").css({
                    'padding-top': '20px'
                });
                $(".navbar-brand").css({
                    'padding-top': '25px'
                });
                $(".navbar-default").css({
                    'background-color': 'rgba(51, 59, 70, 1)'
                });
                $(".navbar-default").css({
                    'margin-top': '0px'
                });
                $(".okayNav__menu-toggle").css({
                    'top': '28px',
                    'transition': 'all 1s linear 0s'
                });

            } else {
                $(".okayNav li a, .navbar-brand").css({
                    'padding-top': '50px'
                });
                $(".navbar-default").css({
                    'background-color': 'transparent',
                    'border': '0px solid #ddd'
                });
                $(".okayNav__menu-toggle").css({
                    'top': '58px',
                    'transition': 'all 1s linear 0s'
                });
            }
        });
    }());



});
