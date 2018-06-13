$(document).ready(function(){


//home : swiper
//輪播
$(function(){
  var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    speed: 600,
    autoplay: 5000,
    autoplayDisableOnInteraction: false //Set to false and autoplay will not be disabled after user interactions
  })
  $('.arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })
  $('.arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  })
})




//features : composition
$(function(){
    $('.main-features .composition .graph .dot').mouseover(function(){
        $(this).parent().find('.text').fadeIn(200);
        //$(this).parent().find('.text').fadeIn({queue: false, duration: '100'});
        //$(this).parent().find('.text').animate({ 'margin-top': '0px', duration: '100'});
    });
    $('.main-features .composition .graph .dot').mouseleave(function(){
        $(this).parent().find('.text').fadeOut(200);
        //$(this).parent().find('.text').fadeOut({queue: false, duration: '100'});
        //$(this).parent().find('.text').animate({ 'margin-top': '20px', duration: '100'});
    });
});


//features : storyboard
$(function(){
    //目錄
    $('.main-features .script .nav li').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    $('#script-btn-1').click(function () {
        $('#storyboard-1').siblings().slideUp();
        $('#storyboard-1').slideDown();
    });
    $('#script-btn-2').click(function () {
        $('#storyboard-2').siblings().slideUp();
        $('#storyboard-2').slideDown();
    });
    $('#script-btn-3').click(function () {
        $('#storyboard-3').siblings().slideUp();
        $('#storyboard-3').slideDown();
    });
    $('#script-btn-4').click(function () {
        $('#storyboard-4').siblings().slideUp();
        $('#storyboard-4').slideDown();
    });
    $('#script-btn-5').click(function () {
        $('#storyboard-5').siblings().slideUp();
        $('#storyboard-5').slideDown();
    });
    $('#script-btn-6').click(function () {
        $('#storyboard-6').siblings().slideUp();
        $('#storyboard-6').slideDown();
    });
    $('#script-btn-7').click(function () {
        $('#storyboard-7').siblings().slideUp();
        $('#storyboard-7').slideDown();
    });
});

//features : video
$(function(){
    //目錄
    $('.main-features .video .trending .content ul li a').click(function () {
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');
    });
    $('#btn-tag-music').click(function () {
        $('#video-lineup-music').siblings().hide();
        $('#video-lineup-music').fadeIn();
    });
    $('#btn-tag-business').click(function () {
        $('#video-lineup-business').siblings().hide();
        $('#video-lineup-business').fadeIn();
    });
    $('#btn-tag-product').click(function () {
        $('#video-lineup-product').siblings().hide();
        $('#video-lineup-product').fadeIn();
    });
    $('#btn-tag-travel').click(function () {
        $('#video-lineup-travel').siblings().hide();
        $('#video-lineup-travel').fadeIn();
    });
    $('#btn-tag-branding').click(function () {
        $('#video-lineup-branding').siblings().hide();
        $('#video-lineup-branding').fadeIn();
    });
});


//about : timeline team
$(function(){
    $('.main-about .timeline .card-1 .team a').mouseover(function(){
        $(this).parent().find('.text').fadeIn({queue: false, duration: '100'});
        $(this).parent().find('.text').animate({ 'top': '55px', duration: '100'});
    });
    $('.main-about .timeline .card-1 .team a').mouseleave(function(){
        $(this).parent().find('.text').fadeOut({queue: false, duration: '100'});
        $(this).parent().find('.text').animate({ 'top': '80px', 'width': '150', duration: '100'});
    });
});



//about : video
//set video size to 16:9
var k = $('.main-about .trailer iframe').width();
var p = k * 0.5625;
$('.main-about .trailer iframe').css('height',p);

$( window ).resize(function() {
    var k = $('.main-about .trailer iframe').width();
    var p = k * 0.5625;
    $('.main-about .trailer iframe').css('height',p);
});




//contact : active map
//避免滾動滑鼠滾輪時觸發地圖縮放，所以使用者點一下地圖之後才啟用Google地圖的功能
$(function(){
    $('.googlemap').click(function () {
        $('.googlemap iframe').css("pointer-events", "auto");
    });
});





//general : pop video size and home cover size

var h = $(window).width();
var v = $(window).height();
var hh = h * 0.5625;
var pop = h * 0.8 * 0.5625;
var pop1 = (v - pop) * 0.5;

$('#pop-video-container').css('height',pop); //16:9
$('#pop-video-container').css('margin-top',pop1); //上下置中
$('#pop-video-container iframe').css('height',pop); //16:9

if (/Mobi/.test(navigator.userAgent)) {
    $('#pop-video-container iframe').css('height',360); // fix bug : video height in mobiles
}

if( hh > v ){ //視窗大於16:9
    $('.header-home').css('min-height',v);
}else if( hh <= v && h > 750 ){ //視窗小於16:9
    $('.header-home').css('min-height','auto');
}else if( h <= 750 && v >= 900){ //手機版直式
    $('.header-home').css('height',v);
}else if( h <= 750 && v < 900){ //手機版橫式
    $('.header-home').css('height','auto');
}

$( window ).resize(function() {
var h = $(window).width();
var v = $(window).height();
var hh = h * 0.5625;  //16:9
var pop = h * 0.8 * 0.5625;
var pop1 = (v - pop) * 0.5;

$('#pop-video-container').css('height',pop); //16:9
$('#pop-video-container').css('margin-top',pop1); //上下置中
$('#pop-video-container iframe').css('height',pop); //16:9

if (/Mobi/.test(navigator.userAgent)) {
    $('#pop-video-container iframe').css('height',360); // fix bug : video height in mobiles
}

if( hh > v ){ //視窗大於16:9
    $('.header-home').css('min-height',v);
}else if( hh <= v && h > 750 ){ //視窗小於16:9
    $('.header-home').css('min-height','auto');
}else if( h <= 750 && v >= 900){ //手機版直式
    $('.header-home').css('height',v);
}else if( h <= 750 && v < 900){ //手機版橫式
    $('.header-home').css('height','auto');
}

});






//general : popout video

$('.btn-pop-video').click( function(e){
    e.preventDefault(); //取消預設動作
    var URL = $(this).attr('data-youtube-id'); //獲取 a 中的 custom "data-youtube-id" attribute
    var videoLink = 'https://www.youtube.com/embed/' + URL + '?rel=0&amp;wmode=opaque&amp;autoplay=1&amp;showinfo=0&amp;modestbranding=1'; //獲取包含新youtube ID的影片連結
     
    $('.pop-video').fadeIn();
    $('#pop-video-container iframe').attr("src",videoLink); //將影片連結加到 iframe 中
     
    return false;
});

var video = $("#pop-video-container iframe").attr("src");

$('.btn-close-video').click(function(){
    $("#pop-video-container iframe").attr("src",""); //remove the video link 避免背景播放
    $("#pop-video-container iframe").attr("src",video); //add back the video link
    $('.pop-video').fadeOut();
     
    return false;
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { $('.btn-close-video').click(); }   // close video with keyboard escape
});




//general : burger menu
//控制手機版選單
$(function(){
    $('.burger-on').click(function(){
        $(this).hide();
        $('.burger-off').show();
        $('.main-menu').animate({
            left: 0
        }, 400);
    });
    $('.burger-off').click(function(){
        $(this).hide();
        $('.burger-on').show();
        $('.main-menu').animate({
            left: -1000
        }, 400);
    });
});


//general : sticky-menu
//向下捲動後選單黏住
$(window).load(function(){
    $(window).scroll(function(){
        var m = $(window).scrollTop();
                            
        if(m > 80){
            $(".sticky-menu").css('top', '0px');
        }else{
            $(".sticky-menu").css('top', '-100px');
        }
    });
});



//general : back to top
//回到頁面頂端
$(function(){
    $('.backtotop').click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
                scrollTop: 0
        }, 1200);
    });

});







