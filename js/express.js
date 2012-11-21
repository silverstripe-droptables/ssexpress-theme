(function($) {
	$(document).ready(function() {

		/* Navigation */
		var $win = $(window),
			$nav = $('.navbar'),
			navTop = $('.navbar').length && $('.navbar').offset().top;

		// If the non-fixed navigation is expanded, then scroll the window to the top of the menu.
		// If it's fixed then it's at the top of the screen anyway.
		$nav.on('show', function(){
			if (!$(this).is('.navbar-fixed-top')) {
				$win.scrollTop(navTop);
			};
		});

		// Fix the navigation if the user scrolls past it.
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
		$win.on('scroll', processScroll);
		processScroll();

		// Shift the open class to where we need it.
		$('.navbar a .showChildren').click(function(e){
			e.preventDefault();
			var oldOpen = $('.navbar .open');		
			$(this).closest('li').addClass('open');
			oldOpen.removeClass('open');
			return false;
		});


		/* Carousel */
		// Set up carousel buttons and behaviours
		$('.carousel').each(function(){
			if ($(this).find('.carousel-inner > div').length > 1) {
				$(this).carousel({
					interval: 8000,
					pause: ''
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


		// Fallback classes for old browsers
		$('form fieldset > div.field:odd').addClass("odd");


		// Shift the open class to where we need it.
		$(".page-toggle .button").click(function(){
			$(this).toggleClass("open");
			$(this).closest('li').toggleClass("open");
		});
		
	})
})(jQuery);