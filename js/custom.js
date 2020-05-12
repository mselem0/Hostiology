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
    //Trigger Caurosel
    $('.carousel').carousel({
        interval: 6000
    })

    //Statistics Counter
    let found = false;
    $(window).on('scroll', function test() {
        if ($(this).scrollTop() > (($('.stats').offset().top) - 400) && found === false) {
            let counter = $('.stats .statics .number');
            counter.each(function () {
            let statsNumber = parseInt($(this).data('count')),
                current = $(this),
                i = 0,
                statCounter = setInterval(function () {
                    if (i >= statsNumber) {
                        clearInterval(statCounter);
                    } else {
                        i++;
                        current.text(i);
                    }     
                }, 2);
            });
            found = true;
        }
    })

    //Skills Progress-bar
    let progFound = false;
    $(window).on('scroll', function test() {
        if ($(this).scrollTop() > (($('.skills').offset().top) - 400) && progFound === false) {
            let progress = $('.skills .progress .progress-bar');
            progress.each(function () {
                let progVal = parseInt($(this).data('progress')),
                    current = $(this);
                current.css({
                    width: progVal + '%'
                })    
            });
            progFound = true;
        };
    })

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

//Animation For Info Messages
let ourMessage = $('.message');
ourMessage.fadeIn(1, function () {
    $(this).addClass('opened');
});
ourMessage.on('click', function () {
    $(this).removeClass('opened');
});
let messageFade = setTimeout(function () {
    ourMessage.removeClass('opened');
}, 6000);
//Trigger Preloader
$(window).on('load', function () {
    $('.preloader').fadeOut(1000, function () {
        $(this).remove();
        $('body').addClass('loaded');
    });
});