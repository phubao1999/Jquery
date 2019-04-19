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



    // Về cơ bản bài này, bản chất của nó là mỗi các slide đang được viewer thấy nó chính là 1 class đang được active
    // Cho nên nó sẽ add class để có hiệu ứng để trang tiếp theo nhảy ra
    // Như vậy trang tiếp theo sẽ có class active và cứ thế cho mỗi trang sau