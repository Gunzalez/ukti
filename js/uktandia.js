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
		
		_adjustAllHeights: function(){
			
			var self = this; // scope
			
			self.$section.each(function(i, obj){			
				self.$section.removeClass('open');	
				$('.detail', $(obj)).css('height', $('.detail', $(obj)).data('height'));								
			});
						
		},		
		
		init: function(){
			
			if(!$('.accordion').length>0){
				return false;
			}			
			
			var self = this; // scope
			
			self._adjustAllHeights();
				
			self.$section.each(function(i, obj){
				
				var links = $('.show-more', $(obj));
				
				links.on('click', function(e){
					
					e.preventDefault();
					
					if(!$(obj).hasClass('open')){
						
						self._adjustAllHeights();
						
						// gets new height to animate to via css
						var el = $(obj).clone().addClass('open');
						$('.detail', el).css({"height":"auto", "width":"620px"});
						el = $('<div class="list" />').append(el);
						el.appendTo("body");
						var newHeight = $('.detail', el).outerHeight();
						el.remove();
						
						// changes css
						$('.detail', $(obj)).css('height',newHeight+'px');
						$(obj).addClass('open');
												
					}
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