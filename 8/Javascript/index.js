$(document).ready(function () {
    //console.log('Ok');
    $('.next').click(function(event){
        var sau = $('.active').next();
       
        $('.active').addClass('bien-mat-o-ben-trai').one('webkitAnimationEnd', function (e) {
            $('.bien-mat-o-ben-trai').removeClass('bien-mat-o-ben-trai');
        });;
        sau.addClass('di-vao-tu-ben-phai').one('webkitAnimationEnd', function(e){
            $('.active').removeClass('active');
            $('.di-vao-tu-ben-phai').addClass('active').removeClass('di-vao-tu-ben-phai');
        });
    });
});