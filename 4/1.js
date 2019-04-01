$(document).ready(function () {
    // console.log('Duoc Chua Ban oi');
    // Xu Ly Ham Add Class
    $('.tdkhoi').click(function(event){
      $(this).toggleClass('xanh'); 
         // Khi Click Vao Noi Dung Hien Ra
      $(this).next().slideToggle(800);
      $('html, body').animate({scrollTop: $(this).offset().top}, 1000, "easeOutElastic");
    });
    
    // Code Cho Phan Phong To Anh
   // Xu ly Co dan noi dung (accodiong)
   $('.ndkhoi').slideUp();
   $('.cacanh').slideUp();

   // Khi Click Vao Noi Dung Hien Ra
});
    // Gap loi Hinh Anh Se fix sau
    // Gap Loi Su dung thu vien jquery FancyBox