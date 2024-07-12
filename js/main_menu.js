$(function(){

    // $('ul#main_menu li').mouseenter(function(){
    //     $('#sub_menu',this).stop().slideDown(500);
    // });

    // $('ul#main_menu>li').mouseleave(function(){
    //     $('#sub_menu').stop().slideUp(1000);
    // });


    function depth() {
        $('ul#main_menu>li').on('mouseover', function () {
            $(this).find('#sub_menu').stop().slideDown();
        });
        $('ul#main_menu>li').on('mouseleave', function () {
            $(this).find('#sub_menu').stop().slideUp();
        });
    }
    
    
    depth();



    
});