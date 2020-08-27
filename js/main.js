$(function(){

    $('.width-screen').html($(window).width())

    let heightBg = $('.header__bg-image').width() / 2,
        heightForHeader = (heightBg - $(window).height()) + $(window).height();
    
        if(heightForHeader >= 800) {
            $('.header').css('height', heightForHeader + 'px');
        }

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
            
        }

        $(window).resize(function() {
            customMediaEvents();
            heightBg = $('.header__bg-image').width() / 2,
            heightForHeader = (heightBg - $(window).height()) + $(window).height();
            if(heightForHeader >= 800) {
                $('.header').css('height', heightForHeader + 'px');
            }
            
        });

        AOS.init();

});