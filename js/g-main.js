// ---------------------------------郭------------------------------------





// ---------------------------------陈------------------------------------
//头部
$('.c-header-nav-list').mouseenter(function(){
    $('.c-header-nav-list .c-info').css('display','block');
    $('.c-top-mask').css('display','block');
});
$('.c-top-mask').mouseleave(function(){
    $('.c-header-nav-list .c-info').css('display','none');
    $('.c-top-mask').css('display','none');
})
$('.c-header-nav-list').on('mouseenter','.c-info a',function(e){
    e.target.style.color='#c9c06c';
})
$('.c-header-nav-list').on('mouseleave','.c-info a',function(e){
    $('.c-header-nav-list .c-info a').css('color','#e1e1e1');
})

//轮播
var box=document.querySelector('.c-box');
var imgs=document.querySelectorAll('.c-banner .c-images img');
var lis=document.querySelectorAll('.c-number li');
var imgIndex=0;//图片的初始下标
var numIndex=0;
var timer1,timer2;
var imgWidth=imgs[0].offsetWidth;
box.scrollLeft=0;
function move(){
    var minStep=0;
    var maxStep=20;
    var start=box.scrollLeft;
    var end=imgWidth*imgIndex;
    var everyStep=(end-start)/maxStep;
    clearInterval(timer1);
    timer1=setInterval(function(){
        minStep++;
        if(minStep>=maxStep){
            clearInterval(timer1);
        }
        start=start+everyStep;
        box.scrollLeft=start;
    },20)
}
//自动播放
function autoMove(){
    clearInterval(timer2);
    timer2=setInterval(function(){
        imgIndex++;
        if(imgIndex>=imgs.length){
            imgIndex=0;
            move();
        }
        move();
        lis[numIndex].className='';
        numIndex++;
        if(numIndex>=lis.length){
            numIndex=0;
        }
        lis[numIndex].className='c-active';
    },3000)
}
autoMove();

//数字控制
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmouseenter=function(){
        clearInterval(timer2);
        lis[numIndex].className='';
        numIndex=this.index;
        lis[numIndex].className='c-active';
        imgIndex=numIndex;
        move();
        autoMove();
    }
}

//tab
var $c_json;
$.ajax({
    url:'c-main-tab.json',
    type:'get',
    dataType:'json',
    cache:false,
    async:false,
    success:function(json){
        $c_json=json;
        // console.log($json);  
    },
    error:function(){
        console.log(123);
        
    }
})
$('.c-news-tab-content').html(`<li class='c-news-tab-content-title1'>${$c_json[0].title1}</li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[0].title2}</a><i>12-20</i></li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[0].title3}</a><i>12-20</i></li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[0].title4}</a><i>12-20</i></li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[0].title5}</a><i>12-20</i></li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[0].title6}</a><i>12-20</i></li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[0].title7}</a><i>12-20</i></li>`
    )
var c_index=0;
$('.c-news-tab-title').mouseenter(function(){
    c_index=$(this).index();
    $(this).find('.c-line').addClass('c-show').parent().siblings().find('p').removeClass('c-show');
    $(this).addClass('c-selected').siblings().removeClass('c-selected');
    $('.c-news-tab-content').html(`<li class='c-news-tab-content-title1'>${$c_json[c_index].title1}</li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[c_index].title2}</a><i>12-20</i></li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[c_index].title3}</a><i>12-20</i></li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[c_index].title4}</a><i>12-20</i></li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[c_index].title5}</a><i>12-20</i></li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[c_index].title6}</a><i>12-20</i></li>
        <li class='c-news-tab-content-title'><span>公告</span><a class=''>${$c_json[c_index].title7}</a><i>12-20</i></li>`
    )
})