//service : animation

/*
$(window).load(function(){
    $(window).scroll(function(){
        var a = $(window).scrollTop();
        var b = $('.header').height();
        var c = $('.service-content').height();
        var d = b+c;
                            
        if(a > d){
            $(".package").addClass('triggeredCSS3');
        }else{
            $(".package").removeClass('triggeredCSS3');
        }
    });
});
*/









//Scroll indicate
/*
$(window).load(function(){
    $(window).scroll(function(){
        var a = $(window).scrollTop();
                            
        if(a > 60){
            $(".header").addClass('sticky');
        }else{
            $(".header").removeClass('sticky');
        }
    });
});
*/



//Scroll indicate (home)
/*
$(window).load(function(){
    $(window).scroll(function(){
        var b = $(window).scrollTop();
        var c = $('.banner').height();
        var e = $('.home-intro').height();
                            
        if( b > 0 && b < (c-20) ){
            $(".sidenav-home-1").siblings().removeClass('active');
            $(".sidenav-home-1").addClass('active');
        }else if( b > (c-20) && b < (c+e-20) ){
            $(".sidenav-home-2").siblings().removeClass('active');
            $(".sidenav-home-2").addClass('active');
        }else if( b > (c+e-20) ){
            $(".sidenav-home-3").siblings().removeClass('active');
            $(".sidenav-home-3").addClass('active');
        }else{
        }
    });
});
*/






});//end ready









