$(function(){

    $('.slider__body').slick({
        slidesToShow: 3,
        centerMode: true,
        initialSlide: 1,
        adaptiveHeight: true,
        centerPadding: '0px',
        appendArrows: '.slider__buttons',
        nextArrow: '<button type="button" class="slick-next slider__buttons--next btn-min" data-btn-to="right"><svg xmlns="http://www.w3.org/2000/svg" width="31.133" height="15.972" viewBox="0 0 31.133 15.972"><g transform="translate(1 1.414)"><path d="M400,1725H370.867" transform="translate(-370.867 -1718.629)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/><path d="M398.514,1708.629l-6.572,6.572,6.572,6.572" transform="translate(-391.943 -1708.629)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg></button>',
        prevArrow: '<button type="button" class="slick-prev slider__buttons--prev btn-min" data-btn-to="left"><svg xmlns="http://www.w3.org/2000/svg" width="31.133" height="15.972" viewBox="0 0 31.133 15.972"><g transform="translate(1 1.414)"><path d="M400,1725H370.867" transform="translate(-370.867 -1718.629)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/><path d="M398.514,1708.629l-6.572,6.572,6.572,6.572" transform="translate(-391.943 -1708.629)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg></button>',
        responsive: [
            {
              breakpoint: 1141,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        
    })
    
        $('.img-lock').on('dragstart', function(e) { e.preventDefault(); }).contextmenu(function() {
            return false;
          });

    
        let valueHeight = 3, heightBg;
        function customMediaEvents() { 
            if($(window).width() >= 950) {
                heightBg = ($('.header__bg--elem').width() / valueHeight) + $('.header__info').height();
                $('.header__bg').css('width',  heightBg + $('.header__info').height() + 'px');
                $('.menu__nav--burger, .menu__nav--list').removeClass('active');
                $('body').removeClass('lock')
                $('.header').css('min-height', heightBg - 300 + 'px');
            }
            else if ($(window).width() < 950) {
                heightBg = $('.header').height() + $('.header__info').height();
                $('.header__bg').css('width',  heightBg + $('.header__info').height() + 'px');
                $('.header').css('height', $('.header__bg--elem').height() + 'px');
            }
            if($(window).width() >= 500) {
                $('.footer__links--title').removeClass('active').next('.footer__links--list').slideUp(0)
                $('.footer__links--title').parent('.footer__links--item').removeClass('active');
            }
        }
        
        $(window).resize(function() {
            customMediaEvents();
        });
        customMediaEvents();

        function hHeader(settings) {
    
            let header = settings.elemName,
                distance = settings.distance,
                scrollPrev = 0, ifHeaderTopClass, ifHeaderTopDistance,
                scrollDown = distance,          
                distanceHide = settings.distanceHide,
                distanceShow = settings.distanceShow,
                scrolled = $(window).scrollTop(),
                scrollDownCheck = false,
                scrollTop = 0,
                scrollTopCheck = false,
                scrollToTop = false,
                scrollToDown = false;
                
            scrollDown = distanceHide;
            ifHeaderTopClass = settings.ifHeaderTop[0];
            ifHeaderTopDistance = settings.ifHeaderTop[1];
            
            function ifHeaderTop() {
                if(scrolled <= ifHeaderTopDistance && typeof ifHeaderTopClass == 'string') {
                    $(header).addClass(ifHeaderTopClass);
                    $(header).addClass($('[data-hh-anchor]').data('hh-anchor'));
                        $.each($('[data-hh-anchor]'), function() {
                            $(this).addClass($('[data-hh-anchor]').data('hh-anchor'));
                        })
                }
                else if (scrolled > ifHeaderTopDistance && typeof ifHeaderTopClass == 'string') {
                    $(header).removeClass(ifHeaderTopClass);
                    $.each($('[data-hh-anchor]'), function() {
                        $(this).removeClass($('[data-hh-anchor]').data('hh-anchor'));
                    })
                }
            }
            ifHeaderTop();
    
            $(window).scroll(function () {
                scrolled = $(window).scrollTop();          
                if (scrolled == 0) {
                    $(header).removeClass(settings.classToHide);
                    scrollTopCheck = true;
                }

                ifHeaderTop();
        
                if (scrolled > 100 && scrolled > scrollPrev) {
                    if (scrollToDown == false) {
                        scrollToTop = false;
                        scrollDown = scrolled + distanceHide;
                        scrollDownCheck = false;
                        scrollToDown = true;
                    }
                    
                } else if (scrollToTop == false) {
                        scrollToDown = false;
                        scrollTop = scrolled - distanceShow;
                        scrollTopCheck = false;
                        scrollToTop = true;
                    }
                    
                scrollPrev = scrolled;
                if (scrolled >= scrollDown && scrollDownCheck == false) {
                    // hide elem
                    
                    $(header).addClass(settings.classToHide);
                    scrollDownCheck = true;
                }
                if (scrollTop >= scrolled && scrollTopCheck == false) {
                    // show elem
                    $(header).removeClass(settings.classToHide);
                    scrollTopCheck = true;
                }
            });
        }

        hHeader({
            elemName: $('.menu'),
            classToHide: 'hide',
            distanceHide: 300,
            distanceShow: 150,
            ifHeaderTop: ['top', 0]
        });

        $('.menu__nav--burger').on('click', function() {
            $('.menu__nav--burger, .menu__nav--list').toggleClass('active');
            $('body').toggleClass('lock')
        });


        // ======================== slideMenuFooter ======================== 

            $('.footer__links--title').on('click', function() {
                if(!$(this).hasClass('active') && $(window).width() <= 500) {
                    $('.footer__links--title').parent('.footer__links--item').removeClass('active');
                    $('.footer__links--title').removeClass('active').next('.footer__links--list').slideUp()
                    $(this).parent('.footer__links--item').addClass('active');
                    $(this).addClass('active').next('.footer__links--list').addClass('active').slideDown()
                }
                else if($(this).hasClass('active') && $(window).width() <= 500) {
                    $('.footer__links--title').removeClass('active').next('.footer__links--list').slideUp()
                    
                }
            });

        // ======================== /slideMenuFooter ========================



        // ======================== inputFocusPlaceholder ========================

            $('[data-placeholder]').focus(function() {
                $(this).attr('placeholder', '');
            }).blur(function() {
                $(this).attr('placeholder', $(this).data('placeholder'));
            })
            

        // ======================== /inputFocusPlaceholder ========================



        // ======================== scrollToSection ========================
        let scrollName, scrollElem, scrollTop, start_scroll = false, durationAnim;
        $('.btn-scroll').on('click', function (e) {
            e.preventDefault();
            if (start_scroll == false) {
                start_scroll = true;
    
                scrollName = $(this).attr('href'),
                scrollElem = $(scrollName),
                scrollTop = scrollElem.offset().top;
                
                if(scrollElem.hasClass('footer')) {
                    scrollTop = scrollElem.offset().top - $(window).height() + $('.footer__bg').height() - 120;
                    console.log(scrollTop);
                }
    
                if ($('.menu').offset().top > scrollTop + 300) {
                    scrollTop = scrollTop - 50;
                }
    
                $('.menu__nav--burger, .menu__nav--list').removeClass('active');
                $('body').removeClass('lock');
    
                durationAnim = scrollTop;

                if(durationAnim >= 1500) {
                    $('html, body').animate({
                        scrollTop: scrollTop
                    }, 1500);
                }
                else {
                    $('html, body').animate({
                        scrollTop: scrollTop
                    }, durationAnim);
                }

                
    
                setTimeout(function () {
                    start_scroll = false;
                }, 1500);
            }
        });

        // ======================== /scrollToSection ========================




        AOS.init({
            once: true
        });

});