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
			
			
			// Makes carousel slide active, helps mobile devices
			$('.item', self.$html).each(function(index, obj){
				
				$(obj).on('click',function(){
					
					if($('a', $(obj)).length > 0){
						
						window.location = $('a', $(obj)).attr('href');
						
					}
					
				});
				
			});
					
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
		
	
	uktandia.results = {
		
		/* properties */
		$results: $('.result'),		
		
		init: function(){
			
			if(!$('.result').length>0){
				return false;
			}			
			
			var self = this; // scope			
				
			self.$results.each(function(i, obj){
				
				var $header = $('.heading', $(obj));
				
				$header.on('click',function(){
					
					window.location = $('.show-more', $(obj)).attr('href');
					
				});
												
			});
			
		}	
		
	} /* results end */
	
	
	uktandia.gallery = {
		
		/* properties */
		$gallery: $('.gallery'),		
		
		init: function(){
			
			if(!$('.gallery').length>0){
				return false;
			}			
			
			var self = this; // scope			
				
			var $clipImages  = $('.gallery .clip a'),
				ranNum = Math.floor(Math.random() * $clipImages.length) + 1,
				$hinLi = $('li', $clipImages.parents('.clip')).eq(ranNum-1),
				$hintText = $('<span class="click-to-enlarge">Click images to enlarge</span>');
				
			$('a', $hinLi).append($hintText).addClass('click-me');
				
				
			$('a', self.$gallery).on('click',function(){
				$('.click-to-enlarge').remove();
				$('.click-me').removeClass('click-me');
			});
			
		}	
		
	} /* gallery end */	
	
	
	
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
				peakThrough = 48,
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
				left:'-'+(stageWidth-peakThrough)+'px'	
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
	
	uktandia.mapforms = {
		
		$form: $('#formListings'),
		$map: $('.map-image', this.$form),
		
		_checkIfThisFormIsValid: function(){
			
			var self = this
			
			if($('#category', self.$form).val() == 'null' || $('#location', self.$form).val() == 'null'){

				self.$form.addClass('error');
				
				return false;
				
			} else {
				
				return true;
				
			}				
			
		},
		
		_setMapToThisLocation: function($obj){
						
			var self = this,
				srcArray = [],
				location = $obj.attr('class'),
				newImgSrc = 'map-'+location+'.png'
				curSrc = $('img', self.$map).attr('src');
			
			srcArray = curSrc.split('/');
			
			srcArray.pop();
			
			srcArray.push(newImgSrc);
			
			var newImgSrc = srcArray.join('/');
		
			$('img', self.$map).attr('src', newImgSrc);
			
		},
		
		_unSetMapAnyLocation: function(){
						
			var self = this,
				resetSrc = $('img', self.$map).attr('data-location-reset');
				
			$('img', self.$map).attr('src', resetSrc);
			
		},		
		
		init: function(){
						
			var self = this;
			
			if(!$('#formListings').length>0){
				return false;
			}
			
			$('[href="#"]', self.$map).each(function(index, obj){
				
				$(obj).on('click',function(evt){
					
					evt.preventDefault();
					
					var pickedLocation = $(obj).attr('class');
					
					$('#location', self.$form).val(pickedLocation).trigger('change');
					
					$('#submit', self.$form).trigger('click');
					
				})
				
				if(!uktandia.properties.isMobile){
					
					$(obj).on('mouseenter',function(){
						
						self._setMapToThisLocation($(obj));
						
					}).on('mouseleave',function(){
						
						self._unSetMapAnyLocation();
						
					});
				}
				
			});
			
			$(self.$form).on('submit',function(){
				
				var isValid = self._checkIfThisFormIsValid();

				if(!isValid){
					return false;	
				}
				
			});
			
		}		
	},
	
	uktandia.megadropdown = {
		
		/* properties */
		timer: '',
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
			self.$megaDropDown.css({
				top : megaDropDownHeight,
				height: 0
			});
			
			self.$megaDropDivs.each(function(index, obj){
				
				$(obj).css('top','-'+$(obj).height()+'px');	
							
			});
			
			self.$links.removeClass('active');
			
		},
		
		_switchMegaDropDownForTheseLinks: function($curLink, $newLink){
						
			var self = this;			
			
			var curMegaDropDiv = $curLink.attr('data-mega-drop'),
				curHeight = $('#'+curMegaDropDiv).height(),
				newMegaDropDiv =  $newLink.attr('data-mega-drop'),
				newHeight = $('#'+newMegaDropDiv).height();
			
			self.$links.removeClass('active');
			
			$newLink.addClass('active');
			
			$('#'+newMegaDropDiv).fadeOut();	
			
			$('#'+curMegaDropDiv).fadeOut(function(){
				
				self.$megaDropDown.animate({
					height: newHeight
				}, 50, function(){
					
					$('#'+newMegaDropDiv).css('top',0).fadeIn();
					
					$('#'+curMegaDropDiv).css('top', '-'+curHeight+'px').fadeIn();
					
					self.isBusy = false;
					
				});
			});
			
		},
		
		_showMegaDropDownForThisLink: function($link){
						
			var self = this,
				megaDropDivId = $link.attr('data-mega-drop');
			
			$link.addClass('active');
												
			self.$megaDropDown.animate({
				height: $('#'+megaDropDivId).height()
			}, 250);
			
			$('#'+megaDropDivId).animate({
				top: 0	
			}, 250, function(){
				
				self.isBusy = false;
				
			});
						
		},		
		
		_hideMegaDropDownForThisLink: function($link){
						
			var self = this,
				megaDropDivId = $link.attr('data-mega-drop');
				
			self.$megaDropDown.animate({
				height: 0
			}, 250);
			
			$('#'+megaDropDivId).animate({									
				top: '-'+$('#'+megaDropDivId).height()+'px'									
			}, 250, function(){
				
				$link.removeAttr('class');
				
				self.isBusy = false;
				
			});
			
		},
		
		_startMegaDropDownShutDown: function($link){
			
			//console.log('_startMegaDropDownShutDown')
			
			var self = this;
			
			var $curActiveItem = $('.active', self.$links.parent()),
				curDropDivId = $curActiveItem.attr('data-mega-drop');
				
			if( typeof curDropDivId !== 'undefined' ){									
										
				
			} else {
				
				self._hideMegaDropDownForThisLink($link);
																				
				clearInterval(self.timer);
				
			}		
			
		},
		
		init: function(){
				
			var self = this;
			
/*			if(uktandia.properties.isMobile){*/
			
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
										
										self._switchMegaDropDownForTheseLinks($curActiveItem, $(this));																		
										
									} else {
										
										self._showMegaDropDownForThisLink($(this));
										
									}
									
								} else {
									
									self._hideMegaDropDownForThisLink($(this));
									
								}
								
							}
							
						}
						
					});
				
				});
				
