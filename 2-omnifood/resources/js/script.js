// var waypoints = $('#handler-first').waypoint(function(direction) {
//   notify(this.element.id + ' hit 25% from top of window') 
// }, {
//   offset: '25%'
// })


$(document).ready(function () {

    /* For the stick navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px' /* to show 60 before hit the nav */
        });

    /* Scroll on buttons */
    $('.js--scroll-to-plans').on('click', function () {
        $('html body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').on('click', function () {
        $('html body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    /* Navigation scroll */
    $(function () {
        $("a[href*='#']:not([href='#'])").on('click', function () {
            console.log('clicking....');
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({ scrollTop: target.offset().top }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animate on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
            offset: '50%'
        });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
            offset: '50%'
        });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
            offset: '50%'
        });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
            offset: '50%'
        });

    /* Mobile navigation */
    $('.js--nav-icon').on('click', function () {
        var $nav = $('.js--main-nav');
        var $icon = $('.js--nav-icon i');

        $nav.slideToggle(200); //milliseconds

        //$icon.toggleclass('icon-close-round').toggleclass('ion-navicon-round');
        if ($icon.hasClass('ion-navicon-round')) {
            $icon.addClass('ion-close-round')
            $icon.removeClass('ion-navicon-round');
        } else {
            $icon.removeClass('ion-close-round')
            $icon.addClass('ion-navicon-round');
        }
    });

    /* Maps */
    var map = new GMaps({
        div: '.map',
        lat: 38.7436214,
        lng: -9.05,
        zoom: 12
    });

    map.addMarker({
        lat: 38.7436214,
        lng: -9.1952231,
        title: 'Lima',
        infoWindow: {
            content: '<p>Our Lisbon HQ</p>'
        }
    });
});