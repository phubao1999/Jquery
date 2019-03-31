$(document).ready(function () {
    console.log('Chay Chua Ban Oi');
    console.log($('.chapter1').offset().top);
    console.log($('.chapter2').offset().top);
    console.log($('.chapter3').offset().top);
    console.log($('.chapter4').offset().top);
    $('.menutren ul li:nth-child(1) a').on('click', function(event){
        event.preventDefault();
        //console.log('Duoc Chua!!!');
        $('html, body').animate({ scrollTop: 1250}, 1000, "easeInOutBack");
    });
    $('.menutren ul li:nth-child(2) a').on('click', function(event){
        event.preventDefault();
        //console.log('Duoc Chua!!!');
        $('html, body').animate({ scrollTop: 2250}, 1000, "easeInOutBack");
    });
    $('.menutren ul li:nth-child(3) a').on('click', function(event){
        event.preventDefault();
        //console.log('Duoc Chua!!!');
        $('html, body').animate({ scrollTop: 3250}, 1000, "easeInOutBack");
    });
    $('.menutren ul li:nth-child(4) a').on('click', function(event){
        event.preventDefault();
        //console.log('Duoc Chua!!!');
        $('html, body').animate({ scrollTop: 4250}, 1000, "easeInOutBack");
    });
    //Viet Jquery Cho Nut Len Tren
    $('.nutlentren').on('click', function(event){
        event.preventDefault();
        //console.log('Duoc Chua!!!');
        $('html, body').animate({ scrollTop: 0}, 1000);
    });
});