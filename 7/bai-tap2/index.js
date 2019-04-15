$(document).ready(function () {
    //console.log('Alo ALo');
    $('.nutmora').click(function (e) { 
        $('.menutrai').toggleClass('traisang');
    });
    $('.nutmora2').click(function (e) { 
        $('.menutren').toggleClass('trenxuong');
    });
    $('.nutmora3').click(function (e) { 
        $('.menutrai').toggleClass('traisang');
        $('.cacnut').toggleClass('sangtrai');
    });
});