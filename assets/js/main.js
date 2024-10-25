jQuery(function($) {
    'use strict';

    $(document).ready(function() {

        /*=======================================================
        	// SmoothScroll Initialization
        ======================================================*/
        smoothScroll.init({
            speed: 1000,
            easing: 'easeInOutCubic',
            offset: 0,
            updateURL: true,
            callbackBefore: function(toggle, anchor) {},
            callbackAfter: function(toggle, anchor) {}
        });

        /*=======================================================
            Features Carousel
        ======================================================*/
        var prev = "<i class=\"fa fa-angle-left fa-5x\"></i>";
        var next = "<i class=\"fa fa-angle-right fa-5x\"></i>";

        var owl = $("#features-carousel");
        owl.owlCarousel({
            singleItem: true,
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: false,
            navigationText:  [prev, next]
        });


        /*=======================================================
			// App Screen Slider Initialization
		======================================================*/
        var owl = $("#owl-app-screen");
        owl.owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds	 
            items: 5,
            itemsTablet: [768, 3],
            stopOnHover: true,
            pagination: false,
        });


        /*=======================================================
        	// Window Height
        ======================================================*/
        setInterval(function() {
            var widnowHeight = $(window).height();
            var introHeight = $("#promo-section").height();
            var paddingTop = widnowHeight - introHeight;
            $("#promo-section").css({
                'padding-top': Math.round(paddingTop / 2) + 'px',
                'padding-bottom': Math.round(paddingTop / 2) + 'px'
            });
        }, 10);

        /*=======================================================
        	// Counter Up Initialization
        ======================================================*/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
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
			News on press Slider
		======================================================*/

        var owl = $("#owl-press");
        owl.owlCarousel({
            items: 5, //10 items above 1000px browser width
            itemsDesktop: [1199, 4], //5 items between 1000px and 901px
            itemsDesktopSmall: [991, 3], // betweem 900px and 601px
            itemsTablet: [768, 3], //2 items between 600 and 0
            itemsMobile: [640, 1], // itemsMobile disabled - inherit from itemsTablet option
            stopOnHover: true,
            pagination: false
        });


        /*=======================================================
			Mailchimp
		======================================================*/
        $('#mc-form').ajaxChimp({
            url: 'http://doelit.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb'
                /* Replace Your AjaxChimp Subscription Link */
        });

        /*=======================================================
            Parallax Effects
        ======================================================*/
        $(document).ready(function(){
            //.parallax(xPosition, speedFactor, outerHeight) options:
            //xPosition - Horizontal position of the element
            //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
            //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
            $('#home').parallax("30%", 0.4);
            $('.counter-section').parallax("30%", 0.4);

        })



    });


    $(window).load(function() { // makes sure the whole site is loaded

        "use strict";

        /*
        =======================================================
            // Preloader
        ======================================================
        */
       
        $('.preloader').delay(400).fadeOut('slow'); 
        $('.preloader ').fadeOut(); 

        /*
        =======================================================
        	// Navbar Slide
        ======================================================
        */

        $(window).scroll(function() {
            if ($(window).scrollTop() > $("nav").height()) {
                $("nav.navbar-slide").addClass("show-menu");
            } else {
                $("nav.navbar-slide").removeClass("show-menu");
                $(".navbar-slide #appy-navbar-collapse").collapse({
                    toggle: false
                });
                $(".navbar-slide #appy-navbar-collapse").collapse("hide");
                $(".navbar-slide .navbar-toggle").addClass("collapsed");
            }
        });

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


    })


});
