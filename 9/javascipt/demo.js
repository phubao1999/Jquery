$(document).ready(function () {
    $(window).scroll(function () { 
        // console.log($('html, body').scrollTop()); 650
        var viTri = $('html, body').scrollTop();
        if( viTri >= 650) {
            // console.log('ok');
            $('.menutren').addClass('bienhinh');
        }
        else {
            $('.menutren').removeClass('bienhinh');
        }
    });
});