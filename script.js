// $(window).on('load', function() {
//     $('.kategori .card-kategori, .produk .card-produk').each(function(i) {
//         setTimeout(function() {
//             $('.kategori .card-kategori').eq(i).addClass('show-kategori'),
//             $('.produk .card-produk').eq(i).addClass('show-produk')
//     }, 200 * i);
//     });
// });

// Smooth SCrolling
$('.page-scroll').on('click', function(e) {
    // Ambil isi href
    var tujuan = $(this).attr('href');

    // Tangkap Elemen ybs
    var elemenTujuan = $(tujuan);

    // Pindahkan Scroll
    $('html, body').animate({
        scrollTop:elemenTujuan.offset().top - 55
    }, 700);

    e.preventDefault();
});

$(window).on('load', function() {
   $('.banner .banner-left, .banner .banner-right').addClass('show-banner');
});

// Scroll Function
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var top = $(window).scrollTop();

    // Navbar
    if(top>10) {
        $('.navbar').addClass('show-navbar');
    } else if($('.navbar').hasClass('show-navbar')) {
        $('.navbar').removeClass('show-navbar');
    }

    // Produk
    if(wScroll > $('.produk').offset().top - 100) {
        $('.produk .produk-wrapper .col-lg-6').each(function(i) {
            setTimeout(function() {
                $('.produk .produk-wrapper .col-lg-6').eq(i).addClass('show-produk');
            }, 300 * i);
        });
    }

    if(wScroll > $('.e-katalog').offset().top - 300) {
        $('.e-katalog .box-katalog').each(function(i) {
            setTimeout(function() {
                $('.e-katalog .box-katalog').eq(i).addClass('show-katalog');
            }, 100 * i);
        });
    }

});