/**
 * Created by saber on 2017/3/25.
 */
$.ajax({
   url:'ajax/header.txt',
    success:function(str){
        var arr=eval('('+str+')');
        for(var i=0;i<2;i++){
            $(
                '<a href="'+$(arr)[i].href+'">'+$(arr)[i].text+'</a>'
            ).appendTo('.search-word');
        }
    }
});
$.ajax({
   url: 'ajax/header1.txt',
    success: function (str) {
        var arr=eval('('+str+')');
        for(var i=0; i<11; i++){
            $('<li><a href="'+$(arr)[i].href+'"><span class="sp1">'+$(arr)[i].text2+'</span><span class="sp2">'+$(arr)[i].cont+'</span></a></li>').appendTo('.s-ul ul');
        }
    }
});
//header二级菜单
$.ajax({
    url: 'ajax/header2-1.txt',
    success:function(str){
        var arr=eval('('+str+')');
        for(var i=0;i<6;i++){
            $(
                '<li><div class="m-first"><span>'+$(arr)[i].text+'</span></div>'
                +'<div class="m-second"><a href="'+$(arr)[i].href+'"><img src="'+$(arr)[i].img+'" alt=""/></a></div>'
                +'<div class="m-third"><span><a href="'+$(arr)[i].href+'">'+$(arr)[i].text2+'</a></span></div>'
                +'<p>'+$(arr)[i].text3+'</p></li>'
            ).appendTo('.twoMenu .ul1')
        }
    }
});
$.ajax({
    url: 'ajax/header2-2.txt',
    success:function(str){
        var arr=eval('('+str+')');
        for(var i=0;i<6;i++){
            $(
                '<li><div class="m-first"><span>'+$(arr)[i].text+'</span></div>'
                +'<div class="m-second"><a href="'+$(arr)[i].href+'"><img src="'+$(arr)[i].img+'" alt=""/></a></div>'
                +'<div class="m-third"><span><a href="'+$(arr)[i].href+'">'+$(arr)[i].text2+'</a></span></div>'
                +'<p>'+$(arr)[i].text3+'</p></li>'
            ).appendTo('.twoMenu .ul2')
        }
    }
});
$.ajax({
    url: 'ajax/header2-3.txt',
    success:function(str){
        var arr=eval('('+str+')');
        for(var i=0;i<6;i++){
            $(
                '<li><div class="m-first"><span>'+$(arr)[i].text+'</span></div>'
                +'<div class="m-second"><a href="'+$(arr)[i].href+'"><img src="'+$(arr)[i].img+'" alt=""/></a></div>'
                +'<div class="m-third"><span><a href="'+$(arr)[i].href+'">'+$(arr)[i].text2+'</a></span></div>'
                +'<p>'+$(arr)[i].text3+'</p></li>'
            ).appendTo('.twoMenu .ul3')
        }
    }
});
$.ajax({
    url: 'ajax/header2-4.txt',
    success:function(str){
        var arr=eval('('+str+')');
        for(var i=0;i<6;i++){
            $(
                '<li><div class="m-first"><span>'+$(arr)[i].text+'</span></div>'
                +'<div class="m-second"><a href="'+$(arr)[i].href+'"><img src="'+$(arr)[i].img+'" alt=""/></a></div>'
                +'<div class="m-third"><span><a href="'+$(arr)[i].href+'">'+$(arr)[i].text2+'</a></span></div>'
                +'<p>'+$(arr)[i].text3+'</p></li>'
            ).appendTo('.twoMenu .ul4')
        }
    }
});
$.ajax({
    url: 'ajax/header2-5.txt',
    success:function(str){
        var arr=eval('('+str+')');
        for(var i=0;i<6;i++){
            $(
                '<li><div class="m-first"><span>'+$(arr)[i].text+'</span></div>'
                +'<div class="m-second"><a href="'+$(arr)[i].href+'"><img src="'+$(arr)[i].img+'" alt=""/></a></div>'
                +'<div class="m-third"><span><a href="'+$(arr)[i].href+'">'+$(arr)[i].text2+'</a></span></div>'
                +'<p>'+$(arr)[i].text3+'</p></li>'
            ).appendTo('.twoMenu .ul5')
        }
    }
});
$.ajax({
    url: 'ajax/header2-6.txt',
    success:function(str){
        var arr=eval('('+str+')');
        for(var i=0;i<4;i++){
            $(
                '<li><div class="m-first"><span>'+$(arr)[i].text+'</span></div>'
                +'<div class="m-second"><a href="'+$(arr)[i].href+'"><img src="'+$(arr)[i].img+'" alt=""/></a></div>'
                +'<div class="m-third"><span><a href="'+$(arr)[i].href+'">'+$(arr)[i].text2+'</a></span></div>'
                +'<p>'+$(arr)[i].text3+'</p></li>'
            ).appendTo('.twoMenu .ul6')
        }
    }
});
$.ajax({
    url: 'ajax/header2-7.txt',
    success:function(str){
        var arr=eval('('+str+')');
        for(var i=0;i<3;i++){
            $(
                '<li><div class="m-first"><span>'+$(arr)[i].text+'</span></div>'
                +'<div class="m-second"><a href="'+$(arr)[i].href+'"><img src="'+$(arr)[i].img+'" alt=""/></a></div>'
                +'<div class="m-third"><span><a href="'+$(arr)[i].href+'">'+$(arr)[i].text2+'</a></span></div>'
                +'<p>'+$(arr)[i].text3+'</p></li>'
            ).appendTo('.twoMenu .ul7')
        }
    }
});
//subject1


