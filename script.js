$(window).on('load', function() {
    $('.kategori .card-kategori, .produk .card-produk').each(function(i) {
        setTimeout(function() {
            $('.kategori .card-kategori').eq(i).addClass('show-kategori'),
            $('.produk .card-produk').eq(i).addClass('show-produk')
    }, 200 * i);
    });
});