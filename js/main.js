$(function(){

    //$('.width-screen').html($(window).width())

    let valueHeight = 2.5,
        heightBg = $('.header__bg--elem').width() / valueHeight,
        heightForHeader = (heightBg - $(window).height()) + $(window).height();
        if($(window).width() >= 950) {
            $('.header, .header__bg').css('min-height', heightForHeader + 'px');
        }
        $('img').on('dragstart', function(event) { event.preventDefault(); });

    let image_srcNotWebp,
        image_src_bg = '.webp-bg';

    function ThisIsWebP() {
        let def = $.Deferred(), crimg = new Image();
        crimg.onload = function () { def.resolve(); };
        crimg.onerror = function () { def.reject(); };
        crimg.src = "https://simpl.info/webp/cherry.webp";
        return def.promise();
    }

    ThisIsWebP().then(function () {
        $.each($(image_src_bg), function () {
            return false;
        });
    }, function () {
            $.each($(image_src_bg), function () {
                image_srcNotWebp = $(this).data('notwebp');
                $(this).css('background-image', 'url("' + image_srcNotWebp + '")');
            });
        });

        function customMediaEvents() {
            if($(window).width() >= 950) {
                $('.menu__nav--burger, .menu__nav--list').removeClass('active');
                $('body').removeClass('lock')
            }
        }

        $(window).resize(function() {
            customMediaEvents();

            heightBg = $('.header__bg--elem').width() / valueHeight,
            heightForHeader = (heightBg - $(window).height()) + $(window).height();
            if($(window).width() >= 950) {
                $('.header, .header__bg').css('min-height', heightForHeader + 'px');
            }
            
            
        });

        function hHeader(settings) {
        
            if (settings == undefined) {
                return false;
            }
        
            if (settings.elemName == undefined) {
                return false;
            }
        
            if (settings.distance == undefined) {
                settings.distance = 500;
            }
        
            if (settings.fade == undefined) {
                settings.fade = false;
            }
        
            if (settings.speedAnim == undefined) {
                settings.speedAnim = 200;
            }
    
        
        
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
                scrollToDown = false,
                classAnchor = settings.classAnchor, classAnchorForTop = settings.classAnchorForTop;
                
    
                
            
            if(typeof distanceHide == 'number') {
                scrollDown = distanceHide;
            }        
    
            if(settings.ifHeaderTop != undefined) {
                ifHeaderTopClass = settings.ifHeaderTop[0];
                ifHeaderTopDistance = settings.ifHeaderTop[1];
            }
            
    
            function ifHeaderTop() {
                if(scrolled <= ifHeaderTopDistance && typeof ifHeaderTopClass == 'string') {
                    $(header).addClass(ifHeaderTopClass);
                    if(classAnchorForTop == true) {
                        $(header).addClass($('[data-hh-anchor]').data('hh-anchor'));
                        $.each($('[data-hh-anchor]'), function() {                            
                            $(this).addClass($('[data-hh-anchor]').data('hh-anchor'));
                        })
                    }
                }
                else if (scrolled > ifHeaderTopDistance && typeof ifHeaderTopClass == 'string') {
                    $(header).removeClass(ifHeaderTopClass);
                    if(classAnchorForTop == true) {
                        $.each($('[data-hh-anchor]'), function() {                            
                            $(this).removeClass($('[data-hh-anchor]').data('hh-anchor'));
                        })
                    }
                }
            }
            if(typeof ifHeaderTopClass == 'string') {
                ifHeaderTop();
            }
    
            $(window).scroll(function () {
                scrolled = $(window).scrollTop();          
                if (scrolled == 0) {
                    if (settings.classToHide == undefined) {
                        if (settings.fade == true) {
                            $(header).fadeIn(settings.speedAnim);
                        }
                        else if (settings.fade == false) {
                            $(header).slideDown(settings.speedAnim);
                        }
                        
                    }
                    else {
                        $(header).removeClass(settings.classToHide);
                    }
                    scrollTopCheck = true;
                }
                
                if(typeof ifHeaderTopClass == 'string') {
                    ifHeaderTop();
                }
        
                if (scrolled > 100 && scrolled > scrollPrev) {
                    if (scrollToDown == false) {
                        scrollToTop = false;
                        
                        if(typeof distanceHide == 'number') {
                            scrollDown = scrolled + distanceHide;
                        }
                        else {
                            scrollDown = scrolled + distance;
                        }
                        scrollDownCheck = false;
                        scrollToDown = true;
                    }
                    
                } else if (scrollToTop == false) {
                    
                        scrollToDown = false;
                        if(typeof distanceShow == 'number') {
                            scrollTop = scrolled - distanceShow;
                        }
                        else {
                            scrollTop = scrolled - distance;
                        }
                        scrollTopCheck = false;
                        scrollToTop = true;
                    }
                    
                scrollPrev = scrolled;
                if (scrolled >= scrollDown && scrollDownCheck == false) {
                    // hide elem
                    
                    if (settings.classToHide == undefined) {
                        if (settings.fade == true) {
                            $(header).fadeOut(settings.speedAnim);
                        }
                        else if (settings.fade == false) {
                            $(header).slideUp(settings.speedAnim);
                        }
                        if(classAnchor == true) {
                            $.each($('[data-hh-anchor]'), function() {                            
                                $(this).addClass($('[data-hh-anchor]').data('hh-anchor'));
                            })
                        }
                    }
                    else {
                        $(header).addClass(settings.classToHide);
                        if(classAnchor == true) {
                            $.each($('[data-hh-anchor]'), function() {                            
                                $(this).addClass($('[data-hh-anchor]').data('hh-anchor'));
                            })
                        }
                    }
                    scrollDownCheck = true;
                }
                if (scrollTop >= scrolled && scrollTopCheck == false) {
                    // show elem
                    if (settings.classToHide == undefined) {
                        if (settings.fade == true) {
                            $(header).fadeIn(settings.speedAnim);
                        }
                        else if (settings.fade == false) {
                            $(header).slideDown(settings.speedAnim);
                        }
                        if(classAnchor == true) {
                            $.each($('[data-hh-anchor]'), function() {                            
                                $(this).removeClass($('[data-hh-anchor]').data('hh-anchor'));
                            })
                        }
                    }
                    else {
                        $(header).removeClass(settings.classToHide);
                        if(classAnchor == true) {
                            $.each($('[data-hh-anchor]'), function() {                            
                                $(this).removeClass($('[data-hh-anchor]').data('hh-anchor'));
                            })
                        }
                    }
                    scrollTopCheck = true;
                }
            });
        }

        hHeader({
            elemName: $('.menu'),
            classToHide: 'hide',
            distanceHide: 350,
            distanceShow: 150,
            ifHeaderTop: ['top', 0]
        });

        $('.menu__nav--burger').on('click', function() {
            $('.menu__nav--burger, .menu__nav--list').toggleClass('active');
            $('body').toggleClass('lock')

        });

        AOS.init({
            once: true
        });

});