/*탭이동 */

/* 왕복 탭이동*/
$(function(){
    $(".tab_way li a").click(function () {
        $(".tab_way li a").removeClass("on").css("color", "rgba(0,0,0,0.4)");
        $(this).addClass("on").css("color", "#FFFFFF");
    });
});

/* 특가항공권~여행지리뷰 탭이동*/
$(function(){
    $("ul.tab_ticket_cate li a").click(function () {
        $("ul.tab_ticket_cate li a").removeClass("on").css("color", "rgba(0,0,0,0.4)");
        $(this).addClass("on").css("color", "rgba(0,0,0,1)");
    });
});

/* 전체~국제선~국내선 탭이동*/
$(function(){
    $("ul.tab_ticket li a").click(function () {
        $("ul.tab_ticket li a").removeClass("on").css("color", "rgba(0,0,0,0.4)");
        $(this).addClass("on").css("color", "rgba(0,0,0,1)");
    });
});

/* 언어 선택 레이어 팝업*/

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 30
});