//热门活动
//tab
var $c_json2;
$.ajax({
    url:'c-hot-tab.json',
    type:'get',
    dataType:'json',
    cache:false,
    async:false,
    success:function(json){
        $c_json2=json;  
    },
    error:function(){
        console.log(123);
        
    }
})
$('.c-hot-tab-content-list').html(`<li class='c-hot-tab-content-li'>
                                    <img src=${$c_json2[0][0].imgUrl} class='c-hot-tab-img'>
                                    <p class='c-hot-tab-content-title'>${$c_json2[0][0].title}</p>
                                    <p class='c-hot-tab-content-time'>${$c_json2[0][0].time}</p>
                                    <div class='c-hot-tab-mask'></div>
                                    <div class='c-hot-tab-li-hover'>
                                        <h3 class='c-hot-tab-li-hover-title'>糖果大战2019</h3>
                                        <p class='c-hot-tab-li-hover-detail'>限定皮肤回馈,无限火力归来</p>
                                        <p class='c-hot-tab-li-hover-time'>开启时间:2019-10-18</p>
                                    </div>
                                    </li>
                                    <li class='c-hot-tab-content-li'>
                                    <img src=${$c_json2[0][1].imgUrl} class='c-hot-tab-img'>
                                    <p class='c-hot-tab-content-title'> ${$c_json2[0][1].title}</p>
                                    <p class='c-hot-tab-content-time'> ${$c_json2[0][1].time}</p>
                                    <div class='c-hot-tab-mask'></div>
                                    <div class='c-hot-tab-li-hover'>
                                        <h3 class='c-hot-tab-li-hover-title'>糖果大战2019</h3>
                                        <p class='c-hot-tab-li-hover-detail'>限定皮肤回馈,无限火力归来</p>
                                        <p class='c-hot-tab-li-hover-time'>开启时间:2019-10-18</p>
                                    </div>
                                    </li>
                                    <li class='c-hot-tab-content-li'>
                                    <img src=${$c_json2[0][2].imgUrl} class='c-hot-tab-img'>
                                    <p class='c-hot-tab-content-title'> ${$c_json2[0][2].title}</p>
                                    <p class='c-hot-tab-content-time'> ${$c_json2[0][2].time}</p>
                                    <div class='c-hot-tab-mask'></div>
                                    <div class='c-hot-tab-li-hover'>
                                        <h3 class='c-hot-tab-li-hover-title'>糖果大战2019</h3>
                                        <p class='c-hot-tab-li-hover-detail'>限定皮肤回馈,无限火力归来</p>
                                        <p class='c-hot-tab-li-hover-time'>开启时间:2019-10-18</p>
                                    </div>
                                    </li>
                                    <li class='c-hot-tab-content-li'>
                                    <img src=${$c_json2[0][3].imgUrl} class='c-hot-tab-img'>
                                    <p class='c-hot-tab-content-title'> ${$c_json2[0][3].title}</p>
                                    <p class='c-hot-tab-content-time'> ${$c_json2[0][3].time}</p>
                                    <div class='c-hot-tab-mask'></div>
                                    <div class='c-hot-tab-li-hover'>
                                        <h3 class='c-hot-tab-li-hover-title'>糖果大战2019</h3>
                                        <p class='c-hot-tab-li-hover-detail'>限定皮肤回馈,无限火力归来</p>
                                        <p class='c-hot-tab-li-hover-time'>开启时间:2019-10-18</p>
                                    </div>
                                    </li>`
                                )
