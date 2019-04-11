Các Hiệu Ứng Jquery và css3:
-- Các Hiệu ứng jquery đã biết
Add class
Hiệu ứng slideUp, slideDown, slideToggle (Hiệu ứng đàn accodiong)
Cách xem vị trí div (sử dụng hàm offset) và sử dụng ntn-child
Hiệu ứng scroll khi có sự kiện click (Dùng method animate) (Sử dụng thư viện easing)
Sử dụng thử viện fancyBox để có thể xem danh sách ảnh (Tương tự khi ta dùng google Hình ảnh đểm xem list ảnh)
-- Hiệu ứng transform (Css3)
transform: rotate(180deg); (Xoay div 180 độ)
transform: rotatex(180deg); (Xoay div 180 độ theo chiều ngang (x))
transform: rotatey(180deg); (Xoay div 180 độ theo chiều dọc (y))
transform: rotate3d(180deg); (Xoay div 180 độ có độ thực tế cao)
--> Trong div bố phải có perspective:800px; (800px ở đây ý là khoảng cách từ user đến div là 800px);
transform-origin: 0% 50% (Tức là nó sẽ lấy tọa độ của div là 0% bên trái và 50% từ trên xuống để xoay);
transform: scale(2); (zoom div lên 2 lần)
transform: translateX(100px); (Dịch chuyển div cầm hiệu ứng sang tọa độ x là 100px);
transition-delay: 1s; (Khi di chuột vào thì phải 1s sau mới có hiệu ứng);
transition-timing-function: ease (Đây là thuộc tính để chỉnh gia tốc của transition cơ chế nó có thể chỉnh quá trình vận hành của hiệu ứng. Chỉ có chrome mới nhất mới có thể chỉnh sửa được hiệu ứng này trực tiếp)
