"use strict";var g2Top=document.querySelector(".g2-top"),g2Big=document.querySelector(".g2-big"),g2Crs=document.querySelector(".g2-crs"),g2Imgs=document.querySelectorAll(".g2-imgs img"),$g2Up=$(".g2-up"),g2Hit=g2Top.offsetHeight;window.onscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;g2Hit-90<=t&&$g2Up.css({position:"absolute",top:g2Hit-90+"px"}),t<=g2Hit-90&&$g2Up.css({position:"fixed",top:"0px"})};var timer="";function move(){clearInterval(timer),g2Crs.scrollLeft+=5,timer=setInterval(function(){g2Crs.scrollLeft%g2Imgs[0].offsetWidth==0?(clearInterval(timer),g2Crs.scrollLeft==(g2Imgs.length-1)*g2Imgs[0].offsetWidth&&(g2Crs.scrollLeft=0)):g2Crs.scrollLeft+=5},5)}function lbt(){setInterval(function(){console.log(g2Crs.scrollLeft),move()},3500)}lbt();