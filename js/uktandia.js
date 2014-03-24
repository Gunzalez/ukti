/* 
AUTHOR: Segun Konbire
Date: 08.03.2014
*/

(function ($) {
	
	var uktandia = {}
	
	uktandia.carousel = {
		
		/* properties */		
		timer: '',
		delay: 12000,
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
			
			// adjust slides position css
			var newTop = $(button).attr('data-slide-pos');
			self.$slides.css('margin-top', newTop+'px');
		
		},
		
		init: function(){
			
			if(!$('#carousel').length>0){
				return false;
			}
			
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
	
	
	uktandia.accordion = {
		
		$section: $('.accordion'),		
		
		init: function(){
			
			if(!$('.accordion').length>0){
				return false;
			}			
			
			var self = this; // scope		
			
			self.$section.each(function(i, obj){
				
				var heading = $('.heading', $(obj));
				
				heading.on('click', function(){
					
					if(!$(obj).hasClass('open')){	
					
						$(obj).siblings('.accordion').removeClass('open').find('.detail').slideUp(function(){
							
							$(obj).addClass('open').find('.detail').slideDown();	
							
						});						
												
					} else {
										
						$(obj).find('.detail').slideUp(function(){
							
							$(obj).removeClass('open');
							
						});
					}
					
				});
				
			});	
			
			self.$section.each(function(i, obj){
				
				var clipLinks = $('.show-more', $(obj));
				
				clipLinks.on('click', function(e){
									
					e.preventDefault();
										
				});
								
			});
				
			self.$section.each(function(i, obj){
				
				var clipLinks = $('.clip .show-more', $(obj));
				
				clipLinks.on('click', function(){
										
					$(this).parents('.accordion').find('.heading').trigger('click');
					
				});
								
			});
			
		}	
	}
	
	uktandia.init = function(){
		uktandia.carousel.init();
		uktandia.accordion.init();		
	}	
	
	$( document ).ready(function() {		
		uktandia.init();		
	});

})(jQuery);