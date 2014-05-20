$(function() {

  'use strict';

  var $navBar = $('nav');

  // If touchscreen listen for touch, if not listen for click
  var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

  // Toggle the nav menu list when the user clicks the nav menu button
  $('.menu').on(hitEvent, function () {
    $navBar.toggleClass('nav-show');
  });

  $('.content').on(hitEvent, function(event) {
    if ($navBar.hasClass('nav-show')) {
      $navBar.removeClass('nav-show');
    }
  });

  window.onscroll = function(e) {
    if(window.pageYOffset < 325) {
      $('.follow_block').removeClass('visible');
    }
    if(window.pageYOffset >= 325) {
      $('.follow_block').addClass('visible');
    }

    var $bgobj = $('.bg');
    var yPos = -($(window).scrollTop() / 5); 
		var coords = '50% '+ yPos + 'px';
		console.log(coords);
		$bgobj.css({ backgroundPosition: coords });
  };

});
