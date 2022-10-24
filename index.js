const settingSlider = {
    dots: true,
    arrows: true,
    infinite: true,
    lazyLoad: 'ondemand',
    spead: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {breakpoint: 1024,
        settings: 'unslick'
    }
    ] 
}

$(document).ready(function () {
    $('.slider').slick(settingSlider);
})

// $(window).on( e: 'resize', t: function () {...});