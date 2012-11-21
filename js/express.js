(function($) {
	$(document).ready(function() {




	    /*************************  Dynamic sticky nav   *********************************/


		 // fix sub nav on scroll
	    var $win = $(window),
	    	$nav = $('.navbar'),
	    	navTop = $('.navbar').length && $('.navbar').offset().top;

	    $nav.on('show', function(){
	    	if (!$(this).is('.navbar-fixed-top')) {
				$win.scrollTop(navTop);
			};
	    });

    	$win.on('scroll', processScroll);
    	processScroll();

	    function processScroll() {
	      var scrollTop = $win.scrollTop();
	      if (scrollTop >= navTop && !$nav.is('.navbar-fixed-top')) {
	        $nav.addClass('navbar-fixed-top');
	        $('#layout').addClass('fixed-padding');
	      } else if (scrollTop < navTop && $nav.is('.navbar-fixed-top')) {
	        $nav.removeClass('navbar-fixed-top');
	        $('#layout').removeClass('fixed-padding');
	      }
	    }
	    /*************************/

		$('.carousel').each(function(){
			if ($(this).find('.carousel-inner > div').length > 1) {
				$(this).carousel({
					interval: 8000,
					pause: ""
				});

				$(this).on('click','#pause .btn',function() {
					if ($(this).closest('.carousel').hasClass('play')) {
						$(this).closest('.carousel').carousel('cycle').removeClass('play');
						$(this).find('.icon').removeClass('icon-play-js').html('&#xf04c;');
					} else {
						$(this).closest('.carousel').carousel('pause').addClass('play');
						$(this).find('.icon').addClass('icon-play-js').html('&#xf04b;');
					}
				});
			}
		});


		$('.navbar a .showChildren').click(function(e){
			e.preventDefault();
			var oldOpen = $('.navbar .open');		
			$(this).closest('li').addClass('open');
			oldOpen.removeClass('open');
			return false;
		});

		$('form fieldset > div.field:odd').addClass("odd");

		$(".page-toggle .button").click(function(){
			$(this).toggleClass("open");
			$(this).closest('li').toggleClass("open");
		});
		
	})
})(jQuery);