/**
 * Created by saber on 2017/3/21.
 */
//s4-效果 开始
(function () {
    $('.s4-top a').mouseover(function () {
        $('.s4-top a').removeClass('on2');
        $(this).addClass('on2');

        $('.s4-bottom ul').removeClass('show2');
        $('.s4-bottom ul').eq($(this).index() - 1).addClass('show2')
    });
    $('.li2').hover(function () {
            $(this).children(4).animate({bottom: 0})
        },
        function () {
            $(this).children(4).animate({bottom: -80})
        });
})();
//
//s5-效果 开始
(function () {
    var iNow = 0;
    $('.s5-left').click(function () {
        $('.s5-left').addClass('on3');
        $('.s5-right').removeClass('on3');
        iNow--;
        if (iNow == -1) {
            iNow = 0;
        }
        $('.s5-bottom ul').removeClass('show3');
        $('.s5-bottom ul').eq(iNow).addClass('show3')

    });
    $('.s5-right').click(function () {
        $('.s5-right').addClass('on3');
        $('.s5-left').removeClass('on3');
        iNow++;
        if (iNow == $('.s5-bottom ul').length) {
            iNow = $('.s5-bottom ul').length - 1
        }
        $('.s5-bottom ul').removeClass('show3');
        $('.s5-bottom ul').eq(iNow).addClass('show3')
    });
})();
//
//s6-效果 开始
(function () {
    $('.s6-li1').each(function () {
        var iNow = 0;
        var Tt = $(this).index();

        function move1() {
            $('.s6-li1').eq(Tt).find('input').removeClass('on4');
            $('.s6-li1').eq(Tt).find('input').eq(iNow).addClass('on4');

            $('.s6-li1').eq(Tt).find('ul').animate({left: -iNow * 296});
        }

        $(this).find('input').click(function () {
            iNow = $(this).index();
            move1();
        });
        $(this).find('.prev').click(function () {
            iNow--;
            if (iNow == -1) {
                iNow = 0
            }
            move1()
        });
        $(this).find('.next').click(function () {
            iNow++;
            if (iNow == $('.s6-li1').eq(Tt).find('input').length) {
                iNow = $('.s6-li1').eq(Tt).find('input').length - 1
            }
            move1()
        });
    })
})();
//
//登录
(function(){
    //click
    $('.load').click(function(){
        $('.Login_box_bg').css('display','block');
        $('.Login_box_menu').css({
            left:'500px',
            top:'200px'
        })
    });
    $('.close').click(function(){
        $('.Login_box_bg').css('display','none');
    });

    $('.Login_box_top').mousedown(function(ev){
        var oldX=ev.clientX-$('.Login_box_menu').offset().left;
        var oldY=ev.clientY-$('.Login_box_menu').offset().top;
        $(document).mousemove(function(ev){
            var newX=ev.clientX;
            var newY=ev.clientY;
            var l=newX-oldX;
            var t=newY-oldY;
            if(l<0){
                l=0
            }else if(l>document.documentElement.clientWidth-$('.Login_box_menu').outerWidth()){
                l=document.documentElement.clientWidth-$('.Login_box_menu').outerWidth()
            }
            if(t<0){
                t=0
            }else if(t>document.documentElement.clientHeight-$('.Login_box_menu').outerHeight()){
                t=document.documentElement.clientHeight-$('.Login_box_menu').outerHeight()
            }
            $('.Login_box_menu').css({
                left:l,
                top:t
            });
            return false
        });
        $(document).mouseup(function(){
            $(document).off('mousemove')
        })
    });
    //提交
    $('.login').click(function () {
        var timer=null;
        var s=3;
        if($('.user').val()==123&&$('.pWd').val()==123){
            $('.user').val('');
            $('.pWd').val('');
            $('<p>'+'登录成功!'+'<p>').appendTo('.Login_box_text');
            clearInterval(timer);
            timer=setInterval(function(){
                s--;
                $('.login').val(s+'秒');
                $('.login').css('color','black');
                $('.Login_box_bottom input').attr('disabled',true);
                if(s==0){
                    clearInterval(timer);
                    $('.login').val('登录');
                    $('.login').css('color','black');
                    $('.Login_box_bottom input').attr('disabled',false);
                    $('.Login_box_text').children(0).remove();
                    $('.Login_box_bg').css('display','none');
                    $('.load').attr('href','http://www.baidu.com');
                    $('.load').text('hi,最帅的男人');
                    $('.exit').text('退出！');
                    $('.load').off('click');

                }
            },1000);

            $('.exit').click(function(){
                $('.load').attr('href','javascript:');
                $('.load').text('登录');
                $('.exit').text('注册');
                $('.load').click(function(){
                    $('.Login_box_bg').css('display','block');
                    $('.Login_box_menu').css({
                        left:'500px',
                        top:'200px'
                    })
                });
            });
        }else{
            $('<p>'+'账号密码错误，请稍后重新登录!'+'<p>').appendTo('.Login_box_text');
            $('.user').val('');
            $('.pWd').val('');

            clearInterval(timer);
            timer=setInterval(function(){
                s--;
                $('.login').val(s+'秒');
                $('.login').css('color','black');
                $('.Login_box_bottom input').attr('disabled',true);
                if(s==0){
                    clearInterval(timer);
                    $('.login').val('登录');
                    $('.login').css('color','black');
                    $('.Login_box_bottom input').attr('disabled',false);
                    $('.Login_box_text').children(0).remove()
                }
            },1000);

        }

    })
})();
//登录结束
