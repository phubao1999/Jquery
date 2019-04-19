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
a:link ( định dạng cho tất cả liên kết khi chưa được click.)
a:visited(định dạng cho các thành phần đã được click.)
a:active(chọn các liên kết được kích hoạt.)
a:hover(khi cho chuot vao se co Css)
-- FlexBox:
Div Cha:Display : flex;
    1)  flex-direction: row;(sắp xếp theo hàng ngang)
        flex-derection: column;(Sắp xếp theo hàng dọc)
    2)  justify-content: flex-start;(Sắp xếp flex bắt đầu tùy vào row or column)
        justify-content: flex-end;(Sắp xếp flex kết thúc tùy vào row or column)
        justify-content: center;(cho ra giữa)
        justifi-content: space-around
        justifi-content: space-between
        justifi-content: space-evenly
Div con:flex-basis: <length>;
        flex-grow: <number>;
        flex-shrink:
        order: 1;(đảo ngược vị trí flex của phần tử kế tiếp)
-- Grid:
    display: grid;
    grid-template-columns: 70% 30%;
Div Con:
    giả sử chia div có 4 div con (25%)
    .item1 {
        grid-column: 1 / span 2;
    }
    thì div item1 sẽ chiếm 50% (= 1/2 của hệ thống grid)
-- Sử dụng thuộc tính animation kết hợp với các cú pháp chuyển động của Css3 (Khi load trang)
Ví Dụ:
    img.hoatiet1 {
        position: absolute;
        z-index: 1;
        bottom: 38%;
        right: 10%;
        opacity: 0;
        animation: phonglen 0.5s forwards;
        animation-delay: 2s;
    }
    @-webkit-keyframes phonglen {
        0%{
            opacity: 0; transform: scale(0.4);
        }
        100%{
            opacity: 1; transform: scale(1);
        }
    }
-- Sử dụng extension beatify: ctrlA file Bấm f1. search từ khóa beautifi. enter
