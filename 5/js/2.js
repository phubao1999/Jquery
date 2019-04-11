$(document).ready(function () {
    $('.noidungthem').slideUp(0);
    $('.nutload').click(function(event){
        $('.noidungthem').slideDown(200);
        TweenMax.staggerForm($('.noidungthem .to'),0.5,{top:100, opacity:0},0.1);  
    });;
});