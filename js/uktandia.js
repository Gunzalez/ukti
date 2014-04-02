/* 
AUTHOR: Segun Konbire
Date: 08.03.2014
*/

(function ($, window, document) {
	
	window.uktandia = {}
	
	uktandia.properties = {
		
		/* global properties */
		isMobile: false,
		isIE: false	
	}
	
	uktandia.carousel = {
		
		/* properties */		
		timer: '',
		delay: 12000,
		$html : $('#carousel'),
		$buttons: $('.controls a', this.$html),
		
		updateControls: function(index){
			
			this.$buttons.removeClass('active');
			
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
				
			});
			
			self.$buttons.on('click',function(e){
				
				e.preventDefault();
				
				var index = self.$buttons.index($(this));
				
			    $(".owl-carousel", self.$html).trigger('owl.goTo', index);
				
				clearInterval(self.timer);				
				
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
		
		/* properties */
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
	} /* accordion end */
	
	uktandia.mobile = {		
		
		/* properties */
		$mobileNavBtn: $('#mobile-nav-btn'),
		
		/* methods */
		_launchMobileNav: function(){
			
			var $mainPage = $('#wrapper'),
				$mobileNav = $('#mobile-nav-list'),
				$theStage = $('<div id="the-stage" />'),				
				$fakeWrapper = $('<div id="fake-wrapper" />'),
				$slidingContainer = $('<div id="sliding-container" />'),
				stageWidth = $(window).width(),
				stageHeight = $(window).height(),
				peakThrough = 45,
				slideSpeed = 250,
				easing = 'swing';				
				
			$theStage.css({
				width: stageWidth,
				height: stageHeight,
				position: 'relative',
				overflow: 'hidden'
			});
			
			$fakeWrapper.css({
				width: stageWidth,
				height: stageHeight,
				position: 'absolute',
				top: 0,
				left: 0
			});
			
			$mobileNav.css({
				width: stageWidth - peakThrough + 'px',
				position: 'absolute',
				top: 0,
				left: stageWidth + 'px',
				height: stageHeight,
				display: 'block'
			});			
			
			$slidingContainer.css({
				width: (stageWidth * 2) - peakThrough + 'px',
				height: stageHeight,					
				position: 'absolute',
				top: 0,
				left: 0
			});
			
			$fakeWrapper.append($mainPage);
			$slidingContainer.append($fakeWrapper).append($mobileNav);
			$theStage.append($slidingContainer);
			$('body').prepend($theStage);
			
			$slidingContainer.animate({				
				left:'-'+(stageWidth-45)+'px'	
			}, slideSpeed, easing);
			
		},
		
		_hideMobileNav: function(){
			
			var self = this,
				$slidingContainer = $('#sliding-container');
			
			$slidingContainer.animate({
				left:0	
			}, self.slideSpeed, self.easing, function(){
					self._destroyMobileNav();
				});
		},
		
		_destroyMobileNav: function(){
			
			var $mainPage = $('#wrapper'),
				$mobileNav = $('#mobile-nav-list'),
				$theStage = $('<div id="the-stage" />');
				
			$mobileNav.css({
				display:'none'
			}).removeAttr('style');
			
			$mainPage.removeAttr('style');
				
			$('body').prepend($mobileNav).prepend($mainPage);
			$('#the-stage').remove();
		},
		
		init: function(){
			
			var self = this;
			
			if($('#mobile-nav-btn').length > 0){
				
				$('#mobile-nav-btn a').on('click',function(evt){
					
					evt.preventDefault();
					
					if($('#the-stage').length > 0){
						
						self._hideMobileNav();
						
					} else {
						
						self._launchMobileNav();
						
					}
										
				});
					
			}	
		},
		
		resize: function(){
						
			var self = this;
						
			self._destroyMobileNav();
			
		}
		
	} /* mobile end */
	
	uktandia.megadropdown = {
		
		/* properties */
		isBusy: false,
		$links: $('.main-nav a'),
		$megaDropDivs: $('.megaDropDiv'),
		$megaDropDown: $('#megaDropDown'),
		
		resize: function(){
			
			var self = this;
			
			self._adjustMegaDivHeights();
			
		},
		
		_adjustMegaDivHeights: function(){
						
			var self = this;			
			
			var megaDropDownHeight = $('#header').height() > 130 ? $('#header').height() - 1 : 130
			self.$megaDropDown.css('top', megaDropDownHeight);
			
			self.$megaDropDivs.each(function(index, obj){
				
				$(obj).css('top','-'+$(obj).height()+'px');	
							
			});
			
		},
		
		_showMegaDropDownForThisLink: function($link, callback){
						
			var self = this,
				megaDropDivId = $link.attr('data-mega-drop');
			
			$link.addClass('active');
												
			self.$megaDropDown.height($('#'+megaDropDivId).height());
			
			$('#'+megaDropDivId).animate({
				top: 0	
			}, 250, function(){
				
				self.isBusy = false;
				
				if( callback != null ){
					
					callback();	
					
				} else {
					
					self.isBusy = false;
										
				}
			});
						
		},		
		
		_hideMegaDropDownForThisLink: function($link, callback){
						
			var self = this,
				megaDropDivId = $link.attr('data-mega-drop');
			
			$('#'+megaDropDivId).animate({									
				top: '-'+$('#'+megaDropDivId).height()+'px'									
			}, 250, function(){
				
				$link.removeAttr('class');
				
				self.$megaDropDown.height(0);
				
				if( callback != null ){
					
					callback();	
					
				} else {
					
					self.isBusy = false;					
				}
				
			});
			
		},
		
		init: function(){
						
			var self = this;
			
			self.$links.each(function(index, obj){
				
				$(obj).on('click',function(evt){					
				
					var megaDropDivId = $(this).attr('data-mega-drop');
					if (typeof megaDropDivId !== 'undefined' && megaDropDivId !== false) {						
						
						evt.preventDefault();
						
						if(!self.isBusy){
							
							self.isBusy = true;
							
							if(!$(this).hasClass('active')){
								
								var $curActiveItem = $('.active', self.$links.parent()),
									curDropDivId = $curActiveItem.attr('data-mega-drop');
									
								if( typeof curDropDivId !== 'undefined' ){
									
									var callback = function(){
										self._showMegaDropDownForThisLink($(evt.target), null);
									}
									
									self._hideMegaDropDownForThisLink($curActiveItem, callback);
									
									
								} else {
									
									self._showMegaDropDownForThisLink($(this), null);
									
								}
								
							} else {
								
								self._hideMegaDropDownForThisLink($(this), null);
								
							}
							
						}
					}
					
				});
			
			});
			
			if(uktandia.properties.isMobile){
				
				$('.previewSubDiv').remove();
				
			} else {
				
				$('.megaDropDiv').each(function(index, obj){
				
					var $megaDropSubDiv = $(obj),
						slinks = $('li', $megaDropSubDiv);
						
					slinks.each(function(index, obj){
						
						$(obj).on('mouseenter',function(){
						
							$('.previewDivContianer', $megaDropSubDiv).removeClass('show-preview');
							var previewId = $('a', $(obj)).attr('data-preview');
							
							if(typeof previewId !== 'undefined'){
								$('#'+previewId, $megaDropSubDiv).addClass('show-preview');
							}
							
						}).on('mouseleave',function(){						
						
							$('.previewDivContianer', $megaDropSubDiv).removeClass('show-preview');
							
						});
							
					});
					
				});				
				
			}
			
			self._adjustMegaDivHeights();
			
		}	
	} /* mega drop down end */
	
	uktandia.setGlobalVariable = function(){
		
		if($('html').hasClass('mobile')){
			
			uktandia.properties.isMobile = true;
			
		}
			
	}
	
	uktandia.init = function(){
		
		uktandia.setGlobalVariable();	
		
		uktandia.carousel.init();
		
		uktandia.accordion.init();	
		
		uktandia.mobile.init();
		
		uktandia.megadropdown.init();
		
		$(window).on('resize',function(){			
			
			uktandia.mobile.resize();
			
			uktandia.megadropdown.resize();
			
		});
			
	}	
	
	$( document ).ready(function() {	
		
		uktandia.init();		
		
	});

}(jQuery, window, document));