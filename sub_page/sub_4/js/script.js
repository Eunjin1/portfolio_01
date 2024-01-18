$(document).ready(function(){

    $('.top_nav').mouseover(function(){
        $(this).find('.sub_nav').stop().slideDown(300);
    }).mouseout(function(){
        $('.sub_nav').stop().slideUp(300);
    });
    /* nav end */

    $('.menu_mo').hide();
    $('.header_icon').click(function(){
        $('.menu_mo').show();
    });
    $('.menu_mo>div').click(function(){
        $('.menu_mo').hide();
    })
    /* header_menu_mo */

    $('.btn_wrap>.btn_1').each(function(index){
        $(this).attr('data-index', index);
    }).click(function(){
        var i = $(this).attr('data-index');

        if(i==0) {
            $('.item_box').animate({left: '-0%'});
        } else if(i==1) {
            $('.item_box').animate({left: '-100%'});
        } else if(i==2) {
            $('.item_box').animate({left: '-200%'});
        } else if(i==3) {
            $('.item_box').animate({left: '-300%'});
        } else if(i==4) {
            $('.item_box').animate({left: '-400%'});
        } else if(i==5) {
            $('.item_box').animate({left: '-500%'});
        }
        
        $('.btn_wrap>.btn_1').addClass('on');
        $('.btn_wrap>.btn_1').removeClass('on');
        
        if(i==0) {
            $('.btn_wrap>.btn_1').eq(0).addClass('on');
        } else if(i==1) {
            $('.btn_wrap>.btn_1').eq(1).addClass('on');
        } else if(i==2) {
            $('.btn_wrap>.btn_1').eq(2).addClass('on');
        } else if(i==3) {
            $('.btn_wrap>.btn_1').eq(3).addClass('on');
        } else if(i==4) {
            $('.btn_wrap>.btn_1').eq(4).addClass('on');
        } else if(i==5) {
            $('.btn_wrap>.btn_1').eq(5).addClass('on');
        }
    });
    /* menu_btn */

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup : 2,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 3,
                slidesPerGroup : 3,
            },
            1025: {
                slidesPerView: 4,
                slidesPerGroup : 4,
            },
            1441: {
                slidesPerView: 5,
                slidesPerGroup : 5,
            }
        }
    });
    /* swiper */
    
});//end