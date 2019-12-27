// const imagemin = require("gulp-imagemin");

var g2Top = document.querySelector('.g2-top');
var g2Big = document.querySelector('.g2-big');
var g2Crs = document.querySelector('.g2-crs');
var g2Imgs = document.querySelectorAll('.g2-imgs img')
var $g2Up = $('.g2-up')
var g2Hit = g2Top.offsetHeight
window.onscroll = function(){
    var top = document.documentElement.scrollTop || document.body.scrollTop
    if(top >= g2Hit-90){
        $g2Up.css({'position':'absolute','top':g2Hit-90+'px'})
    };
    if(top <= g2Hit-90){
        $g2Up.css({'position':'fixed','top':'0px'})
    }
}
var timer = '';
var lb = '';
var i = 1
function move(){
    clearInterval(timer);
    g2Crs.scrollLeft += 5;
    
    timer = setInterval(function(){
        var speed = 5;
        if(g2Crs.scrollLeft%g2Imgs[0].offsetWidth == 0){
            clearInterval(timer);
            // g2Crs.scrollLeft = 640;
            if(g2Crs.scrollLeft == (g2Imgs.length-1)*g2Imgs[0].offsetWidth){
                g2Crs.scrollLeft = 0
            }
            
            i = i + 1;
        }else{
            g2Crs.scrollLeft += speed;
            
        }
    },5)
}
function lbt(){
    setInterval(function(){
        move()
    },3500)
}
lbt()