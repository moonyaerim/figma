$(document).ready(function () {
    $('.product_list').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    });
});

// ------------------shop_Categories-------------------

$(document).ready(function () {
    $('.shop_Categories').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
});

// ------------------single Product-------------------

$(document).ready(function () {
    $('.single_Product').slick({
        arrows: false,
        dots: true,
        //autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
});