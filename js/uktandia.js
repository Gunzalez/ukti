/* 
AUTHOR: Segun Konbire
Date: 08.03.2014
*/

(function ($) {
	
	var uktandia = {}
	
	uktandia.carousel = {
		
		/* properties */		
		timer: '',
		delay: 7000,
		$html : $('#carousel'),
		$slides : $('.slides', this.$html),
		$buttons: $('.controls a', this.$html),		
		
		/* methods */		
		_goToSlideForThisButton: function(button){
			
			var self = this;
			
			// change button states
			self.$buttons.removeClass('active');
			$(button).addClass('active');
			
			// adjust background css
			var index = self.$buttons.index($(button));
			self.$html.removeAttr('class');
			self.$html.addClass('bg-pos-'+index);
			
			// adjust slides css
			var newTop = $(button).attr('data-slide-pos');
			self.$slides.css('margin-top', newTop+'px');
		
		},
		
		init: function(){
			
			var self = this; // scope			
			
			// sets up button clicks
			self.$buttons.on('click', function(e){
				
				e.preventDefault(); // prevent default action
				
				if(!$(this).hasClass('active')){	// check if already active
					
					self._goToSlideForThisButton(this);
					
					// disable auto
					clearTimeout(self.timer);					
				}
				
			});		
		
			// sets up auto
			self.timer = setInterval(function(){
										
					var curIndex = self.$buttons.index($('.active'));
										
					curIndex++;
					var newIndex = curIndex > 2 ? 0 : curIndex;
					
					self._goToSlideForThisButton(self.$buttons.eq(newIndex));
					
			}, self.delay );
					
		}
		
	} /* carousel end */	
	
	$( document ).ready(function() {
		
		uktandia.carousel.init();	// initiate carousel
		
	});

})(jQuery);