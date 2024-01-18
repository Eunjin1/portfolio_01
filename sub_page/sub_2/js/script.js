$(document).ready(function(){

    $(".top_nav").mouseover(function(){
        $(this).find(".sub_nav").stop().slideDown(300);
    }).mouseout(function(){
        $(".sub_nav").stop().slideUp(300);
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

})//end