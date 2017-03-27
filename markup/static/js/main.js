$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});

$(window).on({
    load: function () {
        checkFooterHeight();
        window.headerHeight = headerHeightCheck();
        fixHeader();
    },
    scroll: function () {
        if(window.headerHeight){
            fixHeader();
        }
    },
    resize: function () {
        checkFooterHeight();
        var widthDoc = $(document).width();

        if(widthDoc >= 991){
            fixHeader(this);
            window.headerHeight = headerHeightCheck();
        }else{
            fixHeader(this);
            window.headerHeight = headerHeightCheck();
        }
        
    }
});
if ($.fn.slick) {
    $('.header__slider-el').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.header__slider .slick-prev'),
        nextArrow: $('.header__slider .slick-next'),
        appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
    });

    $('.city__list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 558,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });

    $('.slider-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 672,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    $('.slider-inner-objects').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 628,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    $('.item-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 672,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });
    $('.stock').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.item-listSlider > div').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.index-products-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 746,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.statistics').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        autoplay: true,
        autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 698,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.header__advantages').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></button>",
        // appendDots: $('.header__sliderDots')
        autoplay: true,
        autoplaySpeed: 3000,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 952,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 602,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 462,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.objects').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: "<button class='objects__arrow_prev objects__arrow'><span><svg class='icon__arrow-left' width='12px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-left'></use></svg></span></button>",
        nextArrow: "<button class='objects__arrow_next objects__arrow'><span><svg class='icon__arrow-right' width='11px' height='21px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-right'></use></svg></span></button>",
        // appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
    });
}

if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}
if ($.fn.magnificPopup) {
    var magnificPopupObj = {
        delegate: 'a',
        type: 'image',
        tLoading: "",
        mainClass: "",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        iframe: {
            // markup: '<div class="mfp-iframe-scaler">' +
            // '<div class="mfp-close"></div>' +
            // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    $('.magnificPopup').each(function () {
        $(this).magnificPopup(magnificPopupObj);
    })
}

$('.tabs__nav').find('a').click(function(e){
    e.preventDefault();
    var _this = $(this),
        parent = _this.parent(),
        className = 'active',
        block = $(_this.attr('data-block')),
        time = 300;

    if(!parent.hasClass(className)){
        parent.addClass(className);
    }
    parent.siblings().removeClass(className)
        .each(function () {
            var __this = $(this),
                link = __this.find('a'),
                block = $(link.attr('data-block'));
            if(block[0]){
                block.fadeOut(time)
            }
        });

    block.delay(time).fadeIn(time)
});

$('.form-search_hidden').hover(function () {
   $(this).addClass('active');
}, function () {
   $(this).removeClass('active');
});

function initYmaps() {
    var coords = [52.32594308927015, 104.2421168088913];
    var MapPlaces = new ymaps.Map('yamap', {
        center: coords,
        zoom: 12,
        controls: ['zoomControl']
    });
    MapPlaces.behaviors.disable('scrollZoom');

    collection = new ymaps.GeoObjectCollection(null,{
        iconLayout: 'default#image',
        iconImageHref: 'placemark.png',
        iconImageSize: [101, 84],
        iconImageOffset: [-31, -83]
    });

    MapPlaces.geoObjects.add(collection);

    placemark = new ymaps.Placemark(coords);
    collection.add(placemark);
}

try{
    ymaps.ready(initYmaps);
}catch (e){}


$('.video-list__preview-item').click(function (e) {
    e.preventDefault();
    var _this = $(this),
        dataAttr = _this.data();

    _this.addClass('active').siblings().removeClass('active');
    $('.video-list__video-el iframe').attr('src', dataAttr.video);
    $('.video-list__video-content span').text(dataAttr.text);
});

$('.toggle-btn').click(function(e){
    var _this = $(this);
        block = $(_this.data('block'));

    if(block[0]){
        block.stop().slideToggle(300);
    }
});


