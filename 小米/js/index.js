/**
 * Created by saber on 2017/3/18.
 */
    //top 悬停
    var oBox=document.getElementById('t-center');
    var aA=oBox.getElementsByTagName('a');
    for(var i=0;i<aA.length;i++){
    aA[i].onmouseover=function(){
        this.style.color='#fff'
    };
    aA[i].onmouseout=function(){
        this.style.color='#b0b0b0'
    };
    }
    var oGwc1=document.getElementById('gwc1');
    var oGwc2=document.getElementById('gwc2');

    oGwc1.onmouseover=oGwc2.onmouseover=function (x){
        oGwc2.style.display='block';
        oGwc1.style.backgroundColor='white';
        oGwc1.style.color='#ff6700';
        oGwc2.style.borderTop='none'
    };
    oGwc1.onmouseout=oGwc2.onmouseout=function(){
        oGwc2.style.display='none';
        oGwc1.style.backgroundColor='#424242';
        oGwc1.style.color=' #b0b0b0';
    };
    //top 悬停结束
    //header 悬停开始
    var oHeader=document.getElementById('header');
    var oNav=document.getElementById('nav');
    var oA=oNav.getElementsByTagName('a');
    var oT=oHeader.getElementsByTagName('input')[0];
    var oT1=oHeader.getElementsByTagName('input')[1];
    var oSearch=document.getElementById('search');
    var oA1=oSearch.getElementsByTagName('a');
    var oTw=document.getElementById('search-word');
    var oUlx=oHeader.getElementsByTagName('ul')[1];
    var oTwoMenu=document.getElementById('twoMenu');
    var aUl=oTwoMenu.getElementsByTagName('ul');
    var timer=null;
    var iNow=0;
    for(var i=0;i<7;i++){
        oA[i].index=i;
        oA[i].onmouseover=function(){
            iNow=this.index;
            this.style.color='#ff6700';
            for(var i=0;i<7;i++){
                aUl[i].style.display='none'
            }
            clearTimeout(timer);
            timer=setTimeout(function(){
                oTwoMenu.style.display='block';
                aUl[iNow].style.display='block'
            },10)
        };
        oA[i].onmouseout=function(){
            iNow=this.index;
            this.style.color='black';
            clearTimeout(timer);
            timer=setTimeout(function () {
                oTwoMenu.style.display='none';
                aUl[iNow].style.display='none'
            },500)
        };
        aUl[i].onmouseover= function () {
            clearTimeout(timer);
            iNow=this.index;
            for(var i=0;i<7;i++){
                aUl[i].style.display='none'
            }
            oTwoMenu.style.display='block';
            this.style.display='block'
        };
        aUl[i].onmouseout= function () {
            clearTimeout(timer);
            for(var i=0;i<7;i++){
                aUl[i].style.display='none'
            }
            oTwoMenu.style.display='none';
            this.style.display='none'
        }
    }

    for(var i=7;i<9;i++){
        oA[i].onmouseover=function(){
            this.style.color='#ff6700'
        };
        oA[i].onmouseout=function(){
            this.style.color='black'
        };
    }
    for(var i=0;i<2;i++){
        $('.search-word').on('mouseover','a',function(){
            this.style.color='#ff6700'
        });
        $('.search-word').on('mouseout','a',function(){
            this.style.color='#757575'
        });
    }
    oT1.onmouseover= function () {
        oT1.style.backgroundColor='#ff6700'
    };
    oT1.onmouseout=function(){
        oT1.style.backgroundColor='#fff'
    };

    oT.onfocus=function(){
        oTw.style.display='none';
        oSearch.style.borderColor='#ff6700';
        oT1.style.borderLeftColor='#ff6700';
        oUlx.style.display='block';

    };
    oT.onblur= function () {
        oTw.style.display='block';
        oSearch.style.borderColor='#e0e0e0';
        oT1.style.borderLeftColor='#e0e0e0';
        oUlx.style.display='none';

    };
