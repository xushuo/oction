/**
 * Created by Administrator on 2017/5/25.
 */
$(function(){
  var $toggle = $(".sidebar-toggle");
  var $body = $("body");
  $toggle.click(function(){
    if($(window).width()>=768){
      $body.toggleClass("sidebar-collapse");
    }else {
      $body.toggleClass("sidebar-open");
    }
  })
})
