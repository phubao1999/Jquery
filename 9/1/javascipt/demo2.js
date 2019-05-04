$(document).ready(function () {
    var vitriMenu = $('.menutren').offset().top;
    $(window).scroll(function (e) { 
        let vitriBody = $('html, body').scrollTop();
        // console.log(vitriBody);
        // tinh vi tri menu
        if (vitriBody >= vitriMenu){
            // console.log('aa');
            $('.menutren').addClass('goku');
        }
        else {
            $('.menutren').removeClass('goku');
        }
    });
});