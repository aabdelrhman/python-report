$(document).ready(function(){
  $('.nav-toggle-btn ').click(function(){
    $('nav').toggleClass('animatedMenu');
  });
    $('nav ul li a').click(function(){
    $('nav').toggleClass('animatedMenu');
  });
  $('.container').on('click',function(){
    $('nav').removeClass('animatedMenu');
  });
});
$(document).ready(function(){
    $(".content").show(3000);
     function anim(){
         $(".content").animate({left: '250px'});
     };
    setTimeout(anim(),100)
});
