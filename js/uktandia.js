/* 
AUTHOR: Segun Konbire
Date: 08.03.2014
*/

(function ($, window, document) {
	
	window.uktandia = {}
	
	uktandia.carousel = {
		
		/* properties */		
		timer: '',
		delay: 12000,
		$html : $('#carousel'),
		$buttons: $('.controls a', this.$html),
		
		updateControls: function(index){
			this.$buttons.removeClass('active')
			this.$buttons.eq(index).addClass('active');
		},
		
		init: function(){
			
			if(!$('#carousel').length>0){
				return false;
			}
			
			var self = this; // scope
  
			$(".owl-carousel", this.$html).owlCarousel({
				
				navigation : false,
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem : true
				
				// "singleItem:true" is a shortcut for:
				// items : 1, 
				// itemsDesktop : false,
				// itemsDesktopSmall : false,
				// itemsTablet: false,
				// itemsMobile : false
			
			});
			
			self.$buttons.on('click',function(e){
				e.preventDefault();
				var index = self.$buttons.index($(this));
			    $(".owl-carousel", self.$html).trigger('owl.goTo', index);
			});	
		
			// sets up auto
			self.timer = setInterval(function(){
				
										
					var curIndex = self.$buttons.index($('.button.active'));
					curIndex++;
					var newIndex = curIndex > 2 ? 0 : curIndex;
					
					$(".owl-carousel", self.$html).trigger('owl.goTo', newIndex);
					
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

}(jQuery, window, document));