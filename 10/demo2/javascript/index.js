$(document).ready(function () {
    $('.content ul').isotope({
        itemSelector: 'li'
    });

    $('.tukhoa').keypress(function (e) {
        if (event.keyCode == '13') {
            tu1 = $('.tukhoa').val();
            tu1 = "." + tu1;
            $('.content ul').isotope({
                filter: tu1
            });
        }
    });

    thoiGian = setInterval(function () {
        tu1 = $('.tukhoa').val();
        tu1 = "." + tu1;
        $('.content ul').isotope({
            filter: tu1
        });
    }, 200);

    $('nav ul li a').click(function (e) {
        e.preventDefault();
        var danhMuc = $(this).data('class');
        danhMuc = '.' + danhMuc;
        var ten = $(this).text();

        if (danhMuc === 'all') {
            $('section h1').text('Tất Cả Ảnh');

            $('.content ul').isotope({
                filter: '*'
            });
        } else {
            $('section h1').text(ten);

            $('.content ul').isotope({
                filter: danhMuc
            });
        }

        return false;
    });
});