/* 
AUTHOR: Segun Konbire
Date: 08.03.2014
*/

(function ($) {
	
	var uktandia = {}
	
	uktandia.carousel = {
		
		isBusy: false,
		$html : $('#carousel'),
		$slides : $('.slides', this.$html),
		$buttons: $('.controls a', this.$html),
		
		init: function(){
			
			var self = this; // scope			
			
			self.$buttons.on('click', function(e){
				
				e.preventDefault(); // prevent default action
				
				if(!self.isBusy){		// check if busy
				
					if(!$(this).hasClass('active')){	// check if already active
						
						// change button states
						self.$buttons.removeClass('active');
						$(this).addClass('active');
						
						// adjust background css
						var index = self.$buttons.index($(this));
						self.$html.removeAttr('class');
						self.$html.addClass('bg-pos-'+index);
						
						// adjust slides css
						var newTop = $(this).attr('data-slide-pos');
						self.$slides.css('margin-top', newTop+'px');
						
					}
				}
			});
			
		}
	} // carousel ends */	
	
	$( document ).ready(function() {
		uktandia.carousel.init();	// initiate carousel
	});

})(jQuery);