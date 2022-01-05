/**
 * Totsys Genesis
 *
 * @category    Front end
 * @package     Main js
 * @copyright   Copyright (c) 2021 Totsys. (http://www.TotsysGenesis.com)
 * @author      Totsys team
 */


var $ = jQuery.noConflict();


$(document).ready(function(){
     /*owl carousel*/
     var owl = $('.owl-carousel');
     owl.owlCarousel({
         items:6,
         dots: false,
         nav:true,
         navText: ["<img src='../images/Logos/Arrow-left.png'>","<img src='../Images/Logos/Arrow-right.png'>"],
         rtl: false,
         loop:true,
         margin:20,
         autoplay:true,
         autoplayTimeout:1500,
         animateOut: 'fadeOut',
         autoplayHoverPause:false,
         center:true,
            // smartSpeed:1000,
   
     responsive: {
         0: {
           items: 1
         },
         400: {
           items: 2
         },
         740: {
           items: 3
         },
         940: {
           items: 6
         }
       },
 
 
 
 
       
     });
    
   
     audio.volume = 0.04;
     $("button").click(function(){
      var audio = $("#audio")[0];
      
      if (audio.paused) {
          audio.play();
          audio.volume = 0.02;
      }  else {
          audio.pause();
          audio.volume = 0.02;
        
      }

  });
  
});
