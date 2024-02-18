$(document).ready(function() {

    $('.phim-infor>span.docthem').click(function() {
        $('.phim-infor>p.gt').toggleClass('gt-full');
        if(!$('.phim-infor>p.gt').hasClass('gt-full')) {
            $(this).html('Đọc thêm <i class="fa-solid fa-angle-down"></i>')
        } else {
            $(this).html('Thu gọn <i class="fa-solid fa-angle-up"></i>');
        }
    });
    
})