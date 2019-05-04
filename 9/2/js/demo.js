$(document).ready(function () {
    $(window).scroll(function (e) { 
        var vitriBody = $('html, body').scrollTop();
        var vitriGiaodien = $('.giaodien').offset().top;
        vitriGiaodien = vitriGiaodien - 600;
        
        if (vitriBody >= vitriGiaodien){
            // console.log('abc');
            $('.giaodien').addClass('hienra');
        }
        else {
            $('.giaodien').removeClass('hienra');
        }
    });
});