//header 悬停结束
//Carousel开始
    var oCarousel=document.getElementById('Carousel');
    var aBtn=oCarousel.getElementsByTagName('input');
    var oPrev = oCarousel.getElementsByTagName('div')[0];
    var oNext = oCarousel.getElementsByTagName('div')[1];
    var oImg=oCarousel.getElementsByTagName('img')[0];
    var iNow1=0;

    function tab(){

        for(var i=0;i<aBtn.length;i++){
            aBtn[i].className=''
        }
        aBtn[iNow1].className='on';
        oImg.src='images/'+ iNow1 + '.jpg'
    }

    for(var i=0;i<aBtn.length;i++){
        aBtn[i].index=i;
        aBtn[i].onclick= function () {
            iNow1=this.index;
            tab();
            return false;
        }
    }
    function next(){
        iNow1++;
        if(iNow1==aBtn.length){
            iNow1=0
        }
        tab();
        return false;
    }
    oNext.onclick=next;
    function prev(){
        iNow1--;
        if(iNow1==-1){
            iNow1=aBtn.length-1
        }
        tab();
        return false;
    }
    oPrev.onclick=prev;
    var timer=setInterval(function(){
        next()
    },6000);
    oCarousel.onmouseover= function () {
        clearInterval(timer)
    };
    oCarousel.onmouseout= function () {
        clearInterval(timer);
        timer=setInterval(function () {
            next()
        },6000)
    };
    oPrev.onmouseover= function () {
        oPrev.className='prev show'
    };
    oPrev.onmouseout= function () {
        oPrev.className='prev'
    };
    oNext.onmouseover= function () {
        oNext.className='next show'
    };
    oNext.onmouseout= function () {
        oNext.className='next'
    };
//Carousel结束
//list开始
var oTwoMenu2=document.getElementById('twoMenu2');
var aDiv=oTwoMenu2.getElementsByTagName('div');
var oTopLeft=document.getElementById('top-left');
var aLi=oTopLeft.getElementsByTagName('li');
var aLi2=oTwoMenu2.getElementsByTagName('li');
//var aA1=aLi.getElementsByTagName('a');


    for(var i=0;i<aLi2.length;i++){
    aLi2[i].index=i;
    aLi2[i].onmouseover= function () {
            this.children[0].onmouseover=function(){
                this.style.color='#ff6700';
            };
            this.children[1].onmouseover=function(){
                this.style.color='#fff';
                this.style.background='#ff6700'
        };
    };
        aLi2[i].index=i;
        aLi2[i].onmouseout= function () {
            this.children[0].onmouseout=function(){
                this.style.color='black';
            };
            this.children[1].onmouseout=function(){
                this.style.color='#ff6700';
                this.style.background='#fff'
            };
        };
    }
for(var i=0;i<aLi.length;i++){
    aLi[i].index=i;
    aLi[i].onmouseover= function () {
         var iPo=this.index;
        for(var i=0;i<aLi.length;i++){
            this.style.backgroundColor=''
        }
       this.style.backgroundColor='#ff6700';
       aDiv[iPo].style.display='block'
    };
    aLi[i].onmouseout= function () {
        var iPo=this.index;
        for(var i=0;i<aLi.length;i++){
            this.style.backgroundColor=''
        }
        aDiv[iPo].style.display='none';
        this.style.backgroundColor=''
    };
    aDiv[i].onmouseover=function(){
        //var iPo=this.index;
        this.style.display='block';
       //aLi[iPo].style.backgroundColor='#ff6700';
    };
    aDiv[i].onmouseout=function(){
        //var iPo=this.index;
        this.style.display='none';
       //aLi[iPo].style.backgroundColor='';
    }
}
//list结束
//选项卡1开始
var oButton=document.getElementById('button');
var oBtn1=oButton.getElementsByTagName('a');
var oSb2ul=document.getElementById('sb2ul');
var oUls2=oSb2ul.getElementsByTagName('ul');
//var iNow1=0;

for(var i=0;i<oBtn1.length;i++) {
        oBtn1[i].index=i;

        oBtn1[i].onclick=function(){
            for(var i = 0;i < oBtn1.length;i++){
                oBtn1[i].className='';
                oUls2[i].className='';
            }
            this.className = "on1";
            oUls2[this.index].className = "show1"

        };
}

