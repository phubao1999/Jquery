$(document).ready(function () {
    // console.log('abc');
    // $('.content').isotope({
    //     itemSelector:'li'
    // });
    $('nav ul li a').click(function (e) { 
        e.preventDefault(); //return false;
        var danhMuc = $(this).data('class');
        //console.log(danhMuc);
        var ten = $(this).text();
        $('section h1').text(ten);
        $('.content ul li').each(function(index, el){
            if($(this).hasClass(danhMuc)){
                $(this).fadeIn(1000);
            }
            else{
                $(this).fadeOut(1000);
            }
        });
    });
});