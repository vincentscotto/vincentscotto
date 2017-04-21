$(function(){
  /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
  ---------------------------------------------------------------------------------*/ 
  $('.mobile-nav').singlePageNav({
      offset: $(".mobile-nav").height(),
      filter: ':not(.external)',
      updateHash: false
  });

  /* start navigation top js */
  $(window).scroll(function(){
      if($(this).scrollTop()>58){
          $(".mobile-nav").addClass("sticky");
      }
      else{
          $(".mobile-nav").removeClass("sticky");
      }
  });
  
  /* Hide mobile menu after clicking on a link
  -----------------------------------------------*/
  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });
  /* end navigation top js */

  $('body').bind('touchstart', function() {});

});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */
