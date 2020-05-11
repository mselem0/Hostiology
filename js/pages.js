$(document).ready(function () {
    'use strict'

    //Trigger Option Box
    $('.option-box .gear').on('click', function () {
        $(this).parent().toggleClass('active');
        $(this).children('.fa-cog').toggleClass('fa-spin');
    });
    $('.option-box .color-option ul li').on('click', function () {
        let colorStyle = $('link[href*="color"]');
        console.log(colorStyle.attr('href'));
        if (colorStyle.attr('href').indexOf('../') > -1) {      //For Rtl
            $('link[href*="color"]').attr('href', '../css/' + $(this).data('theme') + '.min.css');
        } else {
            $('link[href*="color"]').attr('href', 'css/' + $(this).data('theme') + '.min.css');
        }
    });
    $('.font-option ul li').on('click', function () {
        $('body').css('font-family', $(this).data('font-family'));
    });
    $('.option-box .caurosel-option .d-caurosel').on('click', function () {
        $('#carousel-example-generic').toggle();
        $('.about').toggleClass('top-page');
    });

    //Trigger Scroll To Top
    let myScroll = $('.scroll-top');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1000) {
            myScroll.fadeIn()
        } else {
            myScroll.fadeOut();
            myScroll.children('img').hide();
        }
    });
    myScroll.on('click', function () {
        $('html').animate({
            scrollTop: 0
        }, 1300)
        $(this).children('img').show();
    });
});