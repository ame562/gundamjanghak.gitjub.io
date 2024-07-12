$(function(){

    $('#main_content').addClass('on');
    $('#bottom_banner').delay(1000).addClass('on');

    $('ul.bx').bxSlider({

        auto: true,
        speed : 500,
        controls : true,
        pager: false,
        prevSelector: '.prevBtn',
        nextSelector: '.nextBtn',
        prevText: '<',
        nextText : '>'
    });


    function depth() {
        $('#main_menu>li').on('mouseover', function () {
            $(this).find('#sub_menu').stop().slideDown();
        });
        $('#main_menu>li').on('mouseleave', function () {
            $(this).find('#sub_menu').stop().slideUp();
        });
    }
    
    
    depth();

    // $('ul#main_menu li').mouseenter(function(){
    //     $('#sub_menu',this).stop().slideDown(500);
    // });

    // $('ul#main_menu>li').mouseleave(function(){
    //     $('#sub_menu').stop().slideUp(1000);
    // });

/*하단배너*/


/*banner_slider---------------*/
    


    //2초 마다 함수실행
    var timer = setInterval( slide_timer, 2000);

    //배열생성
    var sale_arr = new Array();

    for(var i =0; i<5; i++){

        sale_arr.push( $('#bottom_banner #slide li').eq(i)     );
        //배열객체안에  인덱스방번호 i 와 일치하는 li요소를 찾아서 밀어넣음

        //배열안의 li의 위치값을 넓이*index번호로지정
        sale_arr[i].css({'left': 300*i});
    }

    function slide_timer(){

        var first_list = sale_arr.shift();

        sale_arr.push(first_list);

        $('#bottom_banner #slide li').each(function(i){

            //왼쪽으로 160px씩 이동하는 애니메이션 후 재정렬
            $(this).animate({ 'left': '-=300px'}, 1500, 'easeOutExpo', function(){

                for( var i =0; i<5; i++){

                    sale_arr[i].css({'left': 300*i   });

                }

            });


        });
    }

    $('#bottom_banner #slide li').mouseenter(function(){

        clearInterval(timer);

    });
    $('#bottom_banner #slide li').mouseleave(function(){

        timer = setInterval( slide_timer, 2000);

        });




});