var c_index2=0;
$('.c-hot-tab-title').mouseenter(function(){
    c_index2=$(this).index();
    $(this).find('.c-hot-line').addClass('c-hot-show').parent().siblings().find('p').removeClass('c-hot-show');
    $(this).addClass('c-hot-selected').siblings().removeClass('c-hot-selected');
    $('.c-hot-tab-content-list').html(`<li class='c-hot-tab-content-li'>
                                        <img src=${$c_json2[c_index2][0].imgUrl} class='c-hot-tab-img'>
                                        <p class='c-hot-tab-content-title'>${$c_json2[c_index2][0].title}</p>
                                        <p class='c-hot-tab-content-time'>${$c_json2[c_index2][0].time}</p>
                                        <div class='c-hot-tab-mask'></div>
                                        <div class='c-hot-tab-li-hover'>
                                            <h3 class='c-hot-tab-li-hover-title'>糖果大战2019</h3>
                                            <p class='c-hot-tab-li-hover-detail'>限定皮肤回馈,无限火力归来</p>
                                            <p class='c-hot-tab-li-hover-time'>开启时间:2019-10-18</p>
                                        </div>
                                        </li>
                                        <li class='c-hot-tab-content-li'>
                                        <img src=${$c_json2[c_index2][1].imgUrl} class='c-hot-tab-img'>
                                        <p class='c-hot-tab-content-title'> ${$c_json2[c_index2][1].title}</p>
                                        <p class='c-hot-tab-content-time'> ${$c_json2[c_index2][1].time}</p>
                                        <div class='c-hot-tab-mask'></div>
                                        <div class='c-hot-tab-li-hover'>
                                            <h3 class='c-hot-tab-li-hover-title'>糖果大战2019</h3>
                                            <p class='c-hot-tab-li-hover-detail'>限定皮肤回馈,无限火力归来</p>
                                            <p class='c-hot-tab-li-hover-time'>开启时间:2019-10-18</p>
                                        </div>
                                        </li>
                                        <li class='c-hot-tab-content-li'>
                                        <img src=${$c_json2[c_index2][2].imgUrl} class='c-hot-tab-img'>
                                        <p class='c-hot-tab-content-title'> ${$c_json2[c_index2][2].title}</p>
                                        <p class='c-hot-tab-content-time'> ${$c_json2[c_index2][2].time}</p>
                                        <div class='c-hot-tab-mask'></div>
                                        <div class='c-hot-tab-li-hover'>
                                            <h3 class='c-hot-tab-li-hover-title'>糖果大战2019</h3>
                                            <p class='c-hot-tab-li-hover-detail'>限定皮肤回馈,无限火力归来</p>
                                            <p class='c-hot-tab-li-hover-time'>开启时间:2019-10-18</p>
                                        </div>
                                        </li>
                                        <li class='c-hot-tab-content-li'>
                                        <img src=${$c_json2[c_index2][3].imgUrl} class='c-hot-tab-img'>
                                        <p class='c-hot-tab-content-title'> ${$c_json2[c_index2][3].title}</p>
                                        <p class='c-hot-tab-content-time'> ${$c_json2[c_index2][3].time}</p>
                                        <div class='c-hot-tab-mask'></div>
                                        <div class='c-hot-tab-li-hover'>
                                            <h3 class='c-hot-tab-li-hover-title'>糖果大战2019</h3>
                                            <p class='c-hot-tab-li-hover-detail'>限定皮肤回馈,无限火力归来</p>
                                            <p class='c-hot-tab-li-hover-time'>开启时间:2019-10-18</p>
                                        </div>
                                        </li>`
                                    )
})
$('.c-hot-tab-content-list').on('mouseenter','.c-hot-tab-content-li',function(){
    // $(this).find('.c-hot-tab-mask').css('display','block');
    // $(this).css('top','-10px');
    // $(this).find('.c-hot-tab-li-hover').css('display','block');
    $(this).find('.c-hot-tab-mask').show();
    $(this).stop().animate({
        top:-10
    },200)
    $(this).find('.c-hot-tab-li-hover').show();
})
$('.c-hot-tab-content-list').on('mouseleave','.c-hot-tab-content-li',function(){
    // $(this).find('.c-hot-tab-mask').css('display','none');
    // $(this).css('top',0);
    // $(this).find('.c-hot-tab-li-hover').css('display','none');
    $(this).find('.c-hot-tab-mask').hide();
    $(this).stop().animate({
        top:-0
    },200)
    $(this).find('.c-hot-tab-li-hover').hide();
})

//新英雄新皮肤
$('.c-newHero').mouseenter(function(){
    $('.c-new-mask').show().stop().animate({
        top:0
    },50)
    $('.c-new-li-hover').show().stop().animate({
        top:6
    },50)
})
$('.c-newHero').mouseleave(function(){
    $('.c-new-mask').hide().css('top','10px');
    $('.c-new-li-hover').hide().css('top','16px');
})

//劫
$('.c-jie').mouseenter(function(){
    $('.c-jie-2').show();
})
$('.c-jie').mouseleave(function(){
    $('.c-jie-2').hide();
})

//月亮男孩
$('.c-moonBoy').mouseenter(function(){
    $(this).find('.c-moonBoy-mask').show();
    $(this).find('.c-moonBoy-hover').show();
})
$('.c-moonBoy').mouseleave(function(){
    $(this).find('.c-moonBoy-mask').hide();
    $(this).find('.c-moonBoy-hover').hide();
})

//slide
$('.c-newSkin').mouseenter(function(){
    $('.c-slide').stop(true,true).slideDown();
})
$('.c-newSkin').mouseleave(function(){
    $('.c-slide').stop(true,true).slideUp();
})

// ---------------------------------吴------------------------------------