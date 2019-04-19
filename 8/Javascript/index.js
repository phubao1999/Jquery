$(document).ready(function () {
    //console.log('Ok');
    thoigian = setInterval(function () {
        $('.next').trigger('click');
    }, 3000);

    $('.next').click(function (event) {
        clearInterval(thoigian);
        var sau = $('.active').next();

        var viTri = $('.xanh').index() + 1;
        $('.nutslide ul li').removeClass('xanh');
        if (viTri == $('.nutslide ul li').length) {
            viTri = 0;
        }
        $('.nutslide ul li:nth-child(' + (viTri + 1) + ')').addClass('xanh');



        if (sau.length == 0) {
            $('.active').addClass('bien-mat-o-ben-trai').one('webkitAnimationEnd', function (e) {
                $('.bien-mat-o-ben-trai').removeClass('bien-mat-o-ben-trai');
            });

            $('.anhslide ._1slide:first-child').addClass('di-vao-tu-ben-phai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                $('.di-vao-tu-ben-phai').addClass('active').removeClass('di-vao-tu-ben-phai');
            });
        } else {
            $('.active').addClass('bien-mat-o-ben-trai').one('webkitAnimationEnd', function (e) {
                $('.bien-mat-o-ben-trai').removeClass('bien-mat-o-ben-trai');
            });
            sau.addClass('di-vao-tu-ben-phai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                $('.di-vao-tu-ben-phai').addClass('active').removeClass('di-vao-tu-ben-phai');
            });
        }
    }); //Het Nut Next
    $('.previous').click(function (e) {
        clearInterval(thoigian);
        e.preventDefault();
        //console.log('ok');
        var truoc = $('.active').prev();

        var viTri = $('.xanh').index() + 1;
        $('.nutslide ul li').removeClass('xanh');
        if (viTri == 1) {
            viTri = $(('.nutslide ul li').length + 1);
        }
        $('.nutslide ul li:nth-child(' + (viTri - 1) + ')').addClass('xanh');



        if (truoc.length == 1) {
            $('.active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd', function (e) {
                $('.bien-mat-o-ben-phai').removeClass('bien-mat-o-ben-phai');
            });
            truoc.addClass('di-vao-tu-ben-trai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                $('.di-vao-tu-ben-trai').addClass('active').removeClass('di-vao-tu-ben-trai');
            });
        } else {
            $('.active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd', function (e) {
                $('.bien-mat-o-ben-phai').removeClass('bien-mat-o-ben-phai');
            });
            $('.anhslide ._1slide:last-child').addClass('di-vao-tu-ben-trai').one('webkitAnimationEnd', function (e) {
                $('.active').removeClass('active');
                $('.di-vao-tu-ben-trai').addClass('active').removeClass('di-vao-tu-ben-trai');
            });
        }
    });

    $('.nutslide ul li').click(function (event) {
        $('.nutslide ul li').removeClass('xanh');
        $(this).addClass('xanh');

        console.log($(this).index() + 1);
        $('.anhslide ._1slide:nth-child(' + ($(this).index() + 1) + ')').addClass('di-vao-tu-ben-trai').one('webkitAnimationEnd', function (e) {
            $('.active').removeClass('active');
            $('.di-vao-tu-ben-trai').addClass('active').removeClass('di-vao-tu-ben-trai');
        });
    });
});



// Về cơ bản bài này, bản chất của nó là mỗi các slide đang được viewer thấy nó chính là 1 class đang được active
// Cho nên nó sẽ add class để có hiệu ứng để trang tiếp theo nhảy ra
// Như vậy trang tiếp theo sẽ có class active và cứ thế cho mỗi trang sau