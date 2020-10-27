$(document).ready(function(){
  $('.nav-toggle-btn ').click(function(){
    $('nav').toggleClass('animatedMenu');
  });
  $('nav ul a').on('click',function(){
    $('nav').removeClass('animatedMenu');
  });
    $('.container').on('click',function(){
    $('nav').removeClass('animatedMenu');
  });
    $('header').on('click',function(){
    $('nav').removeClass('animatedMenu');
  });
    function myFunction() {
        $(".content").show(1000);
    };
    setTimeout(myFunction, 200);
    });
    
$(document).ready(function() {
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = $("#intro").position();
  var h2 = $("#importance").position();
  var h3 = $("#why").position();
  var h4 = $("#uses").position();
  var h5 = $("#concl").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 700);
    return false;

  }); // left menu link2 click() scroll END

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 700);
    return false;

  }); // left menu link2 click() scroll END

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 700);
    return false;

  }); // left menu link3 click() scroll END

    $('.link4').click(function() {
    $('html, body').animate({
      scrollTop: h4.top
    }, 700);
    return false;

  }); // left menu link3 click() scroll END
    
    $('.link5').click(function() {
    $('html, body').animate({
      scrollTop: h5.top
    }, 700);
    return false;

  }); // left menu link3 click() scroll END
}); // ready() END