/*			} else {			
				
				self.$links.each(function(index, obj){
					
					$(obj).on('click',function(evt){
						
						evt.preventDefault();
						
					});
					
					$(obj).on('mouseenter',function(){
						
						if(!self.isBusy){
							
							self.isBusy = true;
							
							if(!$(this).hasClass('active')){
								
								var $curActiveItem = $('.active', self.$links.parent()),
									curDropDivId = $curActiveItem.attr('data-mega-drop'),
									$thisLink = $(this);
									
								if( typeof curDropDivId !== 'undefined' ){									
									
									self._switchMegaDropDownForTheseLinks($curActiveItem, $thisLink);																		
									
								} else {
									
									self._showMegaDropDownForThisLink($thisLink);
									
									self.timer = setInterval(function(){
										
										self._startMegaDropDownShutDown($thisLink);	
										
									}, 500);
									
								}								
								
							}
							
						}
						
					});
					
					$(obj).on('mouseleave',function(){
						
						$(obj).removeClass('active');
						
					});
					
					
				});
				
			}*/
			
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
		
		uktandia.results.init();	
		
		uktandia.mobile.init();
		
		uktandia.gallery.init();
		
		uktandia.megadropdown.init();
		
		uktandia.mapforms.init();
		
		$(window).on('resize',function(){			
			
			uktandia.mobile.resize();
			
			uktandia.megadropdown.resize();
			
		});
			
	}	
	
	$( window ).load(function() {	
		
		uktandia.init();		
		
	});

}(jQuery, window, document));