$(document).ready(function () {
    // Cho Nội Dung Thu Lại
    $('.ndmotkhoi').slideUp();
    // Click Vào h3
    $('.tren').click(function (event) { 
        // console.log('Đã Click');
        $('.ndmotkhoi').slideToggle();
        $(this).toggleClass('mauxanh');
    });
});