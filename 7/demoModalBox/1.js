// Một Số hiệu ứng khác nó tương tự như ví dụ demo chỉ khác ở chỗ thêm y or x hay các phần tử đối ngược
$(document).ready(function () {
    // console.log('OK');
    // Xử lý nút click vào
    $('.nut').click(function (e) { 
        e.preventDefault();
        // Xử lý class
        $('.noidung').addClass('noidunghienra');
        $('.momo').addClass('momodira');
    });
    var thongBao = setInterval(function(){
        $('.noidung').removeClass('noidunghienra');
        $('.momo').removeClass('momodira');
        $('.demo1').removeClass('demo1hienra');
        $('.demo2').removeClass('demo2hienra');
        $('.demo3').removeClass('demo3hienra');
        $('.demo4').removeClass('demo4hienra');
        $('.demo5').removeClass('demo5hienra');
        $('.demo6').removeClass('demo6hienra');
    }, 5000);
    $('.nutdong, .momo').click(function (e) { 
        e.preventDefault();
        // Xử lý class
        $('.noidung').removeClass('noidunghienra');
        $('.momo').removeClass('momodira');
        $('.demo1').removeClass('demo1hienra');
        $('.demo2').removeClass('demo2hienra');
        $('.demo3').removeClass('demo3hienra');
        $('.demo4').removeClass('demo4hienra');
        $('.demo5').removeClass('demo5hienra');
        $('.demo6').removeClass('demo6hienra');
    });
    $('.demo5').click(function (e) { 
        e.preventDefault();
        $('.demo5').removeClass('demo5hienra');
    });
    $('._2').click(function (e) { 
        e.preventDefault();
        $('.demo1').addClass('demo1hienra');
        $('.momo').addClass('momodira');
    });
    $('._3').click(function (e) { 
        e.preventDefault();
        $('.demo2').addClass('demo2hienra');
        $('.momo').addClass('momodira');
    });
    $('._4').click(function (e) { 
        e.preventDefault();
        $('.demo3').addClass('demo3hienra');
        $('.momo').addClass('momodira');
    });
    $('._5').click(function (e) { 
        e.preventDefault();
        $('.demo4').addClass('demo4hienra');
        $('.momo').addClass('momodira');
    });
    $('._6').click(function (e) { 
        e.preventDefault();
        $('.demo5').addClass('demo5hienra');
        $('.momo').addClass('momodira');
    });
    $('._7').click(function (e) { 
        e.preventDefault();
        $('.demo6').addClass('demo6hienra');
        $('.momo').addClass('momodira');
    });
});