const swiper = new Swiper('.featured-products', {
    observer: true,
    observeParents: true,
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        930: {
            slidesPerView: 3,
        },
        1209: {
            slidesPerView: 4,
        },
        1587: {
            slidesPerView: 4,
        }
        
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
 

// brands 

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



// MODAL

function product(img, h1, number, span, p, li1, li2, li3, li4, price,) {
    document.getElementById("product-image").src = img;
    document.getElementById("product-title").innerHTML = h1;
    document.getElementById("product-code").innerHTML = number;
    document.getElementById("product-brand").innerHTML = span;
    document.getElementById("product-about").innerHTML = p;
    document.getElementById("product-info1").innerHTML = li1;
    document.getElementById("product-info2").innerHTML = li2;
    document.getElementById("product-info3").innerHTML = li3;
    document.getElementById("product-info4").innerHTML = li4;
    document.getElementById("product-price").innerHTML = price;

}