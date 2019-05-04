$(document).ready(function () {
    $(window).scroll(function () { 
        // console.log($('html, body').scrollTop()); 
        var viTri = $('html, body').scrollTop();
        if( (viTri >= 650) && (viTri < 1200)) {
            // console.log('ok');
            $('.menutren').addClass('bienhinh');
        }
        else {
            $('.menutren').removeClass('bienhinh');
        }
        if ((viTri) > 1200 && (viTri < 1800)){
            $('.menutren').addClass('lv1');
        }
        else {
            $('.menutren').removeClass('lv1');
        }
        if ((viTri) > 1800 && (viTri < 3000)){
            $('.menutren').addClass('lv2');
        }
        else {
            $('.menutren').removeClass('lv2');
        }
    });
});