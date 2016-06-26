/* ==============================================
    Preloader
=============================================== */ 
$(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow':'visible'});
    });



jQuery(document).ready(function($){

'use strict';

    $(".fancybox").fancybox({
        padding: 0,
        helpers: {
        overlay: {
        locked: false
        }
      }
    });

/* ==============================================
    change language
=============================================== */
    
$("#en").click(function(){
  document.body.className = 'en';
});

$("#de").click(function(){
  document.body.className = 'de';
});
    
$(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scroll-arrow').fadeIn();
        } else {
            $('.scroll-arrow').fadeOut();
        }
    });
    
$('#scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
$('.scroll-arrow').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
            
/* ==============================================
    variable screen height
=============================================== */ 
      function getHeight() {
        var x =  $(window).height()-170 + "px";
        var y =  $(window).height() + "px";
        document.getElementById("header").style.height =x;
        document.getElementById("block").style.height = y;
      }
      window.onload = getHeight;
      window.onresize = getHeight;



 
/* ==============================================
    Contact Form
=============================================== */
$(function () {
    $("#contact .submit-button").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#text").val();
        var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
        if (name == '') {
            $('#name').css({
                'background-color': '#FAFFBD'
            });
        } else {
            if (email == '') {
                $('#email').css({
                    'background-color': '#FAFFBD'
                });
            } else {
                if (text == '') {
                    $('#text').css({
                        'background-color':'#FAFFBD'
                        
                    });
                    
                } else {
                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: dataString,
                        success: function () {
                            $('#form-sent').fadeIn(1000);
                        }
                    });
                }
            }
        }
        return false;
    });
});


// NAVIGATION SLIDE IN EFFECT
    
if ( $(window).width() <= 640){
        $('header').removeClass('noBackground').addClass('blackBackground');
    } else if($(window).width() > 640){

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            //header.removeClass('noBackground').addClass('blackBackground').fadeIn("slow");
            $('header').slideDown(300).addClass('blackBackground');
        } else {
            //header.removeClass('blackBackground').fadeOut("slow").addClass('noBackground');
            $('header').slideUp(300);
       }
    });
        }


/* ==============================================
  PROJECTS SECTION
=============================================== */
    
    var filterList = {
    
        init: function () {
        
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                //onMixEnd: filterList.hoverEffect()
            });             
        
        },
        
        hoverEffect: function () {
        
            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
                function () {
                    $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');             
                },
                function () {
                    $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');                               
                }       
            );              
        
        }

    };
    
    // Run the show!
    filterList.init();  

/* ==============================================
  OUR CLIENTS
=============================================== */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
    }
  }
});

/* ==============================================
	Video Player
=============================================== */	
$(function(){
    $(".player").mb_YTPlayer();
  });



/*End ready function*/
});


/* ==============================================
  Parallax Sections
=============================================== */
( function ( $ ) {
'use strict';
$(document).ready(function(){
$(window).bind('load', function () {
    parallaxInit();             
  });
  function parallaxInit() {
    testMobile = isMobile.any();
    if (testMobile == null)
    {
  $('.responsive-parallax').parallax("50%", 0.4);
    }
  } 
  parallaxInit();  
}); 
//Mobile Detect
var testMobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {     
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
}( jQuery ));



