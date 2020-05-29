$(window).on('load', function() {
    $('.kategori .col, .produk .col').each(function(i) {
        setTimeout(function() {
            $('.kategori .col').eq(i).addClass('show-kategori'),
            $('.produk .col').eq(i).addClass('show-produk')
    }, 200 * i);
    });
});